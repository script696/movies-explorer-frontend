import { useEffect, useState } from "react";
import { useMoviesContext } from "./useMoviesContext";
import { useUserContext } from "./useUserContext";

const useErrors = () => {
  const [isApiError, setIsApiError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { apiError: moviesApiError } = useMoviesContext();
  const { apiError: userApiError } = useUserContext();

  useEffect(() => {
    if (moviesApiError.isError || userApiError.isError) setIsApiError(true);
    if (!moviesApiError.isError && !userApiError.isError) setIsApiError(false);
  }, [moviesApiError, userApiError]);

  useEffect(() => {
    setErrorMessage(moviesApiError.message);
  }, [moviesApiError]);

  useEffect(() => {
    setErrorMessage(userApiError.message);
  }, [userApiError]);

  return { isApiError, errorMessage };
};

export default useErrors;
