import { createContext, useContext, useEffect, useState } from "react";
import mainApi from "../utils/MainApi";

const apiErrorDefault = {
  isError: false,
  message: "",
};

export const MoviesFlowContext = createContext(undefined);

export const MoviesProvider = ({ children }) => {
  const [apiError, setApiError] = useState(apiErrorDefault);

  const getAllMovies = async (e) => {
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

  useEffect(() => {
    const id = setTimeout(() => setApiError(apiErrorDefault), 3000);
    return () => clearTimeout(id);
  }, [apiError]);

  return (
    <MoviesFlowContext.Provider
      value={{
        handleRegistrationSubmit,
        apiError,
      }}
    >
      {children}
    </MoviesFlowContext.Provider>
  );
};

export const useMoviesContext = () => {
  const context = useContext(MoviesFlowContext);

  if (context === undefined || context === null) {
    throw new Error("Error");
  }

  return context;
};
