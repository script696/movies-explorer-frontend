import { SectionTitle } from "../index";
import s from "./Techs.module.scss";

const Techs = () => {
  const techs = ["HTML", "CSS", "JS", "React", "Git", "Express.js", "mongoDB"];

  return (
    <section id="techsSection" className={s.techs}>
      <div className={s.techs__wrapper}>
        <SectionTitle title="Технологии" />
        <div className={s.techs__description}>
          <h3 className={s.techs__subtitle}>7 технологий</h3>
          <p className={s.techs__text}>
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className={s.techs__list}>
          {techs.map((tech) => (
            <li key={tech} className={s.techs__tech}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Techs;
