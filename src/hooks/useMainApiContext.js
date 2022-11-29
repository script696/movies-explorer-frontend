import { createContext, useContext, useState } from "react";
import mainApi from "../utils/MainApi";
import { useHistory } from "react-router-dom";

export const AuthFlowContext = createContext(undefined);

export const MainApiProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkAuth = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) setIsLoggedIn(true);
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
      console.log(e);
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
      console.log(e);
    }
  };

  return (
    <AuthFlowContext.Provider
      value={{
        handleRegistrationSubmit,
        handleLoginSubmit,
        isLoggedIn,
        checkAuth,
        setIsLoggedIn,
      }}
    >
      {children}
    </AuthFlowContext.Provider>
  );
};

export const useMainApiContext = () => {
  const context = useContext(AuthFlowContext);

  if (context === undefined || context === null) {
    throw new Error("Error");
  }

  return context;
};
