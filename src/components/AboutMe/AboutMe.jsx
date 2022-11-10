import s from "./AboutMe.module.scss";
import { SectionTitle } from "../index";
import { avatar } from "../../assets/images";

const AboutMe = () => {
  return (
    <section className={s.aboutMe}>
      <div className={s.aboutMe__wrapper}>
        <SectionTitle title="Студент" />
        <div className={s.aboutMe__content}>
          <div className={s.aboutMe__col}>
            <h3 className={s.aboutMe__subtitle}>Никита</h3>
            <p className={s.aboutMe__role}>Фронтенд-разработчик, 29 лет</p>
            <p className={s.aboutMe__text}>
              Я родился и живу в Санкт_петербурге, закончил факультет экономики
              СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё
              увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в
              компании «СКБ Контур». После того, как прошёл курс по
              веб-разработке, начал заниматься фриланс-заказами и ушёл с
              постоянной работы.
            </p>
            <a href="/" target="_blank" className={s.aboutMe__link}>
              Github
            </a>
          </div>
          <div className={s.aboutMe__col}>
            <img
              src={avatar}
              alt="аватар студента"
              className={s.aboutMe__avatar}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
