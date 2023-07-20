import { organismes } from './organismes';
import OrgaListSearch from './OrgaListSearch/OrgaListSearch';
import OrgaListCard from './OrgaListCard/OrgaListCard';
import './OrgaList.scss';

function OrgaList() {
  return (
    <section className="orgaList">
      <OrgaListSearch />
      <ul className="orgaList-list">
        {organismes.map(({ id, name, adresse }) => (
          <OrgaListCard key={id} name={name} adress={adresse} />
        ))}
      </ul>
    </section>
  );
}

export default OrgaList;
