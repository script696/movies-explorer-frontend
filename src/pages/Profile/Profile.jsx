import s from "./Profile.module.scss";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ROUTES } from "../../utils/constants/routes";
import { useMainApiContext } from "../../hooks/useMainApiContext";

const Profile = () => {
  const { push } = useHistory();
  const { setIsLoggedIn } = useMainApiContext();

  const name = "Виталий";
  const mail = "nik696@uandex.ru";
  const [isFormEdit, setIsFormEdit] = useState(false);

  const onLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    push(ROUTES.MAIN);
  };

  return (
    <section className={s.profile}>
      <form className={s.profile__form}>
        <h2 className={s.profile__title}>Привет, Виталий</h2>
        <div className={s.profile__formFields}>
          <div className={s.profile__formField}>
            <p className={s.profile__fieldText}>Имя</p>
            <input
              className={s.profile__input}
              type="text"
              value={name}
              name="name"
              disabled={!isFormEdit}
            />
          </div>
          <div className={s.profile__formField}>
            <p className={s.profile__fieldText}>E-mail</p>
            <input
              className={s.profile__input}
              type="text"
              value={mail}
              disabled={!isFormEdit}
            />
          </div>
        </div>
        <div className={s.profile__bottom}>
          {isFormEdit ? (
            <button
              type="submit"
              className={s.profile__btn}
              onClick={(e) => {
                e.preventDefault();
                console.log("submit");
              }}
            >
              Сохранить
            </button>
          ) : (
            <button
              type="button"
              className={s.profile__btn}
              onClick={(e) => {
                e.preventDefault();
                setIsFormEdit(true);
              }}
            >
              Редактировать
            </button>
          )}
          <button
            type="button"
            onClick={onLogout}
            className={s.profile__logout}
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </section>
  );
};

export default Profile;
