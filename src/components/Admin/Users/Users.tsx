import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchUsers } from '../../../store/reducers/admin';
import './Users.scss';
import UsersDetails from './UsersDetails/UsersDetails';

/* const userss = {
  email: 'louise.michel@gmail.com',
  firstname: 'Louiss',
  id: 2,
  last_connected: '2023-07-24T09:18:37',
  lastname: 'Michel',
  role_id: {
    id: 2,
    name: 'editor',
  },
}; */

function Users() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.admin.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div id="users">
      <table className="userstable">
        <thead>
          <tr>
            {/*             <th scope="col" className="userstable-checkbox txt-align-center" />
             */}
            <th scope="col" className="txt-align-left hideForMenu">
              Identité
            </th>
            <th scope="col" className="txt-align-left hideForMenu">
              Antenne
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
          {users.map((user) => (
            <UsersDetails key={user.id} {...user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
