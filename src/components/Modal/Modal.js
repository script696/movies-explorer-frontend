import s from "./Modal.module.scss";
import getClassname from "../../utils/getClassname";
import { useEffect, useState } from "react";
import { useErrors } from "../../hooks";

const Modal = () => {
  const { isApiError, errorMessage } = useErrors();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalStyles = [s.modal, isModalOpen && s.modal_open];

  useEffect(() => {
    if (isApiError) {
      setIsModalOpen(true);
    }
    const timerId = setTimeout(() => {
      setIsModalOpen(false);
    }, 2000);

    return () => clearTimeout(timerId);
  }, [isApiError]);

  return (
    <div className={getClassname(modalStyles)}>
      <div className={s.modal__wrapper}>
        <p className={s.modal__text}>{errorMessage}</p>
      </div>
    </div>
  );
};

export default Modal;
