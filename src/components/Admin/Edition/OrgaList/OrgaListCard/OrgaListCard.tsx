import './OrgaListCard.scss';
import { Organism } from '../../../../../@types/organism';

function OrgaListCard({ name, address }: Organism) {
  return (
    <li className="orgaList-card orgaList-orgaCard">
      <div className="orgaList-orgaCard__name">{name}</div>
      <div className="orgaList-orgaCard__adress">{address}</div>
    </li>
  );
}

export default OrgaListCard;
