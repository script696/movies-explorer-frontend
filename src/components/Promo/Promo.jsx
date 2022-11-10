import s from "./Promo.module.scss";
import { Header } from "../index";

const Promo = () => {
  return (
    <section className={s.promo}>
      <div className={s.promo__wrapper}>
        <h1 className={s.promo__title}>
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
    </section>
  );
};

export default Promo;
