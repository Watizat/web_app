import { FormEvent, useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { logout } from '../../store/reducers/user';
import styles from './Modal.module.scss';

interface ModalProps {
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  setAnswerCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function ModalInactivityDetector({
  setIsModalActive,
  setAnswerCount,
}: ModalProps) {
  const dispatch = useAppDispatch();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsModalActive(false);
    setAnswerCount((prev) => prev + 1);
  };
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 9999999);

    return () => clearInterval(intervalID);
  });

  const handleLogout = () => {
    dispatch(logout());
    setIsModalActive(false);
  };
  if (countdown <= 0) {
    handleLogout();
    return <Navigate to="/login" />;
  }
  return (
    <div
      className="absolute top-0 left-0 z-[100] flex items-center content-center justify-center w-screen h-screen bg-gray-950/75"
      style={{ zIndex: 200 }}
    >
      <div
        className={`"w-3/6 bg-white max-h-2/6 rounded-xl" shadow-none min-h-[20vh] max-w-[50%] flex flex-col grow justify-between gap-4 pt-4 pb-8 px-8`}
      >
        <h1
          className={`"pt-8 pb-2 pl-16 text-2xl font-medium text-left text-slate-700" ${styles.empty_title}`}
        >
          Toujours là&nbsp;?
        </h1>
        <form
          className="relative flex flex-col gap-y-12"
          onSubmit={handleSubmit}
        >
          <div className={styles.empty_actions}>
            <Link
              to="/"
              className="px-3 py-2 text-sm font-semibold bg-white rounded-md shadow-sm text-teal-700/75 ring-1 ring-inset ring-teal-700/50 hover:bg-gray-50"
              onClick={handleLogout}
            >
              {`Se déconnecter (${countdown}s)`}
            </Link>
            <button
              type="submit"
              className={`${styles.actions_save} btn btn-sucess btn-flat`}
            >
              Oui
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
