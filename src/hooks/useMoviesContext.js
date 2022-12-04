import { createContext, useContext, useEffect, useRef, useState } from "react";
import movieApi from "../utils/MovieApi";
import { checkSubstringInString } from "../utils/checkSubstringInString";
import {
  IMG_BASE_URL,
  SHORT_FILM_DURATION,
} from "../utils/constants/moviesSettings";
import { useLocalStorage } from "./index";
import useWindowDimensions from "./useWindowDimensions";
import { PARAMS } from "../utils/constants/windowResize";
import mainApi from "../utils/MainApi";

const apiErrorDefault = {
  isError: false,
  message: "",
};

export const MoviesFlowContext = createContext(undefined);

export const MoviesProvider = ({ children }) => {
  const { setItemsToLocaleStorage, getItemsFromStorage } = useLocalStorage();
  const { windowMoviesConfig } = useWindowDimensions();
  const [apiError, setApiError] = useState(apiErrorDefault);
  const [allMovies, setAllMovies] = useState(null);
  const [moviesArray, setMoviesArray] = useState(null);
  const [savedMovies, setSavedMovies] = useState(null);
  const [moviesAtPageParams, setMoviesAtPageParams] = useState(PARAMS.desktop);
  const [filters, setFilters] = useState({ searchQuery: "", isShort: false });
  const filteredMovies = useRef(null);

  const isLoading = useRef(false);

  /**
   * Функция обрабатывает событие нажатия на кнопку поиска фильмов
   * При первом нажатии (allMovies - null) выполняется запрос бэк, массив фильмов
   * мапится, в стейт записываются массив найденных фильмов и параметры фильтров
   * При повторном нажатии (allMovies - Array<object>) обновляются параметры фильтров
   * @param e
   * @returns {Promise<void>}
   */
  const onMoviesSearchSubmit = async (e) => {
    e.preventDefault();

    const { query, isChecked } = e.target;
    const searchQuery = query.value;
    const isShort = isChecked.checked;

    if (!allMovies) {
      const res = await fetchMovies();
      const movies = moviesMapper(res);
      setAllMovies(movies);
      setFilters({ searchQuery, isShort });
      return;
    }
    setFilters({ searchQuery, isShort });
  };

  /**
   * Функция запроса фильмов
   * @returns {Promise<Array>}
   */
  const fetchMovies = async () => {
    isLoading.current = true;
    try {
      const res = await movieApi.getMovies();
      return res;
    } catch (e) {
      setApiError({ isError: true, message: e.message });
    } finally {
      isLoading.current = false;
    }
  };

  const getSavesMovies = async () => {
    isLoading.current = true;
    try {
      const { data } = await mainApi.getSavedMovies();
      setSavedMovies(data);
    } catch (e) {
      setApiError({ isError: true, message: e.message });
    } finally {
      isLoading.current = false;
    }
  };

  const saveMovieHandler = async (movieData) => {
    try {
      const { data } = await mainApi.createMovie(movieData);
      console.log(data);
    } catch (e) {
      setApiError({ isError: true, message: e.message });
    }
  };

  const updateSavedMoviesHandler = (id) => {
    const filteredSavedMovies = savedMovies.filter(
      (movie) => movie.movieId !== id
    );
    setSavedMovies(filteredSavedMovies);
  };

  const deleteMovieHandler = async (id) => {
    try {
      const { data } = await mainApi.deleteMovie(id);
      updateSavedMoviesHandler(data.movieId);
    } catch (e) {
      setApiError({ isError: true, message: e.message });
    }
  };

  /**
   *
   * @param {Array<object>} movies - массив фильмов
   * @returns {Array<object>} - массив фильмов
   */
  const moviesMapper = (movies) => {
    return movies.map((movie) => {
      console.log(`${IMG_BASE_URL}${movie.image.url}`);
      return {
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        duration: movie.duration,
        country: movie.country,
        director: movie.director,
        year: movie.year,
        trailerLink: movie.trailerLink,
        description: movie.description,
        image: `${IMG_BASE_URL}${movie.image.url}`,
        thumbnail: `${IMG_BASE_URL}${movie.image.formats.thumbnail.url}`,
      };
    });
  };

  const setMoviesToStorage = (movies, queryValue, isShortValue) => {
    setItemsToLocaleStorage({
      moviesQuery: queryValue,
      moviesIsShort: isShortValue,
      moviesArray: movies,
    });
  };

  const updateMovies = () => {
    const { moviesArray, moviesQuery, moviesIsShort } = getItemsFromStorage([
      "moviesArray",
      "moviesQuery",
      "moviesIsShort",
    ]);
    setMoviesArray(moviesArray);
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

  const onMoreMoviesClick = () => {
    const currentMoviesRenderedLength = moviesArray.length;
    const increment = moviesAtPageParams.increment;

    setMoviesArray(
      filteredMovies.current.slice(0, currentMoviesRenderedLength + increment)
    );
  };

  const getChunk = (arr, chunkSize) => {
    return arr.slice(0, chunkSize);
  };

  const testFoo = () => {
    const { searchQuery, isShort } = filters;
    const res = moviesFilter(allMovies, searchQuery, isShort);
    filteredMovies.current = res;
    const initialMoviesChunk = getChunk(res, moviesAtPageParams.initialNumber);
    setMoviesArray(initialMoviesChunk);

    setMoviesToStorage(
      initialMoviesChunk,
      filters.searchQuery,
      filters.isShort
    );
  };

  useEffect(() => {
    setMoviesAtPageParams(windowMoviesConfig);
  }, [windowMoviesConfig]);

  useEffect(() => {
    const id = setTimeout(() => setApiError(apiErrorDefault), 3000);
    return () => clearTimeout(id);
  }, [apiError]);

  useEffect(() => {
    if (!allMovies) return;
    testFoo();
  }, [allMovies, filters]);

  return (
    <MoviesFlowContext.Provider
      value={{
        onMoviesSearchSubmit,
        apiError,
        isLoading: isLoading.current,
        moviesArray,
        updateMovies,
        onMoreMoviesClick,
        saveMovieHandler,
        deleteMovieHandler,
        getSavesMovies,
        savedMovies,
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
