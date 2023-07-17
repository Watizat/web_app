import './Infos.scss';

function Infos() {
  return (
    <article className="orgaSheet-card orgaSheet-infos">
      <h1>Informations organisme</h1>
      <ul className="orgaSheet-infos__list">
        <li className="orgaSheet-case">
          <span className="orgaSheet-case__header">
            <h4>Organisme</h4>
            <button type="button" className="orgaSheet-edition__menu">
              <i className="las la-ellipsis-h" />
            </button>
          </span>
          <p>
            Croix rouge française de l&apos;apostolque de machin truc (antenne
            sud)
          </p>
        </li>
        <li className="orgaSheet-case">
          <span className="orgaSheet-case__header">
            <h4>Adresse</h4>
            <button type="button" className="orgaSheet-edition__menu">
              <i className="las la-ellipsis-h" />
            </button>
          </span>
          <p>66 rue de l&apos;ambassadeur de la petite provence</p>
        </li>
        <li className="orgaSheet-case">
          <span className="orgaSheet-case__header">
            <h4>Ville</h4>
            <button type="button" className="orgaSheet-edition__menu">
              <i className="las la-ellipsis-h" />
            </button>
          </span>
          <p>Toulouse</p>
        </li>
        <li className="orgaSheet-case">
          <span className="orgaSheet-case__header">
            <h4>Code postal</h4>
            <button type="button" className="orgaSheet-edition__menu">
              <i className="las la-ellipsis-h" />
            </button>
          </span>
          <p>31500</p>
        </li>
      </ul>
    </article>
  );
}

export default Infos;
