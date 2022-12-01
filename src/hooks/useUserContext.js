import { createContext, useContext, useEffect, useState } from "react";
import mainApi from "../utils/MainApi";

const apiErrorDefault = {
  isError: false,
  message: "",
};

const userInfoDefault = { name: "", email: "" };

export const UserFlowContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [apiError, setApiError] = useState(apiErrorDefault);
  const [userInfo, setUserInfo] = useState(userInfoDefault);

  const checkAuth = async () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      setIsLoggedIn(true);
      return true;
    }
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = e.target;

    try {
      const res = await mainApi.register(
        name.value,
        email.value,
        password.value
      );

      setIsLoggedIn(true);
      return res;
    } catch (e) {
      setApiError({ isError: true, message: e.message });
    }
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    try {
      const res = await mainApi.authorize(email.value, password.value);

      localStorage.setItem("jwt", res.token);

      setIsLoggedIn(true);
      return res;
    } catch (e) {
      setApiError({ isError: true, message: e.message });
    }
  };

  const getUser = async () => {
    try {
      const res = await mainApi.getUserInfo();
      setUserInfo({ name: res.data.name, email: res.data.email });
    } catch (e) {
      setApiError({ isError: true, message: e.message });
    }
  };
  const updateUser = async (e) => {
    e.preventDefault();
    const { name, email } = e.target;

    try {
      const res = await mainApi.updateUserInfo(name.value, email.value);
      setUserInfo({ name: res.data.name, email: res.data.email });
    } catch (e) {
      setApiError({ isError: true, message: e.message });
    }
  };

  useEffect(() => {
    const id = setTimeout(() => setApiError(apiErrorDefault), 3000);
    return () => clearTimeout(id);
  }, [apiError]);

  return (
    <UserFlowContext.Provider
      value={{
        handleRegistrationSubmit,
        handleLoginSubmit,
        getUser,
        updateUser,
        userInfo,
        isLoggedIn,
        checkAuth,
        setIsLoggedIn,
        apiError,
      }}
    >
      {children}
    </UserFlowContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserFlowContext);

  if (context === undefined || context === null) {
    throw new Error("Error");
  }

  return context;
};
