import { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { fetchAdminOrganisms } from '../../../store/reducers/admin';
import './Edition.scss';
import OrgaList from './OrgaList/OrgaList';
import OrgaSheet from './OrgaSheet/OrgaSheet';

function Edition() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAdminOrganisms());
  });
  return (
    <div id="edition">
      <OrgaList />
      <OrgaSheet />
    </div>
  );
}

export default Edition;
