import { createContext, useContext, useEffect, useRef, useState } from "react";
import { checkSubstringInString } from "../utils/checkSubstringInString";
import {
  IMG_BASE_URL,
  SHORT_FILM_DURATION,
} from "../utils/constants/moviesSettings";
import { PARAMS } from "../utils/constants/windowResize";
import mainApi from "../utils/MainApi";
import movieApi from "../utils/MovieApi";
import useLocalStorage from "./useLocalStorage";
import useWindowDimensions from "./useWindowDimensions";

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
  const [isMoreButtonDisabled, setIsMoreButtonDisabled] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const filteredMovies = useRef(null);

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
      const res = await getAllMovies();
      console.log(res);
      const movies = moviesMapper(res);
      setAllMovies(movies);
      setFilters({ searchQuery, isShort });
      return;
    }
    setFilters({ searchQuery, isShort });
  };

  /**
   * Функция запрашивает все фильмы со стороннего API
   * @returns {Promise<Array>}
   */
  const getAllMovies = async () => {
    setIsPending(true);
    try {
      const res = await movieApi.getMovies();
      return res;
    } catch (e) {
      setApiError({ isError: true, message: e.message });
    } finally {
      setIsPending(false);
    }
  };

  /**
   * Функция запрашивает все сохраненные фильмы
   * @returns {Promise<void>}
   */
  const getSavesMovies = async () => {
    setIsPending(true);
    try {
      const { data } = await mainApi.getSavedMovies();
      setSavedMovies(data);
    } catch (e) {
      setApiError({ isError: true, message: e.message });
    } finally {
      setIsPending(false);
    }
  };

  /**
   * Функция сохраняет выбранный пользователем фильм
   * @param {object} movieData - объект с данными фильма
   * @returns {Promise<void>}
   */
  const saveMovieHandler = async (movieData) => {
    try {
      await mainApi.createMovie(movieData);
    } catch (e) {
      setApiError({ isError: true, message: e.message });
    }
  };

  /**
   * Функция удаляет выбранный пользователем фильм
   * @param {number} id - объект с данными фильма
   * @returns {Promise<void>}
   */
  const deleteMovieHandler = async (id) => {
    try {
      const { data } = await mainApi.deleteMovie(id);

      const filteredSavedMovies = savedMovies.filter(
        (movie) => movie.movieId !== data.movieId
      );

      setSavedMovies(filteredSavedMovies);
    } catch (e) {
      setApiError({ isError: true, message: e.message });
    }
  };

  /**
   * Функция маппер
   * @param {Array<object>} movies - массив фильмов
   * @returns {Array<object>} - массив фильмов
   */
  const moviesMapper = (movies) => {
    return movies.map((movie) => {
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

  const onLogoutMoviesHandler = () => {
    setAllMovies(null);
    setSavedMovies(null);
    filteredMovies.current = null;
  };

  const updateMovies = () => {
    const { moviesArray, currentMoviesLength } = getItemsFromStorage([
      "moviesArray",
      "currentMoviesLength",
    ]);
    if (!moviesArray) return;

    filteredMovies.current = moviesArray;
    const firstMoviesChunk = getChunk(moviesArray, currentMoviesLength);
    setMoviesArray(firstMoviesChunk);
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
    const chunkSize = currentMoviesRenderedLength + increment;
    const moviesChunk = filteredMovies.current.slice(0, chunkSize);

    setMoviesArray(moviesChunk);

    setItemsToLocaleStorage({
      currentMoviesLength: chunkSize,
    });
  };

  const filterSavedMoviesHandler = async (e) => {
    e.preventDefault();

    const { query, isChecked } = e.target;

    const filteredSavedMovies = moviesFilter(
      savedMovies,
      query.value,
      isChecked.checked
    );
    setSavedMovies(filteredSavedMovies);
  };

  const getChunk = (arr, chunkSize) => {
    return arr.slice(0, chunkSize);
  };

  const onChangeSearchParams = () => {
    const { searchQuery, isShort } = filters;
    const res = moviesFilter(allMovies, searchQuery, isShort);
    filteredMovies.current = res;
    const initialMoviesChunk = getChunk(res, moviesAtPageParams.initialNumber);
    setMoviesArray(initialMoviesChunk);

    setItemsToLocaleStorage({
      currentMoviesLength: moviesAtPageParams.initialNumber,
      moviesQuery: filters.searchQuery,
      moviesIsShort: filters.isShort,
      moviesArray: res,
    });
  };

  const onCheckboxClick = (value) => {
    setFilters((prev) => ({ ...prev, isShort: value }));
  };

  useEffect(() => {
    if (moviesArray?.length === filteredMovies.current?.length) {
      setIsMoreButtonDisabled(true);
    } else {
      setIsMoreButtonDisabled(false);
    }
  }, [moviesArray]);

  useEffect(() => {
    setMoviesAtPageParams(windowMoviesConfig);
  }, [windowMoviesConfig]);

  useEffect(() => {
    const id = setTimeout(() => setApiError(apiErrorDefault), 3000);
    return () => clearTimeout(id);
  }, [apiError]);

  useEffect(() => {
    if (!allMovies) return;
    onChangeSearchParams();
  }, [allMovies, filters]);

  return (
    <MoviesFlowContext.Provider
      value={{
        onMoviesSearchSubmit,
        apiError,
        isPending,
        moviesArray,
        updateMovies,
        onMoreMoviesClick,
        saveMovieHandler,
        deleteMovieHandler,
        getSavesMovies,
        savedMovies,
        isMoreButtonDisabled,
        filterSavedMoviesHandler,
        onLogoutMoviesHandler,
        onCheckboxClick,
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
