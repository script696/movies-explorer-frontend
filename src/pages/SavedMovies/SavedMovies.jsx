import s from "./SavedMovies.module.scss";
import { MoviesCardList, Preloader, SearchForm } from "../../components";
import { mokedData } from "../Movies/mokedData";
import { useEffect, useState } from "react";

const SavedMovies = () => {
  const [isLoading, setIsLoading] = useState(true);

  const filteredMovies = mokedData.filter((movie) => movie.isSaved);
  useEffect(() => {
    const timeOutId = setTimeout(() => setIsLoading(false), 1000 * 3);
    return () => clearTimeout(timeOutId);
  }, []);

  return (
    <section className={s.savedMovies}>
      <div className={s.savedMovies__wrapper}>
        <SearchForm />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList movies={filteredMovies} reversed />
        )}
      </div>
    </section>
  );
};

export default SavedMovies;
