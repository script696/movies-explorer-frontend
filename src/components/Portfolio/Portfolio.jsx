import s from "./Portfolio.module.scss";

const Portfolio = () => {
  const portfolio = [
    {
      title: "Статичный сайт",
      link: "/",
    },
    {
      title: "Адаптивный сайт",
      link: "/",
    },
    {
      title: "Одностраничное приложение",
      link: "/",
    },
  ];

  return (
    <div className={s.portfolio}>
      <div className={s.portfolio__wrapper}>
        <h2 className={s.portfolio__title}></h2>
        {portfolio.map(({ title, link }) => (
          <article className={s.portfolio__item}>
            <h3 className={s.portfolio__itemTitle}>{title}</h3>
            <a className={s.portfolio__itemLink} href={link} target="_blank" />
          </article>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
