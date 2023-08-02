import { FormEvent, useEffect, useState } from 'react';
import './Modal.scss';
import { Link, Navigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { logout } from '../../../store/reducers/user';

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
  const [countdown, setCountdown] = useState(10);

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
    <div className="modal" style={{ zIndex: 200 }}>
      <div className="modal-main modal-empty">
        <h1 className="modal-title">Toujours là&nbsp;?</h1>
        <form className="modal-list" onSubmit={handleSubmit}>
          <div className="modal-actions">
            <Link
              to="/"
              className="btn btn-info-fill btn-flat modal-actions__close"
              onClick={handleLogout}
            >
              {`Se déconnecter (${countdown}s)`}
            </Link>
            <button
              type="submit"
              className="btn btn-sucess-fill btn-flat modal-actions__save"
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
