import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchAdminOrganisms } from '../../../store/reducers/admin';
import Sidelist from './SideList';
import DataPanel from './DataPanel/DataPanel';

export default function Edition() {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.user.city as string);

  useEffect(() => {
    dispatch(fetchAdminOrganisms({ city }));
  }, [dispatch, city]);

  return (
    <main className="flex flex-1 h-full min-w-full min-h-full align-middle bg-slate-50 ">
      <Sidelist />
      <DataPanel />
    </main>
  );
}
