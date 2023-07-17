import Header from './Header/Header';
import Map from './Map/Map';
import Organisme from './Organisme/Organisme';
import Panel from './Panel/Panel';
import './Resultats.scss';

function Resultats() {
  return (
    <>
      <Header />
      <main className="results">
        {/*         <Panel />
        <Map /> */}
        <Organisme />
      </main>
    </>
  );
}

export default Resultats;
