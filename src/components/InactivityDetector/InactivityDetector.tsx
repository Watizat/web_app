import { Outlet } from 'react-router-dom';
import '../Admin/Modal/Modal.scss';
import { useEffect, useState } from 'react';
import ModalInactivityDetector from '../Admin/Modal/ModalInactivityDetector';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getUserDataFromLocalStorage } from '../../utils/user';
import { logout } from '../../store/reducers/user';

function InactivityDetector() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [answerCount, setAnswerCount] = useState(0);
  const isActive = useAppSelector((state) => state.user.isActive);
  const timeout = useAppSelector((state) => state.user.timeout);
  const lastActionDate = useAppSelector((state) => state.user.lastActionDate);

  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(
      Date.now(),
      lastActionDate,
      lastActionDate ? Date.now() - lastActionDate : null
    );
    if (
      lastActionDate &&
      Date.now() - lastActionDate > timeout + 2 * 1000 * 60
    ) {
      dispatch(logout());
    }
    let timeoutID: number | undefined;
    const showModal = () => {
      if (timeoutID) clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        setIsModalActive(true);
        window.removeEventListener('mousemove', showModal);
      }, timeout);
    };

    const trackAction = () => {
      const user = getUserDataFromLocalStorage();
      if (user) user.lastActionDate = Date.now();
      localStorage.setItem('user', JSON.stringify({ ...user }));
    };

    if (isActive) {
      window.addEventListener('mousemove', showModal);
      window.addEventListener('mousedown', trackAction);
    }

    return () => {
      clearTimeout(timeoutID);
      window.removeEventListener('mousemove', showModal);
      window.removeEventListener('mousedown', trackAction);
    };
  }, [isActive, answerCount, lastActionDate, timeout, dispatch]);

  return (
    <>
      {isModalActive && (
        <ModalInactivityDetector
          setIsModalActive={setIsModalActive}
          setAnswerCount={setAnswerCount}
        />
      )}
      <Outlet />
    </>
  );
}

export default InactivityDetector;
