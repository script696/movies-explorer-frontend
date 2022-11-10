import s from "./Layout.module.scss";
import { Footer, Header } from "../index";

const Layout = ({ children }) => {
  return (
    <section className={s.layout}>
      <Header />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
