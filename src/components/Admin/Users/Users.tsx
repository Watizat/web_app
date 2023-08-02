import jwt_decode from 'jwt-decode';
import { useEffect } from 'react';
import { UserSession } from '../../../@types/user';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchUsers } from '../../../store/reducers/admin';
import { axiosInstance } from '../../../utils/axios';
import { getUserDataFromLocalStorage } from '../../../utils/user';
import './Users.scss';
import UsersDetails from './UsersDetails/UsersDetails';

function Users() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.admin.users);

  /*   const localUser = getUserDataFromLocalStorage();
  const decodedUser = localUser?.token
    ? (jwt_decode(localUser.token.access_token) as UserSession)
    : null;
  console.log(decodedUser?.role); */

  // const { role } = jwt_decode(token.access_token);
  // console.log(token);

  useEffect(() => {
    const fetchData = async () => {
      const localUser = getUserDataFromLocalStorage();
      const { data } = await axiosInstance.get('/users/me');
      const { zone } = data.data;

      if (!localUser?.token) {
        return;
      }
      try {
        const decodedUser = jwt_decode(
          localUser.token.access_token
        ) as UserSession;
        if (decodedUser.role === '53de6ec2-6d70-48c8-8532-61f96133f139') {
          await dispatch(fetchUsers(null));
        } else {
          await dispatch(fetchUsers(zone.toString()));
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(
          'Error while decoding JWT or dispatching actions:',
          error
        );
      }
    };

    fetchData();
    // };
  }, [dispatch]);

  return (
    <>
      {users.length === 0 && (
        <div id="users">
          <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>
            Vous n&apos;avez pas accès à la liste des utilisateurs
          </h1>
        </div>
      )}

      {users.length > 0 && (
        <div id="users">
          <table className="userstable">
            <thead>
              <tr>
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
                <UsersDetails key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Users;
