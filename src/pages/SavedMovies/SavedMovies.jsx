import s from "./SavedMovies.module.scss";
import { MoviesCardList, Preloader, SearchForm } from "../../components";
import { useEffect, useState } from "react";
import { useMoviesContext } from "../../hooks/useMoviesContext";

const SavedMovies = () => {
  const { getSavesMovies, savedMovies, isLoading } = useMoviesContext();

  useEffect(() => {
    getSavesMovies();
  }, []);

  return (
    <section className={s.savedMovies}>
      <div className={s.savedMovies__wrapper}>
        <SearchForm />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList movies={savedMovies} reversed />
        )}
      </div>
    </section>
  );
};

export default SavedMovies;
