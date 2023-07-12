import Header from './Header/Header';
import Panel from './Panel/Panel';
import './Resultats.scss';

function Resultats() {
  return (
    <>
      <Header />
      <main className="results">
        <Panel />
        <div>carte</div>
      </main>
    </>
  );
}

export default Resultats;
