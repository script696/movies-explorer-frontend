import { useState } from "react";
import { useMoviesContext } from "../../hooks";
import getClassname from "../../utils/getClassname";
import s from "./MoviesCard.module.scss";

const MoviesCard = ({ movie, reversed }) => {
  const { saveMovieHandler, savedMovies, deleteMovieHandler } =
    useMoviesContext();
  const { nameRU, mappedDuration: duration, image, movieId } = movie;

  const isSaved = savedMovies?.some(
    (savedMovie) => savedMovie.movieId === movie.movieId
  );
  const [isMovieSaved, setIsMovieSaved] = useState(isSaved);

  const btnStyle = [
    s.moviesCard__btn,
    isMovieSaved && s.moviesCard__btn_saved,
    reversed && s.moviesCard__btn_unSaved,
  ];

  const onButtonClick = () => {
    if (isMovieSaved) {
      deleteMovieHandler(movieId);
      setIsMovieSaved(false);
    } else {
      saveMovieHandler(movie);
      setIsMovieSaved(true);
    }
  };

  return (
    <article className={s.moviesCard}>
      <div className={s.moviesCard__top}>
        <p className={s.moviesCard__title}>{nameRU}</p>
        <p className={s.moviesCard__duration}>{duration}</p>
      </div>
      <img className={s.moviesCard__logo} src={image} alt={nameRU} />
      <div className={s.moviesCard__bottom}>
        <button
          onClick={onButtonClick}
          className={getClassname(btnStyle)}
          type="button"
          // disabled={isBtnDisabled}
        >
          {!isMovieSaved && !reversed && <span>Сохранить</span>}
        </button>
      </div>
    </article>
  );
};

export default MoviesCard;
