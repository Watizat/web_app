import OrgaListSearch from './OrgaListSearch/OrgaListSearch';
import OrgaListCard from './OrgaListCard/OrgaListCard';
import './OrgaList.scss';

function OrgaList() {
  return (
    <section>
      <ul className="orgaList">
        <OrgaListSearch />
        <OrgaListCard />
      </ul>
    </section>
  );
}

export default OrgaList;
