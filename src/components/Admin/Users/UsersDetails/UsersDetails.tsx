import './UsersDetails.scss';

function UsersDetails() {
  const users = [
    {
      name: 'Jane Smith',
      antenne: 'Toulouse',
      email: 'j.smith@example.com',
      connexion: '03 février 2023',
      roles: ['editor', 'localref', 'admin'],
    },
  ];
  return (
    <tr>
      <td className="userstable-checkbox">
        <input type="checkbox" />{' '}
      </td>
      <td className="userstable-name">{users[0].name}</td>
      <td className="userstable-antenne">{users[0].antenne}</td>
      <td className="userstable-email">{users[0].email}</td>
      <td className="userstable-connexion">{users[0].connexion}</td>

      <td className="userstable-roles">
        {users[0].roles.includes('editor') ? (
          <span className="role editor">edition</span>
        ) : null}
        {users[0].roles.includes('localref') ? (
          <span className="role localref">ref-local</span>
        ) : null}
        {users[0].roles.includes('admin') ? (
          <span className="role admin">admin</span>
        ) : null}
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
