import { SectionTitle } from "../index";
import s from "./AboutProject.module.scss";

const AboutProject = () => {
  return (
    <section id="aboutSection" className={s.aboutProject}>
      <div className={s.aboutProject__wrapper}>
        <SectionTitle title="О проекте" />
        <div className={s.aboutProject__description}>
          <div className={s.aboutProject__col}>
            <h3 className={s.aboutProject__subtitle}>
              Дипломный проект включал 5 этапов
            </h3>
            <p className={s.aboutProject__text}>
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className={s.aboutProject__col}>
            <h3 className={s.aboutProject__subtitle}>
              На выполнение диплома ушло 5 недель
            </h3>
            <p className={s.aboutProject__text}>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className={s.aboutProject__duration}>
          <div className={s.aboutProject__back}>1 неделя</div>
          <div className={s.aboutProject__front}>4 недели</div>
          <p className={s.aboutProject__durationText}>Back-end</p>
          <p className={s.aboutProject__durationText}>Front-end</p>
        </div>
      </div>
    </section>
  );
};
export default AboutProject;
