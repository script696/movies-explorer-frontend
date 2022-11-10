import s from "./Movies.module.scss";
import { SearchForm } from "../../components";

const Movies = () => {
  return (
    <section className={s.movies}>
      <div className={s.movies__wrapper}>
        <SearchForm />
      </div>
    </section>
  );
};

export default Movies;
