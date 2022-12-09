import { introGrid } from "../../assets/images";
import s from "./Promo.module.scss";

const Promo = () => {
  return (
    <section className={s.promo}>
      <div className={s.promo__wrapper}>
        <h1 className={s.promo__title}>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <img src={introGrid} alt="Логотип П" className={s.promo__logo} />
      </div>
    </section>
  );
};

export default Promo;
