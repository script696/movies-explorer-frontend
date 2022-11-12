import s from "./SavedMovies.module.scss";
import { MoviesCardList, SearchForm } from "../../components";
import { mokedData } from "../Movies/mokedData";

const SavedMovies = () => {
  const filteredMovies = mokedData.filter((movie) => movie.isSaved);
  return (
    <section className={s.savedMovies}>
      <div className={s.savedMovies__wrapper}>
        <SearchForm />
        <MoviesCardList movies={filteredMovies} reversed />
      </div>
    </section>
  );
};

export default SavedMovies;
