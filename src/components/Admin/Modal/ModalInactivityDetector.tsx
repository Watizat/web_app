import { FormEvent, useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { logout } from '../../../store/reducers/user';
import styles from './Modal.module.scss';

interface ModalProps {
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  setAnswerCount: React.Dispatch<React.SetStateAction<number>>;
}

function ModalInactivityDetector({
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
    }, 1000);

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
    <div className={styles.modal} style={{ zIndex: 200 }}>
      <div className={`${styles.main} ${styles.empty}`}>
        <h1 className={`${styles.title} ${styles.empty_title}`}>
          Toujours là&nbsp;?
        </h1>
        <form className={styles.list} onSubmit={handleSubmit}>
          <div className={styles.empty_actions}>
            <Link
              to="/"
              className={`${styles.actions_close} btn btn-info-fill btn-flat`}
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

export default ModalInactivityDetector;
