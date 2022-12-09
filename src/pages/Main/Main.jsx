import {
  AboutMe,
  AboutProject,
  NavTab,
  Portfolio,
  Promo,
  Techs,
} from "../../components";
import s from "./Main.module.scss";

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
