import s from "./Movies.module.scss";
import { MoviesCardList, Preloader, SearchForm } from "../../components";
import { mokedData } from "./mokedData";
import MoviesMore from "../../components/MoviesMore/MoviesMore";
import { useEffect, useRef, useState } from "react";
import { useMoviesContext } from "../../hooks/useMoviesContext";
import { useLocalStorage } from "../../hooks";

const Movies = () => {
  const { getMovies, isLoading } = useMoviesContext();

  const { getItemsFromStorage } = useLocalStorage();
  const [moviesData, setMoviesData] = useState({});
  const onSubmit = async (e) => {
    const movies = await getMovies(e);
    setMoviesData(movies);
  };

  useEffect(() => {
    const movies = getItemsFromStorage([
      "moviesArray",
      "moviesQuery",
      "moviesIsShort",
    ]);
    setMoviesData(movies);
  }, []);

  return (
    <section className={s.movies}>
      <div className={s.movies__wrapper}>
        <SearchForm
          onSearchSubmit={onSubmit}
          defaultInputValue={moviesData.moviesQuery}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList movies={moviesData.moviesArray} />
        )}
        <MoviesMore />
      </div>
    </section>
  );
};

export default Movies;
