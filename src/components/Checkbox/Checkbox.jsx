import s from "../Checkbox/Checkbox.module.scss";
import getClassname from "../../utils/getClassname";
import { useState } from "react";
import { useLocalStorage } from "../../hooks";

const Checkbox = () => {
  const { getItemsFromStorage } = useLocalStorage();
  const { moviesIsShort } = getItemsFromStorage(["moviesIsShort"]);

  const [isChecked, setIsChecked] = useState(moviesIsShort || false);

  const checkboxLabelStyle = [
    s.checkbox__label,
    isChecked || s.checkbox__label_checked,
  ];

  const onCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className={s.checkbox}>
      <input
        className={s.checkbox__input}
        type="checkbox"
        id="checkbox"
        name="isChecked"
        onChange={onCheckboxChange}
        checked={isChecked}
      />
      <label className={getClassname(checkboxLabelStyle)} htmlFor="checkbox" />
    </div>
  );
};

export default Checkbox;
