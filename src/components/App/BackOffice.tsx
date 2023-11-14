/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchRoles, fetchZones } from '../../store/reducers/admin';
import { fetchCategories, fetchDays } from '../../store/reducers/organisms';
import { axiosInstance } from '../../utils/axios';
import { getUserDataFromLocalStorage } from '../../utils/user';
import { changeAdmin } from '../../store/reducers/user';
import NoMobile from '../Errors/NoMobile';
import Sidebar from '../BackOffice/Sidebar/SideBase';
import Header from '../BackOffice/Header';
import BackOfficeContext from '../../context/BackOfficeContext';

export default function App() {
  const isTablet = useMediaQuery({ query: '(min-width: 769px)' });
  const dispatch = useAppDispatch();
  const user = getUserDataFromLocalStorage();
  const { pathname } = useLocation();
  const langue = useAppSelector((state) => state.organism.langue);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchDays(1));
  }, [dispatch, langue]);

  useEffect(() => {
    dispatch(fetchZones());
    dispatch(fetchRoles());
  }, [dispatch]);

  useEffect(() => {
    async function check() {
      setIsLoading(true);
      const { data } = await axiosInstance.get('/users/me');

      // User en attente de validation
      if (data.data.role === '5754603f-add3-4823-9c77-a2f9789074fc') {
        setIsLoading(false);
        return navigate('/new-user');
      }
      // Users en attente de supression
      if (data.data.role === 'fd46fe69-2a5d-4742-a536-cfad86d3e81f') {
        setIsLoading(false);
        return navigate('/');
      }
      if (data.data.role === '53de6ec2-6d70-48c8-8532-61f96133f139') {
        dispatch(changeAdmin(true));
      }
      setIsLoading(false);
      return <Navigate to="/admin/dashboard" replace />;
    }
    check();
  }, [navigate, dispatch]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (pathname === '/admin' || pathname === '/admin/') {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <BackOfficeContext>
      {isTablet ? (
        <>
          {!isLoading && (
            <>
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <div
                className={` flex flex-col flex-1  lg:pl-20 ${
                  pathname !== '/admin/dashboard' && '2xl:pl-72 '
                } ${
                  pathname === '/admin/dashboard' ||
                  pathname === '/admin/profil'
                    ? 'h-full min-h-full'
                    : 'h-max min-h-max'
                }`}
              >
                <Header setSidebarOpen={setSidebarOpen} />
                <Outlet />
              </div>
            </>
          )}
        </>
      ) : (
        <NoMobile />
      )}
    </BackOfficeContext>
  );
}
