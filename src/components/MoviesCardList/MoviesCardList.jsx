import s from "./MoviesCardList.module.scss";
import { MoviesCard } from "../index";
import getClassname from "../../utils/getClassname";

const MoviesCardList = ({ movies, reversed }) => {
  const isMoviesFound = movies?.length;

  const moviesCardListStyles = [
    s.moviesCardList,
    isMoviesFound || s.moviesCardList_style_not_found,
  ];
  return (
    <section className={getClassname(moviesCardListStyles)}>
      {isMoviesFound ? (
        <div className={s.moviesCardList__grid}>
          {movies?.map((movie) => (
            <MoviesCard key={movie.id} movie={movie} reversed={reversed} />
          ))}
        </div>
      ) : (
        <span className={s.moviesCardList__notFound}>Ничего не найдено</span>
      )}
    </section>
  );
};

export default MoviesCardList;
