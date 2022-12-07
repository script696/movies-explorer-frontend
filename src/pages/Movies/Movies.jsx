import { useEffect } from "react";
import { MoviesCardList, Preloader, SearchForm } from "../../components";
import MoviesMore from "../../components/MoviesMore/MoviesMore";
import { useMoviesContext } from "../../hooks/useMoviesContext";
import s from "./Movies.module.scss";

const Movies = () => {
  const {
    onMoviesSearchSubmit,
    isPending,
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
        {isPending ? <Preloader /> : <MoviesCardList movies={moviesArray} />}
        <MoviesMore onMoreMoviesClick={onMoreMoviesClick} />
      </div>
    </section>
  );
};

export default Movies;
