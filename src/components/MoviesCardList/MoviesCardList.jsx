import s from "./MoviesCardList.module.scss";
import { MoviesCard } from "../index";

const MoviesCardList = ({ movies }) => {
  return (
    <section className={s.moviesCardList}>
      {movies?.map((movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
};

export default MoviesCardList;
