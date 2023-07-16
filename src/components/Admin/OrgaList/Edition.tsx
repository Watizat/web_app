import Container from '../../../Container/Container';
import Header from '../../Header/Header';
import './Edition.scss';

function Edition() {
  return (
    <main id="bo-main">
      <Header />
      <div id="edition">
        <section>
          <ul className="orgaList">
            <li className="orgaList-card orgaList-searchCard">
              <input
                id="orgaList-searchCard__search"
                type="search"
                placeholder="Rechercher..."
              />
              <button type="button">
                <i className="las la-sort-amount-down orgaList-searchCard__logo" />
              </button>
              <button type="button">
                <i className="las la-filter orgaList-searchCard__logo" />
              </button>
            </li>
            <li className="orgaList-card orgaList-orgaCard">
              <div className="orgaList-orgaCard__name">
                Croix Rouge (antenne nord)
              </div>
              <div className="orgaList-orgaCard__adress">
                66 Bvd. Etienne Dumarchais, 31500 Toulouse
              </div>
            </li>
            <li className="orgaList-card orgaList-orgaCard">
              <div className="orgaList-orgaCard__name">
                Croix Rouge (antenne nord)
              </div>
              <div className="orgaList-orgaCard__adress">
                66 Bvd. Etienne Dumarchais, 31500 Toulouse
              </div>
            </li>
            <li className="orgaList-card orgaList-orgaCard">
              <div className="orgaList-orgaCard__name">
                Croix Rouge (antenne nord)
              </div>
              <div className="orgaList-orgaCard__adress">
                66 Bvd. Etienne Dumarchais, 31500 Toulouse
              </div>
            </li>
            <li className="orgaList-card orgaList-orgaCard">
              <div className="orgaList-orgaCard__name">
                Croix Rouge (antenne nord)
              </div>
              <div className="orgaList-orgaCard__adress">
                66 Bvd. Etienne Dumarchais, 31500 Toulouse
              </div>
            </li>
            <li className="orgaList-card orgaList-orgaCard">
              <div className="orgaList-orgaCard__name">
                Croix Rouge (antenne nord)
              </div>
              <div className="orgaList-orgaCard__adress">
                66 Bvd. Etienne Dumarchais, 31500 Toulouse
              </div>
            </li>
            <li className="orgaList-card orgaList-orgaCard">
              <div className="orgaList-orgaCard__name">
                Croix Rouge (antenne nord)
              </div>
              <div className="orgaList-orgaCard__adress">
                66 Bvd. Etienne Dumarchais, 31500 Toulouse
              </div>
            </li>
            <li className="orgaList-card orgaList-orgaCard">
              <div className="orgaList-orgaCard__name">
                Croix Rouge (antenne nord)
              </div>
              <div className="orgaList-orgaCard__adress">
                66 Bvd. Etienne Dumarchais, 31500 Toulouse
              </div>
            </li>
            <li className="orgaList-card orgaList-orgaCard">
              <div className="orgaList-orgaCard__name">
                Croix Rouge (antenne nord)
              </div>
              <div className="orgaList-orgaCard__adress">
                66 Bvd. Etienne Dumarchais, 31500 Toulouse
              </div>
            </li>
            <li className="orgaList-card orgaList-orgaCard">
              <div className="orgaList-orgaCard__name">
                Croix Rouge (antenne nord)
              </div>
              <div className="orgaList-orgaCard__adress">
                66 Bvd. Etienne Dumarchais, 31500 Toulouse
              </div>
            </li>
            <li className="orgaList-card orgaList-orgaCard">
              <div className="orgaList-orgaCard__name">
                Croix Rouge (antenne nord)
              </div>
              <div className="orgaList-orgaCard__adress">
                66 Bvd. Etienne Dumarchais, 31500 Toulouse
              </div>
            </li>
            <li className="orgaList-card orgaList-orgaCard">
              <div className="orgaList-orgaCard__name">
                Croix Rouge (antenne nord)
              </div>
              <div className="orgaList-orgaCard__adress">
                66 Bvd. Etienne Dumarchais, 31500 Toulouse
              </div>
            </li>
            <li className="orgaList-card orgaList-orgaCard">
              <div className="orgaList-orgaCard__name">
                Croix Rouge (antenne nord)
              </div>
              <div className="orgaList-orgaCard__adress">
                66 Bvd. Etienne Dumarchais, 31500 Toulouse
              </div>
            </li>
            <li className="orgaList-card orgaList-orgaCard">
              <div className="orgaList-orgaCard__name">
                Croix Rouge (antenne nord)
              </div>
              <div className="orgaList-orgaCard__adress">
                66 Bvd. Etienne Dumarchais, 31500 Toulouse
              </div>
            </li>
            <li className="orgaList-card orgaList-orgaCard">
              <div className="orgaList-orgaCard__name">
                Croix Rouge (antenne nord)
              </div>
              <div className="orgaList-orgaCard__adress">
                66 Bvd. Etienne Dumarchais, 31500 Toulouse
              </div>
            </li>
            <li className="orgaList-card orgaList-orgaCard">
              <div className="orgaList-orgaCard__name">
                Croix Rouge (antenne nord)
              </div>
              <div className="orgaList-orgaCard__adress">
                66 Bvd. Etienne Dumarchais, 31500 Toulouse
              </div>
            </li>
            <li className="orgaList-card orgaList-orgaCard">
              <div className="orgaList-orgaCard__name">
                Croix Rouge (antenne nord)
              </div>
              <div className="orgaList-orgaCard__adress">
                66 Bvd. Etienne Dumarchais, 31500 Toulouse
              </div>
            </li>
          </ul>
        </section>
        <section className="orgaFiche">
          <div className="orgaFiche-header">
            <h1>Informations organisme</h1>
            <table className="orgaFiche-header__infos">
              <td className="infos-case">
                <h4>Organisme</h4>
                <div className="infos-case_txt">
                  Croix rouge française de l’apostolque de machin truc (antenne
                  sud)
                </div>
              </td>
              <td className="infos-case">
                <h4>Adresse</h4>
                <div className="infos-case_txt">
                  66 rue de l'ambassadeur de la petite provence
                </div>{' '}
              </td>
              <td className="infos-case">
                <h4>Ville</h4>
                <div className="infos-case_txt">Toulouse</div>{' '}
              </td>
              <td className="infos-case">
                <h4>Code postal</h4>
                <div className="infos-case_txt">31500</div>{' '}
              </td>
            </table>
          </div>
          <div className="orgaFiche-card">rghtryhtry</div>
          <div className="orgaFiche-card">rghtryhtry</div>
        </section>
      </div>
    </main>
  );
}

export default Edition;
