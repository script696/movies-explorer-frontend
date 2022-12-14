import s from "./Header.module.scss";
import { logo } from "../../assets/images";
import { ROUTES } from "../../utils/constants/routes";
import getClassname from "../../utils/getClassname";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
const Header = ({ isAuth }) => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const [burgerActive, setBurgerActive] = useState(false);

  const menuBurgerStyles = [s.menuBurger, burgerActive && s.menuBurger_active];
  const navLinkMainRouteStyles = [
    s.menuLink__link,
    s.menuLink__link_visible_none,
  ];
  const navLinkMainSignInStyles = [
    s.menuLink__link,
    s.menuLink__link_style_signin,
  ];
  const navLinkMainSignUpStyles = [
    s.menuLink__link,
    isMainPage && s.menuLink__link_color_white,
  ];
  const authLinksWrapper = [
    s.header__authLinksWrapper,
    burgerActive && s.header__authLinksWrapper_active,
  ];

  useEffect(() => {
    if (burgerActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [burgerActive]);

  return (
    <header className={s.header}>
      <Link to={ROUTES.MAIN}>
        <img src={logo} alt="логотип" className={s.header__logo} />
      </Link>
      <div className={s.header__navWrapper}>
        <nav>
          {isAuth && (
            <button
              className={getClassname(menuBurgerStyles)}
              onClick={() => setBurgerActive((prev) => !prev)}
            >
              <div />
            </button>
          )}
          {!isAuth && (
            <>
              <NavLink
                to={ROUTES.SIGNUP}
                className={getClassname(navLinkMainSignUpStyles)}
                activeClassName={s.menuLink__link_active}
                exact
              >
                Регистрация
              </NavLink>
              <NavLink
                to={ROUTES.SIGNIN}
                className={getClassname(navLinkMainSignInStyles)}
                activeClassName={s.menuLink__link_active}
                exact
              >
                Войти
              </NavLink>
            </>
          )}
          {isAuth && (
            <div className={getClassname(authLinksWrapper)}>
              <div className={s.header__firstCol}>
                <NavLink
                  to={ROUTES.MAIN}
                  className={getClassname(navLinkMainRouteStyles)}
                  activeClassName={s.menuLink__link_active}
                  exact
                >
                  Главная
                </NavLink>
                <NavLink
                  to={ROUTES.MOVIES}
                  className={getClassname(navLinkMainSignUpStyles)}
                  activeClassName={s.menuLink__link_active}
                  exact
                >
                  Фильмы
                </NavLink>
                <NavLink
                  to={ROUTES.SAVED_MOVIES}
                  className={getClassname(navLinkMainSignUpStyles)}
                  activeClassName={s.menuLink__link_active}
                  exact
                >
                  Сохраненные фильмы
                </NavLink>
              </div>
              <div className={s.profile__link}>
                <NavLink
                  to={ROUTES.PROFILE}
                  className={getClassname(navLinkMainSignUpStyles)}
                  activeClassName={s.menuLink__link_active}
                  exact
                >
                  Аккаунт
                </NavLink>
                <div className={s.menuLink__profile} />
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
