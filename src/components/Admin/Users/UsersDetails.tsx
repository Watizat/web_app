import dayjs from 'dayjs';
import 'dayjs/locale/fr'; // Importez le fichier de localisation français
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { useState } from 'react';
import { DirectusUser } from '../../../@types/user';
import { useAppSelector } from '../../../hooks/redux';
import ModalUsers from '../../Modals/ModalEditUsers';
import styles from './Users.module.scss';

interface UsersDetailsProps {
  user: DirectusUser;
}
dayjs.locale('fr');
dayjs.extend(localizedFormat); // Activer le plugin localizedFormat

function UsersDetails({ user }: UsersDetailsProps) {
  const [isActiveService, setIsActiveService] = useState(false);
  const zones = useAppSelector((state) => state.admin.zones);

  return (
    <>
      {isActiveService && (
        <ModalUsers setIsActive={setIsActiveService} user={user} />
      )}
      <tr className={styles.tr}>
        <td className={styles.name}>
          {user.first_name} {user.last_name}
        </td>

        <td className={styles.antenne}>
          {zones.find((zone) => zone.id === user.zone)?.name}
        </td>

        <td className={styles.email}>{user.email}</td>

        <td className={styles.connexion}>
          {dayjs(user.last_access).format('DD MMMM YYYY') !== 'Invalid Date'
            ? dayjs(user.last_access).format('DD MMMM YYYY')
            : 'Jamais connecté'}
        </td>

        <td className={styles.roles}>{renderRoles(user)}</td>

        <td className={styles.action}>
          <button type="button" onClick={() => setIsActiveService(true)}>
            <i className="las la-edit" />
          </button>
        </td>
      </tr>
    </>
  );
}

export default UsersDetails;
