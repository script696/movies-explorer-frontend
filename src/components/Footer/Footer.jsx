import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__wrapper}>
        <p className={s.footer__title}>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className={s.footer__bottom}>
          <div className={s.footer__col}>
            <p className={s.footer__copyright}>© 2020</p>
          </div>
          <div className={s.footer__col}>
            <a href="/" target="_blank" className={s.footer__link}>
              Яндекс.Практикум
            </a>
            <a href="/" target="_blank" className={s.footer__link}>
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
