import OrgaListSearch from './OrgaListSearch/OrgaListSearch';
import OrgaListCard from './OrgaListCard/OrgaListCard';
import './OrgaList.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setEditOrganism } from '../../../../store/reducers/organisms';
import { Organism } from '../../../../@types/organism';

function OrgaList() {
  const organisms = useAppSelector((state) => state.organisms);
  const dispatch = useAppDispatch();

  function handleClick(organism: Organism) {
    dispatch(setEditOrganism(organism));
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
