import s from "./MoviesMore.module.scss";

const MoviesMore = ({ onMoreMoviesClick }) => {
  return (
    <section className={s.moviesMore}>
      <button
        className={s.moviesMore__btn}
        type="button"
        onClick={onMoreMoviesClick}
      >
        Еще
      </button>
    </section>
  );
};

export default MoviesMore;
