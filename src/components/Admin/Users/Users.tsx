import UsersDetails from './UsersDetails/UsersDetails';
import './Users.scss';

function Users() {
  return (
    <div id="users">
      <table className="userstable">
        <thead>
          <tr>
            <th scope="col" className="userstable-checkbox txt-align-center">
              <input type="checkbox" className="checkbox" />{' '}
            </th>
            <th scope="col" className="txt-align-left hideForMenu">
              Prénom & nom
            </th>
            <th scope="col" className="txt-align-left hideForMenu">
              Antenne locale
            </th>
            <th scope="col" className="txt-align-center hideForMenu">
              Adresse email
            </th>
            <th scope="col" className="txt-align-center hideForMenu">
              Dernière connexion
            </th>
            <th scope="col" className="txt-align-center hideForMenu">
              Rôles
            </th>
            <th scope="col" className="txt-align-center hideForMenu">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <UsersDetails />
        </tbody>
      </table>
    </div>
  );
}

export default Users;
