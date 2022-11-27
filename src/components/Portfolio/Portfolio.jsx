import s from "./Portfolio.module.scss";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      title: "Статичный сайт",
      link: "https://script696.github.io/how-to-learn/",
    },
    {
      id: 2,
      title: "Адаптивный сайт",
      link: "https://script696.github.io/russian-travel/",
    },
    {
      id: 3,
      title: "Одностраничное приложение",
      link: "https://script696.github.io/mesto-react/",
    },
  ];

  return (
    <div className={s.portfolio}>
      <div className={s.portfolio__wrapper}>
        <h2 className={s.portfolio__title}>Портфолио</h2>
        {portfolio.map(({ id, title, link }) => (
          <a key={id} className={s.portfolio__item} href={link} target="_blank">
            <h3 className={s.portfolio__itemTitle}>{title}</h3>
            <span className={s.portfolio__itemLink} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
