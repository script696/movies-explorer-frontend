import s from "./Main.module.scss";
import {
  Promo,
  NavTab,
  Techs,
  AboutProject,
  Portfolio,
  AboutMe,
} from "../../components";

const Main = () => {
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

export default Main;
