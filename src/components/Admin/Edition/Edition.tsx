import { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import OrgaList from './OrgaList/OrgaList';
import OrgaSheet from './OrgaSheet/OrgaSheet';
import './Edition.scss';
import { fetchOrganisms } from '../../../store/reducers/organisms';

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
