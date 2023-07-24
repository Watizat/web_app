import { Organism } from '../../../../@types/organism';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setFilteredOrganisms } from '../../../../store/reducers/organisms';
import './OrgaList.scss';
import OrgaListCard from './OrgaListCard/OrgaListCard';
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
          <button
            type="button"
            key={organism.id}
            onClick={() => handleClick(organism)}
          >
            <OrgaListCard name={organism.name} adress={organism.address} />
          </button>
        ))}
      </ul>
    </section>
  );
}

export default OrgaList;
