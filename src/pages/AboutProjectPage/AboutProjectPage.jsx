import s from "./AboutProjectPage.module.scss";
import { Promo, NavTab, Techs, AboutProject } from "../../components";
import AboutMe from "../../components/AboutMe/AboutMe";

const AboutProjectPage = () => {
  return (
    <section className={s.aboutProject}>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
    </section>
  );
};

export default AboutProjectPage;
