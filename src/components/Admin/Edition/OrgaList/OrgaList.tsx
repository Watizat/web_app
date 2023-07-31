import { useState } from 'react';
import { Organism } from '../../../../@types/organism';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setAdminOrganism } from '../../../../store/reducers/admin';
import './OrgaList.scss';
import OrgaListSearch from './OrgaListSearch/OrgaListSearch';

function OrgaList() {
  const organisms = useAppSelector((state) => state.admin.organisms);
  const isLoading = useAppSelector((state) => state.admin.isLoading);
  const dispatch = useAppDispatch();
  const [isActive, setIsActive] = useState<number | null>(null);

  function handleClick(organism: Organism) {
    dispatch(setAdminOrganism(organism.id));
    setIsActive(organism.id);
  }

  return (
    <section className="orgaList">
      <OrgaListSearch />
      <ul className="orgaList-list">
        {isLoading && <span>Is loading...</span>}
        {organisms.map((organism) => (
          <li key={organism.id} className="orgaList-card">
            <button
              type="button"
              onClick={() => handleClick(organism)}
              className={
                isActive === organism.id
                  ? 'orgaList-button selected'
                  : 'orgaList-button'
              }
            >
              <div className="orgaList-card__name">{organism.name}</div>
              <div className="orgaList-card__adress">{organism.address}</div>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default OrgaList;
