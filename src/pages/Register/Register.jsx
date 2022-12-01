import s from "./Register.module.scss";
import { logo } from "../../assets/images";
import { Link, useHistory } from "react-router-dom";
import { useInput } from "../../hooks";
import getClassname from "../../utils/getClassname";
import {
  EMAIL_RULES,
  NAME_RULES,
  PASSWORD_RULES,
} from "../../utils/constants/validatorRules";
import { useEffect, useState } from "react";
import { useUserContext } from "../../hooks/useUserContext";
import { ROUTES } from "../../utils/constants/routes";

const Register = () => {
  const { push } = useHistory();
  const { handleRegistrationSubmit, apiError } = useUserContext();

  const email = useInput({ initialVal: "", rules: EMAIL_RULES });
  const password = useInput({ initialVal: "", rules: PASSWORD_RULES });
  const name = useInput({ initialVal: "", rules: NAME_RULES });

  const formFields = [
    {
      id: "name",
      fieldsTitle: "Имя",
      type: "text",
      value: name.val,
      onChange: name.onChange,
      onBlur: name.onBlur,
    },
    {
      id: "email",
      fieldsTitle: "E-mail",
      type: "text",
      value: email.val,
      onChange: email.onChange,
      onBlur: email.onBlur,
    },
    {
      id: "password",
      fieldsTitle: "Пароль",
      type: "password",
      value: password.val,
      onChange: password.onChange,
      onBlur: password.onBlur,
    },
  ];
  const emailHasErrAndDirty = !email.isInputValid && email.isDirty;
  const passwordHasErrAndDirty = !password.isInputValid && password.isDirty;
  const nameHasErrAndDirty = !name.isInputValid && name.isDirty;

  const isFormValid =
    email.isInputValid && password.isInputValid && name.isInputValid;
  const isSubmitBtnDisabled = !isFormValid || apiError.isError;

  const sbmtButtonStyles = [
    s.register__btn,
    isSubmitBtnDisabled && s.register__btn_disable,
  ];

  const fieldInputsStyles = {
    emailInputStyles: [
      s.register__fieldInput,
      emailHasErrAndDirty && s.register__fieldInput_withErr,
    ],
    passwordInputStyles: [
      s.register__fieldInput,
      passwordHasErrAndDirty && s.register__fieldInput_withErr,
    ],
    nameInputStyles: [
      s.register__fieldInput,
      nameHasErrAndDirty && s.register__fieldInput_withErr,
    ],
  };
  const fieldStyles = {
    emailFieldStyles: [
      s.register__field,
      emailHasErrAndDirty && s.register__field_withErr,
    ],
    passwordFieldStyles: [
      s.register__field,
      passwordHasErrAndDirty && s.register__field_withErr,
    ],
    nameFieldStyles: [
      s.register__field,
      nameHasErrAndDirty && s.register__field_withErr,
    ],
  };
  const errorsMsgStyles = {
    emailMsgStyles: [
      s.register__errorMsg,
      emailHasErrAndDirty && s.register__errorMsg_active,
    ],
    passwordMsgStyles: [
      s.register__errorMsg,
      passwordHasErrAndDirty && s.register__errorMsg_active,
    ],
    nameMsgStyles: [
      s.register__errorMsg,
      nameHasErrAndDirty && s.register__errorMsg_active,
    ],
  };

  const onSubmit = async (e) => {
    const res = await handleRegistrationSubmit(e);

    if (res) push(ROUTES.MOVIES);
  };

  const onLoginRedirect = () => {
    push(ROUTES.SIGNIN);
  };

  return (
    <section className={s.register}>
      <img src={logo} alt="логотип" className={s.register__logo} />
      <h2 className={s.register__title}>Добро пожаловать!</h2>
      <form className={s.register__form} onSubmit={onSubmit}>
        <div className={s.register__fields}>
          {formFields.map(
            ({ id, value, onChange, onBlur, fieldsTitle, type }) => (
              <div
                key={id}
                className={getClassname(fieldStyles[`${id}FieldStyles`])}
              >
                <span className={s.register__fieldTitle}>{fieldsTitle}</span>
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
        <div className={s.register__bottom}>
          {apiError.isError && (
            <span className={s.register__errText}>{apiError.message}</span>
          )}
          <button
            className={getClassname(sbmtButtonStyles)}
            disabled={isSubmitBtnDisabled}
          >
            Зарегестрироваться
          </button>
          <div className={s.register__row}>
            <span className={s.register__regtext}>Уже зарегестрированы?</span>
            <button
              type="button"
              className={s.register__link}
              onClick={onLoginRedirect}
            >
              Войти
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Register;
