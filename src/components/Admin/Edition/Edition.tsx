import OrgaList from './OrgaList/OrgaList';
import OrgaSheet from './OrgaSheet/OrgaSheet';
import './Edition.scss';

function Edition() {
  return (
    <div id="edition">
      <OrgaList />
      <OrgaSheet />
    </div>
  );
}

export default Edition;
