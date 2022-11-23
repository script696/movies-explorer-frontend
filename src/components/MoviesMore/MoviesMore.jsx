import s from "./MoviesMore.module.scss";

const MoviesMore = () => {
  return (
    <section className={s.moviesMore}>
      <button className={s.moviesMore__btn} type="button">
        Еще
      </button>
    </section>
  );
};

export default MoviesMore;
