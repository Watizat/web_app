import { Organism } from '../../../../@types/organism';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setAdminOrganism } from '../../../../store/reducers/admin';
import './OrgaList.scss';
import OrgaListSearch from './OrgaListSearch/OrgaListSearch';

function OrgaList() {
  const organisms = useAppSelector((state) => state.admin.organisms);
  const isLoading = useAppSelector((state) => state.admin.isLoading);
  const dispatch = useAppDispatch();

  function handleClick(organism: Organism) {
    dispatch(setAdminOrganism(organism));
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
              key={organism.id}
              onClick={() => handleClick(organism)}
              className="orgaList-button"
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
