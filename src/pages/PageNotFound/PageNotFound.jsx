import s from "./PageNotFound.module.scss";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className={s.pageNotFound}>
      <div className={s.pageNotFound__wrapper}>
        <div className={s.pageNotFound__content}>
          <h2 className={s.pageNotFound__title}>404</h2>
          <p className={s.pageNotFound__subtitle}>Страница не найдена</p>
        </div>
        <Link className={s.pageNotFound__link} to="/">
          Назад
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
