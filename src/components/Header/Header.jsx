import s from "./Header.module.scss";
import { logo } from "../../assets/images";
import { MenuLink } from "../index";

const Header = ({ isAuth }) => {
  const authLinks = [
    {
      link: "/movies",
      text: "Фильмы",
    },
    {
      link: "/saved-movies",
      text: "Сохраненные фильмы",
    },
    {
      link: "/profile",
      text: "Аккаунт",
    },
  ];
  const publicLinks = [
    {
      link: "/signup",
      text: "Регистрация",
    },
    {
      link: "/signin",
      text: "Войти",
    },
  ];

  return (
    <header className={s.header}>
      <img src={logo} alt="логотип" className={s.header__logo} />
      <nav className={s.header__navWrapper}>
        {
          isAuth &&
            publicLinks.map(({ link, text }) => (
              <MenuLink key={link} link={link} text={text} />
            ))
          // <>
          //   <MenuLink link="/movies" text="Фильмы" />
          //   <MenuLink link="/saved-movies" text="Сохраненные фильмы" />
          //   <MenuLink link="/profile" text="Аккаунт" />
          // </>
        }
        {
          !isAuth &&
            authLinks.map(({ link, text }) => (
              <MenuLink key={link} link={link} text={text} />
            ))
          // <>
          //   <MenuLink link="/signup" text="Регистрация" />
          //   <MenuLink link="/signin" text="Войти" />
          // </>
        }
      </nav>
    </header>
  );
};

export default Header;
