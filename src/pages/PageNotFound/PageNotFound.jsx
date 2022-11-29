import s from "./PageNotFound.module.scss";
import { useHistory } from "react-router-dom";

const PageNotFound = () => {
  const { goBack } = useHistory();

  return (
    <section className={s.pageNotFound}>
      <div className={s.pageNotFound__wrapper}>
        <div className={s.pageNotFound__content}>
          <h2 className={s.pageNotFound__title}>404</h2>
          <p className={s.pageNotFound__subtitle}>Страница не найдена</p>
        </div>
        <button
          type="button"
          className={s.pageNotFound__link}
          onClick={() => goBack()}
        >
          Назад
        </button>
      </div>
    </section>
  );
};

export default PageNotFound;
