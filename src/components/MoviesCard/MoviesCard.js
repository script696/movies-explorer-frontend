import s from "./MoviesCard.module.scss";
import getClassname from "../../utils/getClassname";

const MoviesCard = ({
  movie: { title, duration, img, isSaved, onSave },
  reversed,
}) => {
  const btnStyle = [
    s.moviesCard__btn,
    isSaved && s.moviesCard__btn_saved,
    reversed && s.moviesCard__btn_unSaved,
  ];

  const isBtnDisabled = isSaved && !reversed;

  return (
    <article className={s.moviesCard}>
      <div className={s.moviesCard__top}>
        <p className={s.moviesCard__title}>{title}</p>
        <p className={s.moviesCard__duration}>{`${duration} минут`}</p>
      </div>
      <img className={s.moviesCard__logo} src={img} alt={title} />
      <div className={s.moviesCard__bottom}>
        <button
          onClick={() => console.log("click")}
          className={getClassname(btnStyle)}
          type="button"
          disabled={isBtnDisabled}
        >
          {!isSaved && !reversed && <span>Сохранить</span>}
        </button>
      </div>
    </article>
  );
};

export default MoviesCard;
