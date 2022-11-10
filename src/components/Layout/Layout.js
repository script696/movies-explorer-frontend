import s from "./Layout.module.scss";

const Layout = ({ children }) => {
  return <section className={s.layout}>{children}</section>;
};

export default Layout;
