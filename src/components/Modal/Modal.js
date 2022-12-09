import { useEffect, useState } from "react";
import { useErrors, useUserContext } from "../../hooks";
import getClassname from "../../utils/getClassname";
import s from "./Modal.module.scss";

const Modal = () => {
  const { isApiError, errorMessage } = useErrors();
  const { isUpdateSuccess, setIsUpdateSuccess } = useUserContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalStyles = [s.modal, isModalOpen && s.modal_open];
  const [message, setMessage] = useState("");
  //setIsUpdateSuccess
  useEffect(() => {
    if (isUpdateSuccess) {
      setIsModalOpen(true);
      setMessage("Данные успешно изменены");
    }
    const timerId = setTimeout(() => {
      setIsModalOpen(false);
      setMessage("");
      setIsUpdateSuccess(false);
    }, 2000);

    return () => clearTimeout(timerId);
  }, [isUpdateSuccess]);

  useEffect(() => {
    if (isApiError) {
      setIsModalOpen(true);
      setMessage(errorMessage);
    }
    const timerId = setTimeout(() => {
      setIsModalOpen(false);
      setMessage("");
    }, 2000);

    return () => clearTimeout(timerId);
  }, [isApiError]);

  return (
    <div className={getClassname(modalStyles)}>
      <div className={s.modal__wrapper}>
        <p className={s.modal__text}>{message}</p>
      </div>
    </div>
  );
};

export default Modal;
