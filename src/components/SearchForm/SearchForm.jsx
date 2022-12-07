import { useState } from "react";
import { useLocalStorage } from "../../hooks";
import { Checkbox } from "../index";
import s from "./SearchForm.module.scss";

const SearchForm = ({ onSearchSubmit }) => {
  const { getItemsFromStorage } = useLocalStorage();
  const { moviesQuery } = getItemsFromStorage(["moviesQuery"]);

  const [inputState, setInputState] = useState(moviesQuery || "");

  const onInputChange = (e) => {
    const value = e.target.value;
    setInputState(value);
  };

  return (
    <section className={s.searchForm}>
      <form className={s.searchForm__form} onSubmit={onSearchSubmit}>
        <div className={s.searchForm__row}>
          <input
            className={s.searchForm__input}
            type="text"
            name="query"
            placeholder="Фильм"
            value={inputState}
            onChange={onInputChange}
            required
          />
          <button className={s.searchForm__button}>Найти</button>
        </div>
        <div className={s.searchForm__row}>
          <Checkbox />
          <span className={s.searchForm__chDescr}>Короткометражки</span>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
