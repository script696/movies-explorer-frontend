import { useMoviesContext } from "../../hooks";
import getClassname from "../../utils/getClassname";
import s from "./MoviesMore.module.scss";

const MoviesMore = ({ onMoreMoviesClick }) => {
  const { isMoreButtonDisabled } = useMoviesContext();

  const moviesMoreBtnStyles = [
    s.moviesMore__btn,
    isMoreButtonDisabled && s.moviesMore__btn_disabled,
  ];

  return (
    <section className={s.moviesMore}>
      <button
        className={getClassname(moviesMoreBtnStyles)}
        type="button"
        onClick={onMoreMoviesClick}
      >
        Еще
      </button>
    </section>
  );
};

export default MoviesMore;
