import Card from '../Card/Card';
import Settings from '../Settings/Settings';
import './Panel.scss';

function Panel() {
  return (
    <section className="panel">
      <Settings />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
}

export default Panel;
