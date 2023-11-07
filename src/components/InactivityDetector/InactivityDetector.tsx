import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getUserDataFromLocalStorage } from '../../utils/user';
import { logout } from '../../store/reducers/user';
import ModalInactivityDetector from '../Alerts/InactivityDisconnection';

function InactivityDetector() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [answerCount, setAnswerCount] = useState(0);
  const isActive = useAppSelector((state) => state.user.isActive);
  const timeout = useAppSelector((state) => state.user.timeout);
  const lastActionDate = useAppSelector((state) => state.user.lastActionDate);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = getUserDataFromLocalStorage();
    const currentTime = new Date();

    const lastestUpdate = Math.max(
      lastActionDate || 0,
      user?.lastActionDate || 0
    );

    if (isActive && currentTime.getTime() - lastestUpdate > timeout) {
      dispatch(logout());
    }
    let timeoutID: number | undefined;
    const showModal = () => {
      if (timeoutID) clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        setIsOpenModal(true);
        window.removeEventListener('mousemove', showModal);
      }, timeout);
    };

    const trackAction = () => {
      const userLS = getUserDataFromLocalStorage();
      if (isActive && !userLS) {
        dispatch(logout());
      }
      if (userLS) {
        const actionDate = new Date();
        localStorage.setItem(
          'user',
          JSON.stringify({ ...userLS, lastActionDate: actionDate.getTime() })
        );
      }
    };

    if (isActive) {
      window.addEventListener('mousemove', showModal);
      window.addEventListener('mousedown', trackAction);
      window.addEventListener('keydown', trackAction);
    }

    return () => {
      clearTimeout(timeoutID);
      window.removeEventListener('mousemove', showModal);
      window.removeEventListener('mousedown', trackAction);
      window.removeEventListener('keydown', trackAction);
    };
  }, [isActive, answerCount, lastActionDate, timeout, dispatch]);

  return (
    <>
      {isOpenModal && (
        <ModalInactivityDetector
          setIsOpenModal={setIsOpenModal}
          setAnswerCount={setAnswerCount}
        />
      )}
      <Outlet />
    </>
  );
}

export default InactivityDetector;
