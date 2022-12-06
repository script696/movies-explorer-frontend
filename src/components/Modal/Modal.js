import s from "./Modal.module.scss";
import getClassname from "../../utils/getClassname";
import { useEffect, useState } from "react";
import { useMoviesContext } from "../../hooks/useMoviesContext";

const Modal = () => {
  const { apiError } = useMoviesContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const modalStyles = [s.modal, isModalOpen && s.modal_open];

  useEffect(() => {
    if (apiError.isError) {
      setIsModalOpen(true);
      setErrMessage(apiError.message);
    }
    const timerId = setTimeout(() => {
      setIsModalOpen(false);
      setErrMessage("");
    }, 2000);

    return () => clearTimeout(timerId);
  }, [apiError]);

  return (
    <div className={getClassname(modalStyles)}>
      <div className={s.modal__wrapper}>
        <p className={s.modal__text}>{errMessage}</p>
      </div>
    </div>
  );
};

export default Modal;
