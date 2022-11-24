import s from "./Movies.module.scss";
import { MoviesCardList, Preloader, SearchForm } from "../../components";
import { mokedData } from "./mokedData";
import MoviesMore from "../../components/MoviesMore/MoviesMore";
import { useEffect, useState } from "react";

const Movies = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeOutId = setTimeout(() => setIsLoading(false), 1000 * 3);
    return () => clearTimeout(timeOutId);
  }, []);

  return (
    <section className={s.movies}>
      <div className={s.movies__wrapper}>
        <SearchForm />
        {isLoading ? <Preloader /> : <MoviesCardList movies={mokedData} />}
        <MoviesMore />
      </div>
    </section>
  );
};

export default Movies;
