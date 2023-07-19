import './UsersDetails.scss';

function UsersDetails() {
  return (
    <tr>
      <td className="userstable-checkbox">
        <input type="checkbox" />{' '}
      </td>
      <td className="userstable-name">Jane Smith</td>
      <td className="userstable-antenne">Toulouse</td>
      <td className="userstable-email">j.smith@example.com</td>
      <td className="userstable-connexion">03 février 2023</td>
      <td className="userstable-roles">
        <span className="role editor">edition</span>
        <span className="role localref">ref-local</span>
        <span className="role admin">admin</span>
      </td>
      <td className="userstable-action">
        <button type="button">
          <i className="las la-ellipsis-h" />
        </button>
      </td>
    </tr>
  );
}

export default UsersDetails;
