import s from "./AboutProjectPage.module.scss";
import { Promo, NavTab } from "../../components";
import AboutProject from "../../components/AboutProject/AboutProject";

const AboutProjectPage = () => {
  return (
    <section className={s.aboutProject}>
      <Promo />
      <NavTab />
      <AboutProject />
    </section>
  );
};

export default AboutProjectPage;
