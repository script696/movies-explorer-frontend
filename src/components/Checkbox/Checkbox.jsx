import s from "../Checkbox/Checkbox.module.scss";
import getClassname from "../../utils/getClassname";
import { useState } from "react";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxLabelStyle = [
    s.checkbox__label,
    isChecked || s.checkbox__label_checked,
  ];

  return (
    <div className={s.checkbox}>
      <input
        className={s.checkbox__input}
        type="checkbox"
        id="checkbox"
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <label className={getClassname(checkboxLabelStyle)} htmlFor="checkbox" />
    </div>
  );
};

export default Checkbox;
