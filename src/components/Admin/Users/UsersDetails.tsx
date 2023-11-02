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

  function renderRoles(data: DirectusUser) {
    if (data.role === '4a30876c-cea0-455f-92d0-593212918aaf') {
      return (
        <div className="flex justify-center gap-2">
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-md">
            edition
          </span>
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-md">
            ref-local
          </span>
        </div>
      );
    }
    if (data.role === '53de6ec2-6d70-48c8-8532-61f96133f139') {
      return (
        <div className="flex justify-center gap-2">
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-md">
            edition
          </span>
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-md">
            ref-local
          </span>
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-pink-700 bg-pink-100 rounded-md">
            admin
          </span>
        </div>
      );
    }
    if (data.role === '5754603f-add3-4823-9c77-a2f9789074fc') {
      return (
        <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-yellow-800 bg-yellow-100 rounded-md">
          nouveau·elle
        </span>
      );
    }
    return (
      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-md">
        edition
      </span>
    );
  }

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
