import { User } from '../../../../@types/organism';
import './UsersDetails.scss';

function UsersDetails({ ...user }: User) {
  console.log(user);
  return (
    <tr>
      <td className="userstable-checkbox">
        <input type="checkbox" />{' '}
      </td>
      <td className="userstable-name">{user.firstname}</td>
      <td className="userstable-antenne">{user.antenne}</td>
      <td className="userstable-email">{user.email}</td>
      <td className="userstable-connexion">{user.last_connected}</td>

      {/*       <td className="userstable-roles">
        {user.role_id.includes('editor') ? (
          <span className="role editor">edition</span>
        ) : null}
        {user.role_id.includes('localref') ? (
          <span className="role localref">ref-local</span>
        ) : null}
        {user.role_id.includes('admin') ? (
          <span className="role admin">admin</span>
        ) : null}
      </td> */}
      <td className="userstable-action">
        <button type="button">
          <i className="las la-ellipsis-h" />
        </button>
      </td>
    </tr>
  );
}

export default UsersDetails;
