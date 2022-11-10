import s from "./AboutProjectPage.module.scss";
import { Promo, NavTab, Techs, AboutProject } from "../../components";

const AboutProjectPage = () => {
  return (
    <section className={s.aboutProject}>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
    </section>
  );
};

export default AboutProjectPage;
