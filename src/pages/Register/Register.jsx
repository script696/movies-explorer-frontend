import s from "./Register.module.scss";
import { logo } from "../../assets/images";
import { Link } from "react-router-dom";

const Register = () => {
  const formFields = [
    {
      id: "name",
      fieldsTitle: "Имя",
      type: "text",
      placeholder: "Введите имя",
    },
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
    <section className={s.register}>
      <img src={logo} alt="логотип" className={s.register__logo} />
      <h2 className={s.register__title}>Добро пожаловать!</h2>
      <form className={s.register__form}>
        <div className={s.register__fields}>
          {formFields.map(({ id, fieldsTitle, type, placeholder }) => (
            <div key={id} className={s.register__field}>
              <span className={s.register__fieldTitle}>{fieldsTitle}</span>
              <input
                type={type}
                className={s.register__fieldInput}
                placeholder={placeholder}
              />
            </div>
          ))}
        </div>
        <div className={s.register__bottom}>
          <button className={s.register__btn}>Зарегестрироваться</button>
          <div className={s.register__row}>
            <span className={s.register__regtext}>Уже зарегестрированы?</span>
            <Link className={s.register__link} to="/">
              Войти
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Register;
