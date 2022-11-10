import s from "./AboutProjectPage.module.scss";
import {
  Promo,
  NavTab,
  Techs,
  AboutProject,
  Portfolio,
  AboutMe,
} from "../../components";

const AboutProjectPage = () => {
  return (
    <section className={s.aboutProject}>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </section>
  );
};

export default AboutProjectPage;
