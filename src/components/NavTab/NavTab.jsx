import s from "./NavTab.module.scss";

const NavTab = () => {
  return (
    <nav className={s.navTab}>
      <a href="#aboutSection" className={s.navTab__link}>
        О проекте
      </a>
      <a href={"#techsSection"} className={s.navTab__link}>
        Технологии
      </a>
      <a href={"#aboutMeSection"} className={s.navTab__link}>
        Студент
      </a>
    </nav>
  );
};

export default NavTab;
