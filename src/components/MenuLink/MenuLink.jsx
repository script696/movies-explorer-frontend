import cn from "classnames";
import { NavLink } from "react-router-dom";
import s from "./MenuLink.module.scss";
import getClassname from "../../utils/getClassname";

const MenuLink = ({ link, text }) => {
  const style = link.slice(1);
  console.log(style);
  const menuLinkLinkStyles = [
    s.menuLink__link,
    s[`menuLink__link_style_${style}`],
  ];

  return (
    <div className={s.menuLink}>
      <NavLink
        exact
        to={link}
        className={getClassname(menuLinkLinkStyles)}
        activeClassName={s.menuLink__link_active}
      >
        {text}
      </NavLink>
      {style === "profile" && <div className={s.menuLink__profile} />}
    </div>
  );
};

export default MenuLink;
