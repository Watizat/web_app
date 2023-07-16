import Header from '../Header/Header';
import OrgaList from './OrgaList/OrgaList';
import OrgaSheet from './OrgaSheet/OrgaSheet';
import './Edition.scss';

function Edition() {
  return (
    <main id="bo-main">
      <Header />
      <div id="edition">
        <OrgaList />
        <OrgaSheet />
      </div>
    </main>
  );
}

export default Edition;
