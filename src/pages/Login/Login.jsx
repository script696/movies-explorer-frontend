import s from "./Login.module.scss";
import { logo } from "../../assets/images";
import { Link } from "react-router-dom";

const Login = () => {
  const formFields = [
    {
      id: "email",
      fieldsTitle: "E-mail",
      type: "text",
      placeholder: "Введите e-mail",
    },
    {
      id: "password",
      fieldsTitle: "Пароль",
      type: "password",
      placeholder: "Введите пароль",
    },
  ];

  return (
    <section className={s.login}>
      <img src={logo} alt="логотип" className={s.login__logo} />
      <h2 className={s.login__title}>Рады видеть!</h2>
      <form className={s.login__form}>
        <div className={s.login__fields}>
          {formFields.map(({ id, fieldsTitle, type, placeholder }) => (
            <div key={id} className={s.login__field}>
              <span className={s.login__fieldTitle}>{fieldsTitle}</span>
              <input
                type={type}
                className={s.login__fieldInput}
                placeholder={placeholder}
              />
            </div>
          ))}
        </div>
        <div className={s.login__bottom}>
          <button className={s.login__btn}>Войти</button>
          <div className={s.login__row}>
            <span className={s.login__regtext}>Еще не зарегестрированы?</span>
            <Link className={s.login__link} to="/">
              Войти
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
