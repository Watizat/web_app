import dayjs from 'dayjs';
import 'dayjs/locale/fr'; // Importez le fichier de localisation français
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { useState } from 'react';
import { DirectusUser } from '../../../@types/user';
import { useAppSelector } from '../../../hooks/redux';
import ModalUsers from '../Modal/ModalEditUsers';
import styles from './Users.module.scss';

interface UsersDetailsProps {
  user: DirectusUser;
}
dayjs.locale('fr');
dayjs.extend(localizedFormat); // Activer le plugin localizedFormat

function UsersDetails({ user }: UsersDetailsProps) {
  const [isActiveService, setIsActiveService] = useState(false);
  const zones = useAppSelector((state) => state.admin.zones);

  function renderRoles(data: DirectusUser) {
    if (data.role === '4a30876c-cea0-455f-92d0-593212918aaf') {
      return (
        <>
          <span className={`${styles.role} ${styles.role_editor}`}>
            edition
          </span>
          <span className={`${styles.role} ${styles.role_localref}`}>
            ref-local
          </span>
        </>
      );
    }
    if (data.role === '53de6ec2-6d70-48c8-8532-61f96133f139') {
      return (
        <>
          <span className={`${styles.role} ${styles.role_editor}`}>
            edition
          </span>
          <span className={`${styles.role} ${styles.role_localref}`}>
            ref-local
          </span>
          <span className={`${styles.role} ${styles.role_admin}`}>admin</span>
        </>
      );
    }
    if (data.role === '5754603f-add3-4823-9c77-a2f9789074fc') {
      return (
        <span className={`${styles.role} ${styles.role_newrole}`}>Nouveau</span>
      );
    }
    return (
      <span className={`${styles.role} ${styles.role_editor}`}>edition</span>
    );
  }

  return (
    <>
      {isActiveService && (
        <ModalUsers setIsActive={setIsActiveService} user={user} />
      )}
      <tr>
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
