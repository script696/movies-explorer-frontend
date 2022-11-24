import React, { useState } from "react";
import useValidation from "./useValidation";

const useInput = ({ initialVal, rules }) => {
  const [val, setVal] = useState(initialVal);
  const [isDirty, setIsDirty] = useState(false);
  const { isInputValid } = useValidation({ val, rules });

  const onChange = (e) => {
    setVal(e.target.value);
  };
  const onBlur = (e) => {
    setIsDirty(true);
  };
  return { val, isDirty, onChange, onBlur, isInputValid };
};

export default useInput;
