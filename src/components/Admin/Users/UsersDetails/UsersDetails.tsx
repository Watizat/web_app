import { User } from '../../../../@types/organism';
import './UsersDetails.scss';

function UsersDetails({ ...user }: User) {
  return (
    <tr>
      {/* <td className="userstable-checkbox">
        <input type="checkbox" />
      </td> */}
      <td className="userstable-name">
        {user.firstname} {user.lastname}
      </td>
      <td className="userstable-antenne">{user.zone.name}</td>
      <td className="userstable-email">{user.email}</td>
      <td className="userstable-connexion">{user.last_connected}</td>

      <td className="userstable-roles">
        {user.role_id.name === 'editor' ? (
          <span className="role editor">edition</span>
        ) : null}
        {user.role_id.name === 'localref' ? (
          <span className="role localref">ref-local</span>
        ) : null}
        {user.role_id.name === 'admin' ? (
          <span className="role admin">admin</span>
        ) : null}
      </td>
      <td className="userstable-action">
        <button type="button">
        <i class="las la-edit"></i>
        </button>
      </td>
    </tr>
  );
}

export default UsersDetails;
