import s from "./MoviesCardList.module.scss";
import { MoviesCard } from "../index";

const MoviesCardList = ({ movies, reversed }) => {
  return (
    <section className={s.moviesCardList}>
      <div className={s.moviesCardList__grid}>
        {movies?.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} reversed={reversed} />
        ))}
      </div>
    </section>
  );
};

export default MoviesCardList;
