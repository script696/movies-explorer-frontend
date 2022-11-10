import s from "./NavTab.module.scss";

const NavTab = () => {
  return (
    <nav className={s.navTab}>
      <a href="/" className={s.navTab__link}>
        О проекте
      </a>
      <a href="/" className={s.navTab__link}>
        Технологии
      </a>
      <a href="/" className={s.navTab__link}>
        Студент
      </a>
    </nav>
  );
};

export default NavTab;
