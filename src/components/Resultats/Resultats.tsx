import Header from './Header/Header';
import Map from './Map/Map';
import Panel from './Panel/Panel';
import './Resultats.scss';

function Resultats() {
  return (
    <>
      <Header />
      <main className="results">
        <Panel />
        <Map />
      </main>
    </>
  );
}

export default Resultats;
