import React, { useState, useEffect } from "react";

const EMAIL_RE = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const useValidation = ({ val, rules }) => {
  const ERRORS_TEXT = {
    required: "Поле не должно быть пустым",
    email: "Введите email",
    minLength: `Не менее ${rules.minLength} символов`,
    maxLength: `Не более ${rules.maxLength} символов`,
  };

  const [isEmpty, setEmpty] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isMinLenErr, setIsMinLenErr] = useState(false);
  const [isMaxLenErr, setIsMaxLenErr] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [isInputValid, setIsInputValid] = useState(false);

  useEffect(() => {
    for (const key in rules) {
      switch (key) {
        case "isEmail":
          if (!EMAIL_RE.test(val)) {
            setIsEmail(true);
            setErrorText("");
          } else {
            setIsEmail(false);
            setErrorText(ERRORS_TEXT.email);
          }
          break;
        case "isEmpty":
          if (!val) {
            setEmpty(true);
            setErrorText("");
          } else {
            setEmpty(false);
            setErrorText(ERRORS_TEXT.required);
          }
          break;
        case "minLength":
          if (val.length < rules[key]) {
            setIsMinLenErr(true);
            setErrorText(ERRORS_TEXT.minLength);
          } else {
            setIsMinLenErr(false);
            setErrorText("");
          }
          break;
        case "maxLength":
          if (val.length > rules[key]) {
            setIsMaxLenErr(true);
            setErrorText(ERRORS_TEXT.maxLength);
          } else {
            setIsMaxLenErr(false);
            setErrorText("");
          }
          break;
      }
    }
  }, [val]);

  useEffect(() => {
    if (isEmpty || isEmail || isMinLenErr || isMaxLenErr) {
      setIsInputValid(false);
    } else setIsInputValid(true);
  }, [isEmpty, isEmail, isMinLenErr, isMaxLenErr]);
  useEffect(() => {}, [isMinLenErr]);
  return { isInputValid };
};

export default useValidation;
