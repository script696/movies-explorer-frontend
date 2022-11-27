import s from "./Layout.module.scss";
import { Footer, Header } from "../index";

const Layout = ({ children, isAuth }) => (
  <section className={s.layout}>
    <Header isAuth={isAuth} />
    <main>{children}</main>
    <Footer />
  </section>
);

export default Layout;
