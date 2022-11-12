import s from "./MoviesCardList.module.scss";
import { MoviesCard } from "../index";

const MoviesCardList = ({ movies }) => {
  return (
    <section className={s.moviesCardList}>
      <div className={s.moviesCardList__grid}>
        {movies?.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MoviesCardList;
