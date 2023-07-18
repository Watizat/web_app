import OrgaListSearch from './OrgaListSearch/OrgaListSearch';
import OrgaListCard from './OrgaListCard/OrgaListCard';
import './OrgaList.scss';

function OrgaList() {
  return (
    <section className="orgaList">
      <OrgaListSearch />
      <ul className="orgaList-list">
        <OrgaListCard />
      </ul>
    </section>
  );
}

export default OrgaList;
