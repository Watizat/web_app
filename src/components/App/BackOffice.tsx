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
import Sidebar from '../BackOffice/SideBar/SideBar';
import TopBar from '../BackOffice/TopBar';

function App() {
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

      if (data.data.role === '5754603f-add3-4823-9c77-a2f9789074fc') {
        setIsLoading(false);
        return navigate('/new-user');
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
    <>
      {isTablet ? (
        <>
          {!isLoading && (
            <>
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <div className="2xl:pl-72 lg:pl-20">
                <TopBar setSidebarOpen={setSidebarOpen} />
                <main>
                  <Outlet />
                </main>
              </div>
            </>
          )}
        </>
      ) : (
        <NoMobile />
      )}
    </>
  );
}

export default App;
