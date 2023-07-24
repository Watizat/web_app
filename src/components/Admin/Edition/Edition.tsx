import { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { fetchOrganisms } from '../../../store/reducers/organisms';
import './Edition.scss';
import OrgaList from './OrgaList/OrgaList';
import OrgaSheet from './OrgaSheet/OrgaSheet';

function Edition() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrganisms());
  });
  return (
    <div id="edition">
      <OrgaList />
      <OrgaSheet />
    </div>
  );
}

export default Edition;
