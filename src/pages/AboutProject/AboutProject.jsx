import s from "./AboutProject.module.scss";
import { Header } from "../../components";
import { introGrid } from "../../assets/images";
import Promo from "../../components/Promo/Promo";
import NavTab from "../../components/NavTab/NavTab";

const AboutProject = () => {
  return (
    <section className={s.aboutProject}>
      <Promo />
      <NavTab />
    </section>
  );
};

export default AboutProject;
