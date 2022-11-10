import s from "./Header.module.scss";
import { logo } from "../../assets/images";
import { MenuLink } from "../index";

const Header = () => {
  return (
    <header className={s.header}>
      <img src={logo} alt="логотип" className={s.header__logo} />
      <div className={s.header__navWrapper}>
        <MenuLink text="Регистрация" link="/" colorWhite />
        <MenuLink text="Войти" link="/" withBg />
      </div>
    </header>
  );
};

export default Header;
