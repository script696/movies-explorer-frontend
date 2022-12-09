import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { logo } from "../../assets/images";
import { useInput, useUserContext } from "../../hooks";
import { ROUTES } from "../../utils/constants/routes";
import {
  EMAIL_RULES,
  PASSWORD_RULES,
} from "../../utils/constants/validatorRules";
import getClassname from "../../utils/getClassname";
import s from "./Login.module.scss";

const Login = () => {
  const { push } = useHistory();
  const { handleLoginSubmit, apiError, isLoggedIn, isPending } =
    useUserContext();

  const email = useInput({ initialVal: "", rules: EMAIL_RULES });
  const password = useInput({ initialVal: "", rules: PASSWORD_RULES });

  const formFields = [
    {
      id: "email",
      fieldsTitle: "E-mail",
      type: "text",
      placeholder: "Введите e-mail",
      value: email.val,
      onChange: email.onChange,
      onBlur: email.onBlur,
    },
    {
      id: "password",
      fieldsTitle: "Пароль",
      type: "password",
      placeholder: "Введите пароль",
      value: password.val,
      onChange: password.onChange,
      onBlur: password.onBlur,
    },
  ];
  const emailHasErrAndDirty = !email.isInputValid && email.isDirty;
  const passwordHasErrAndDirty = !password.isInputValid && password.isDirty;

  const isFormValid = email.isInputValid && password.isInputValid;
  const isSubmitBtnDisabled = !isFormValid || apiError.isError || isPending;

  const sbmtButtonStyles = [
    s.login__btn,
    isSubmitBtnDisabled && s.login__btn_disable,
  ];

  const fieldInputsStyles = {
    emailInputStyles: [
      s.login__fieldInput,
      emailHasErrAndDirty && s.login__fieldInput_withErr,
    ],
    passwordInputStyles: [
      s.login__fieldInput,
      passwordHasErrAndDirty && s.login__fieldInput_withErr,
    ],
  };
  const fieldStyles = {
    emailFieldStyles: [
      s.login__field,
      emailHasErrAndDirty && s.login__field_withErr,
    ],
    passwordFieldStyles: [
      s.login__field,
      passwordHasErrAndDirty && s.login__field_withErr,
    ],
  };
  const errorsMsgStyles = {
    emailMsgStyles: [
      s.login__errorMsg,
      emailHasErrAndDirty && s.login__errorMsg_active,
    ],
    passwordMsgStyles: [
      s.login__errorMsg,
      passwordHasErrAndDirty && s.login__errorMsg_active,
    ],
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    const res = await handleLoginSubmit(email, password);

    if (res) push(ROUTES.MOVIES);
  };

  const onRegistrationRedirect = () => {
    push(ROUTES.SIGNUP);
  };

  useEffect(() => {
    if (!isLoggedIn) return;
    push(ROUTES.MAIN);
  }, [isLoggedIn]);

  return (
    <section className={s.login}>
      <img src={logo} alt="логотип" className={s.login__logo} />
      <h2 className={s.login__title}>Рады видеть!</h2>
      <form className={s.login__form} onSubmit={onSubmit}>
        <div className={s.login__fields}>
          {formFields.map(
            ({ id, onBlur, onChange, value, fieldsTitle, type }) => (
              <div
                key={id}
                className={getClassname(fieldStyles[`${id}FieldStyles`])}
              >
                <span className={s.login__fieldTitle}>{fieldsTitle}</span>
                <input
                  id={id}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  type={type}
                  className={getClassname(
                    fieldInputsStyles[`${id}InputStyles`]
                  )}
                />
                <span
                  className={getClassname(errorsMsgStyles[`${id}MsgStyles`])}
                >
                  Что то пошло не так
                </span>
              </div>
            )
          )}
        </div>
        <div className={s.login__bottom}>
          {apiError.isError && (
            <span className={s.login__errText}>{apiError.message}</span>
          )}
          <button
            className={getClassname(sbmtButtonStyles)}
            disabled={isSubmitBtnDisabled}
          >
            Войти
          </button>
          <div className={s.login__row}>
            <span className={s.login__regtext}>Еще не зарегестрированы?</span>
            <button
              type="button"
              className={s.login__redirect}
              onClick={onRegistrationRedirect}
            >
              Регистрация
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
