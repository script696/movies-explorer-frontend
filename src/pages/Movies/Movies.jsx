import s from "./Movies.module.scss";
import { MoviesCardList, Preloader, SearchForm } from "../../components";
import MoviesMore from "../../components/MoviesMore/MoviesMore";
import { useEffect, useRef, useState } from "react";
import { useMoviesContext } from "../../hooks/useMoviesContext";

const Movies = () => {
  const {
    onMoviesSearchSubmit,
    isLoading,
    moviesArray,
    updateMovies,
    onMoreMoviesClick,
  } = useMoviesContext();
  const onSubmit = (e) => {
    onMoviesSearchSubmit(e);
  };

  useEffect(() => {
    updateMovies();
  }, []);

  return (
    <section className={s.movies}>
      <div className={s.movies__wrapper}>
        <SearchForm onSearchSubmit={onSubmit} />
        {isLoading ? <Preloader /> : <MoviesCardList movies={moviesArray} />}
        <MoviesMore onMoreMoviesClick={onMoreMoviesClick} />
      </div>
    </section>
  );
};

export default Movies;
