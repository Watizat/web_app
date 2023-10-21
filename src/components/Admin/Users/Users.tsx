import jwt_decode from 'jwt-decode';
import { useEffect } from 'react';
import { UserSession } from '../../../@types/user';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchUsers } from '../../../store/reducers/admin';
import { axiosInstance } from '../../../utils/axios';
import { getUserDataFromLocalStorage } from '../../../utils/user';
import styles from './Users.module.scss';
import UsersDetails from './UsersDetails';
import { changeAdmin } from '../../../store/reducers/user';

function Users() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.admin.users);
  const zones = useAppSelector((state) => state.admin.zones);
  const city = useAppSelector((state) => state.user.city);

  useEffect(() => {
    const fetchData = async () => {
      const cityLocal = localStorage.getItem('city');

      const cityId = cityLocal
        ? zones.find((zone) => zone.name === cityLocal)
        : zones.find((zone) => zone.name === city);
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
          dispatch(changeAdmin(true));
          if (cityId !== undefined) {
            await dispatch(fetchUsers(cityId.id.toString()));
          } else {
            await dispatch(fetchUsers(null));
          }
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
  }, [dispatch, zones, city]);

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
        <div className={styles.users}>
          <table>
            <thead>
              <tr>
                <th scope="col" className={styles.txtAlignLeft}>
                  Identité
                </th>
                <th scope="col" className={styles.txtAlignLeft}>
                  Antenne
                </th>
                <th scope="col" className={styles.txtAlignCenter}>
                  Adresse email
                </th>
                <th scope="col" className={styles.txtAlignCenter}>
                  Dernière connexion
                </th>
                <th scope="col" className={styles.txtAlignCenter}>
                  Rôles
                </th>
                <th scope="col" className={styles.txtAlignCenter}>
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
