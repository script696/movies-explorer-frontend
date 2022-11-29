import s from "./SearchForm.module.scss";
import { useEffect, useState } from "react";
import getClassname from "../../utils/getClassname";
import { Checkbox } from "../index";

const SearchForm = () => {
  return (
    <section className={s.searchForm}>
      <form className={s.searchForm__form}>
        <div className={s.searchForm__row}>
          <input
            className={s.searchForm__input}
            type="text"
            placeholder="Фильм"
            required
          />
          <button className={s.searchForm__button} type="submit">
            Найти
          </button>
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
