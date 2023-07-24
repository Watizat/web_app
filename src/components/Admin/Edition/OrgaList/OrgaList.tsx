import { Organism } from '../../../../@types/organism';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setFilteredOrganisms } from '../../../../store/reducers/organisms';
import './OrgaList.scss';
import OrgaListSearch from './OrgaListSearch/OrgaListSearch';

function OrgaList() {
  const organisms = useAppSelector((state) => state.organism.organisms);
  const dispatch = useAppDispatch();

  function handleClick(organism: Organism) {
    dispatch(setFilteredOrganisms([organism]));
  }
  return (
    <section className="orgaList">
      <OrgaListSearch />
      <ul className="orgaList-list">
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
