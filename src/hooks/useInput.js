import { useState } from "react";
import useValidation from "./useValidation";

const useInput = ({ initialVal, rules }) => {
  const [val, setVal] = useState(initialVal);
  const [isDirty, setIsDirty] = useState(false);
  const { isInputValid } = useValidation({ val, rules });

  const onChange = (e) => {
    setVal(e.target.value);
  };
  const onBlur = () => {
    setIsDirty(true);
  };

  const setInitialValue = (value) => {
    setVal(value);
  };
  return {
    val,
    isDirty,
    onChange,
    onBlur,
    isInputValid,
    setInitialValue,
  };
};

export default useInput;
