import { useEffect } from "react";
import { MoviesCardList, Preloader, SearchForm } from "../../components";
import { useMoviesContext } from "../../hooks/useMoviesContext";
import s from "./SavedMovies.module.scss";

const SavedMovies = () => {
  const { filterSavedMoviesHandler, getSavesMovies, savedMovies, isPending } =
    useMoviesContext();

  const onSubmit = (e) => {
    filterSavedMoviesHandler(e);
  };

  useEffect(() => {
    getSavesMovies();
  }, []);

  return (
    <section className={s.savedMovies}>
      <div className={s.savedMovies__wrapper}>
        <SearchForm onSearchSubmit={onSubmit} />
        {isPending ? (
          <Preloader />
        ) : (
          <MoviesCardList movies={savedMovies} reversed />
        )}
      </div>
    </section>
  );
};

export default SavedMovies;
