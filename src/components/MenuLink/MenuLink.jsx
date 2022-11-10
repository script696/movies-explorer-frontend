import cn from "classnames";
import { NavLink } from "react-router-dom";
import s from "./MenuLink.module.scss";
import getClassname from "../../utils/getClassname";

const MenuLink = ({ link, text, colorWhite = false, withBg = false }) => {
  const menuLinkStyles = [s.menuLink, withBg ? s.menuLink_withBg : null];
  const menuLinkLinkStyles = [
    s.menuLink__link,
    colorWhite ? s.menuLink_color_white : null,
  ];

  return (
    <div className={getClassname(menuLinkStyles)}>
      <NavLink
        to={link}
        className={getClassname(menuLinkLinkStyles)}
        onClick={() => console.log("click")}
      >
        {text}
      </NavLink>
    </div>
  );
};

export default MenuLink;
