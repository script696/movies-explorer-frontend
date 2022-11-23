import s from "./SearchForm.module.scss";
import { useEffect, useState } from "react";
import getClassname from "../../utils/getClassname";

const SearchForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxLabelStyle = [
    s.searchForm__checkboxLabel,
    isChecked || s.searchForm__checkboxLabel_checked,
  ];

  return (
    <section className={s.searchForm}>
      <form className={s.searchForm__form}>
        <div className={s.searchForm__row}>
          <input
            className={s.searchForm__input}
            type="text"
            placeholder="Фильм"
          />
          <button className={s.searchForm__button} type="submit">
            Найти
          </button>
        </div>
        <div className={s.searchForm__row}>
          <div className={s.searchForm__customCheckbox}>
            <input
              className={s.searchForm__checkbox}
              type="checkbox"
              id="checkbox"
              onChange={() => setIsChecked((prev) => !prev)}
            />
            <label
              className={getClassname(checkboxLabelStyle)}
              htmlFor="checkbox"
            />
          </div>
          <span className={s.searchForm__chDescr}>Короткометражки</span>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
