import s from "./Profile.module.scss";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../utils/constants/routes";
import { useInput, useMoviesContext, useUserContext } from "../../hooks";
import { EMAIL_RULES, NAME_RULES } from "../../utils/constants/validatorRules";
import getClassname from "../../utils/getClassname";

const Profile = () => {
  const { push } = useHistory();
  const { setIsLoggedIn, updateUser, userInfo, getUser } = useUserContext();
  const { onLogoutMoviesHandler } = useMoviesContext();

  const email = useInput({ initialVal: userInfo.email, rules: EMAIL_RULES });
  const name = useInput({ initialVal: userInfo.name, rules: NAME_RULES });

  const [isFormEdit, setIsFormEdit] = useState(false);

  const isFormValid = email.isInputValid && name.isInputValid;
  const isUserDataSame =
    userInfo.name === name.val && userInfo.email === email.val;

  const isSubmitBtnDisabled = !isFormValid || isUserDataSame;

  const sbmtButtonStyles = [
    s.profile__btn,
    isSubmitBtnDisabled && s.profile__btn_disable,
  ];

  const onLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    onLogoutMoviesHandler();
    push(ROUTES.MAIN);
  };
  const onSubmit = async (e) => {
    await updateUser(e);
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    email.setInitialValue(userInfo.email);
    name.setInitialValue(userInfo.name);
  }, [userInfo]);

  return (
    <section className={s.profile}>
      <form className={s.profile__form} onSubmit={onSubmit}>
        <h2 className={s.profile__title}>{`Привет, ${userInfo.name}`}</h2>
        <div className={s.profile__formFields}>
          <div className={s.profile__formField}>
            <p className={s.profile__fieldText}>Имя</p>
            <input
              className={s.profile__input}
              type="text"
              value={name.val}
              onChange={name.onChange}
              name="name"
              disabled={!isFormEdit}
            />
          </div>
          <div className={s.profile__formField}>
            <p className={s.profile__fieldText}>E-mail</p>
            <input
              className={s.profile__input}
              type="text"
              value={email.val}
              onChange={email.onChange}
              name="email"
              disabled={!isFormEdit}
            />
          </div>
        </div>
        <div className={s.profile__bottom}>
          {isFormEdit ? (
            <button
              disabled={isSubmitBtnDisabled}
              className={getClassname(sbmtButtonStyles)}
            >
              Сохранить
            </button>
          ) : (
            <button
              type="button"
              className={s.profile__btn}
              onClick={() => {
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
