import s from "./Portfolio.module.scss";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      title: "Статичный сайт",
      link: "/",
    },
    {
      id: 2,
      title: "Адаптивный сайт",
      link: "/",
    },
    {
      id: 3,
      title: "Одностраничное приложение",
      link: "/",
    },
  ];

  return (
    <div className={s.portfolio}>
      <div className={s.portfolio__wrapper}>
        <h2 className={s.portfolio__title}>Портфолио</h2>
        {portfolio.map(({ id, title, link }) => (
          <article key={id} className={s.portfolio__item}>
            <h3 className={s.portfolio__itemTitle}>{title}</h3>
            <a className={s.portfolio__itemLink} href={link} target="_blank" />
          </article>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
