import s from "./Layout.module.scss";
import { Footer, Header } from "../index";

const Layout = ({ children, isAuth }) => (
  <section className={s.layout}>
    <Header isAuth={isAuth} />
    {children}
    <Footer />
  </section>
);

export default Layout;
