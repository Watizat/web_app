import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchAdminOrganisms } from '../../../store/reducers/admin';
import styles from './Edition.module.scss';
import OrgaList from './OrgaList/OrgaList';
import OrgaSheet from './OrgaSheet/OrgaSheet';

function Edition() {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.user.city as string);

  useEffect(() => {
    dispatch(fetchAdminOrganisms(city));
  }, [dispatch, city]);
  return (
    <div className={styles.edition}>
      <OrgaList />
      <OrgaSheet />
    </div>
  );
}

export default Edition;
