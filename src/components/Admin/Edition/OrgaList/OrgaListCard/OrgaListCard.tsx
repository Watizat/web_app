import './OrgaListCard.scss';

function OrgaListCard({ name, adress }) {
  return (
    <li className="orgaList-card orgaList-orgaCard">
      <div className="orgaList-orgaCard__name">{name}</div>
      <div className="orgaList-orgaCard__adress">{adress}</div>
    </li>
  );
}

export default OrgaListCard;
