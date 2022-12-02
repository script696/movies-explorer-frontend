import { createContext, useContext, useEffect, useRef, useState } from "react";
import movieApi from "../utils/MovieApi";
import { checkSubstringInString } from "../utils/checkSubstringInString";
import {
  IMG_BASE_URL,
  SHORT_FILM_DURATION,
} from "../utils/constants/moviesSettings";
import { useLocalStorage } from "./index";

const apiErrorDefault = {
  isError: false,
  message: "",
};

export const MoviesFlowContext = createContext(undefined);

export const MoviesProvider = ({ children }) => {
  const { setItemsToLocaleStorage } = useLocalStorage();
  const [apiError, setApiError] = useState(apiErrorDefault);
  const [allMovies, setAllMovies] = useState(null);
  const [searchParams, setSearchParams] = useState({
    queryValue: "",
    isShortValue: false,
  });
  const isLoading = useRef(false);

  const getMovies = async (e) => {
    e.preventDefault();

    const { query, isShort } = e.target;
    const moviesQuery = query.value;
    const moviesIsShort = isShort.checked;
    console.log(moviesIsShort);
    if (!allMovies) {
      const movies = await fetchMovies();
      setAllMovies(movies);
      const moviesArray = moviesFilter(movies, moviesQuery, moviesIsShort);
      setMoviesToStorage(moviesArray, moviesQuery, moviesIsShort);
      return { moviesArray, moviesQuery, moviesIsShort };
    }
    const moviesArray = moviesFilter(allMovies, moviesQuery, moviesIsShort);
    setMoviesToStorage(moviesArray, moviesQuery, moviesIsShort);
    return { moviesArray, moviesQuery, moviesIsShort };
  };

  const fetchMovies = async () => {
    isLoading.current = true;
    try {
      const res = await movieApi.getMovies();
      const mappedMovies = moviesMapper(res);
      setAllMovies(mappedMovies);
      return mappedMovies;
    } catch (e) {
      setApiError({ isError: true, message: e.message });
    } finally {
      isLoading.current = false;
    }
  };

  const moviesMapper = (movies) => {
    return movies.map(({ id, nameEN, nameRU, duration, image: { url } }) => {
      const mappedMovie = {
        id,
        nameRU,
        nameEN,
        duration,
        img: `${IMG_BASE_URL}${url}`,
      };
      return mappedMovie;
    });
  };

  const setMoviesToStorage = (movies, queryValue, isShortValue) => {
    setItemsToLocaleStorage({
      moviesQuery: queryValue,
      moviesIsShort: isShortValue,
      moviesArray: movies,
    });
  };

  const moviesFilter = (movies, query, isShortFilter = false) => {
    return movies.filter(({ nameRU, nameEN, duration }) => {
      const isRuFilm = checkSubstringInString({
        string: nameRU,
        subString: query,
      });
      const isEnFilm = checkSubstringInString({
        string: nameEN,
        subString: query,
      });
      const isDuration = isShortFilter ? duration <= SHORT_FILM_DURATION : true;
      return isDuration && (isRuFilm || isEnFilm);
    });
  };

  useEffect(() => {
    const id = setTimeout(() => setApiError(apiErrorDefault), 3000);
    return () => clearTimeout(id);
  }, [apiError]);

  return (
    <MoviesFlowContext.Provider
      value={{
        getMovies,
        apiError,
        isLoading: isLoading.current,
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
