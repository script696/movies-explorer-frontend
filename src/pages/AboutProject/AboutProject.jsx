import s from "./AboutProject.module.scss";
import { Header } from "../../components";
import { introGrid } from "../../assets/images";
import Promo from "../../components/Promo/Promo";

const AboutProject = () => {
  return (
    <section className={s.aboutProject}>
      <Promo />
    </section>
  );
};

export default AboutProject;
