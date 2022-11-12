import s from "./Profile.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const name = "Виталий";
  const mail = "nik696@uandex.ru";
  const [isFormEdit, setIsFormEdit] = useState(false);
  const [profile, setProfile] = useState({ name, mail });

  const onInputChange = (e) => {
    console.log(e.target);
  };

  useEffect(() => {
    console.log(isFormEdit);
  }, [isFormEdit]);

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
              onChange={onInputChange}
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
              onChange={onInputChange}
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
          <Link to="/" className={s.profile__logout}>
            Выйти из аккаунта
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Profile;
