import s from "./Movies.module.scss";
import { MoviesCardList, SearchForm } from "../../components";
import { mokedData } from "./mokedData";
import MoviesMore from "../../components/MoviesMore/MoviesMore";

const Movies = () => {
  return (
    <section className={s.movies}>
      <div className={s.movies__wrapper}>
        <SearchForm />
        <MoviesCardList movies={mokedData} />
        <MoviesMore />
      </div>
    </section>
  );
};

export default Movies;
