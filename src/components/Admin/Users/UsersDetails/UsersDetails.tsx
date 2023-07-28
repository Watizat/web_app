import dayjs from 'dayjs';
import { useState } from 'react';
import { User } from '../../../../@types/organism';
import ModalUsers from '../../Modal/ModalAddUsers';
import './UsersDetails.scss';

function UsersDetails({ ...user }: User) {
  const [isActiveService, setIsActiveService] = useState(false);
  return (
    <tr>
      {isActiveService && (
        <ModalUsers setIsActive={setIsActiveService} {...user} />
      )}

      {/* <td className="userstable-checkbox">
        <input type="checkbox" />
      </td> */}

      <td className="userstable-name">
        {user.firstname} {user.lastname}
      </td>

      <td className="userstable-antenne">{user.zone.name}</td>

      <td className="userstable-email">{user.email}</td>

      <td className="userstable-connexion">
        {dayjs(user.last_connected).format('DD MMMM YYYY')}
      </td>

      <td className="userstable-roles">
        <span className="role editor">edition</span>
        {user.role_id.name === 'Ref-local' ? (
          <span className="role localref">ref-local</span>
        ) : user.role_id.name === 'Admin' ? (
          <>
            <span className="role localref">ref-local</span>
            <span className="role admin">admin</span>
          </>
        ) : null}
      </td>

      <td className="userstable-action">
        <button type="button" onClick={() => setIsActiveService(true)}>
          <i className="las la-edit" />
        </button>
      </td>
    </tr>
  );
}

export default UsersDetails;
