import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/fr'; // Importez le fichier de localisation français
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { useState } from 'react';
import { DirectusUser } from '../../../@types/user';
import ModalUsers from '../../Modals/ModalEditUsers';

import { useAppSelector } from '../../../hooks/redux';

interface Props {
  user: DirectusUser;
}

dayjs.locale('fr');
dayjs.extend(localizedFormat); // Activer le plugin localizedFormat

export default function Line({ user }: Props) {
  const [isActiveService, setIsActiveService] = useState(false);
  const zones = useAppSelector((state) => state.admin.zones);
  const uniqueQueryParam = Math.random();

  function renderRoles(data: DirectusUser) {
    // Rôle ref-local
    if (data.role === '4a30876c-cea0-455f-92d0-593212918aaf') {
      return (
        <div className="flex justify-center gap-2">
          <span className="inline-flex items-center rounded-md bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700">
            ref-local
          </span>
        </div>
      );
    }
    // Rôle admin
    if (data.role === '53de6ec2-6d70-48c8-8532-61f96133f139') {
      return (
        <div className="flex justify-center gap-2">
          <span className="inline-flex items-center rounded-md bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600">
            admin
          </span>
        </div>
      );
    }
    if (data.role === '5754603f-add3-4823-9c77-a2f9789074fc') {
      return (
        <div className="flex justify-center gap-2">
          <span className="inline-flex items-center rounded-md bg-blue-100 px-1.5 py-0.5 text-xs font-medium text-blue-700">
            Nouveau·elle utilisateur·ice à valider
          </span>
        </div>
      );
    }
    // Rôle des users a supprimer
    if (data.role === 'fd46fe69-2a5d-4742-a536-cfad86d3e81f') {
      return (
        <div className="flex justify-center gap-2">
          <span className="inline-flex items-center rounded-md bg-blue-100 px-1.5 py-0.5 text-xs font-medium text-blue-700">
            Utilisateur à supprimer
          </span>
        </div>
      );
    }
    // Rôle utilisateur (par defaut)
    return (
      <div className="flex justify-center gap-2">
        <span className="inline-flex items-center rounded-md bg-blue-100 px-1.5 py-0.5 text-xs font-medium text-blue-700">
          edition
        </span>
      </div>
    );
  }

  return (
    <>
      {isActiveService && (
        <ModalUsers setIsActive={setIsActiveService} user={user} />
      )}
      <tr key={user.email} className="select-none">
        <td className="py-2 pl-4 pr-3 text-sm whitespace-nowrap sm:pl-0">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-9 h-9">
              <img
                className="rounded-full w-9 h-9"
                src={`https://source.boringavatars.com/beam?${uniqueQueryParam}`}
                alt=""
              />
            </div>
            <div className="ml-4 font-medium text-gray-900">
              {user.first_name} {user.last_name}
            </div>
          </div>
        </td>
        <td className="px-3 py-5 text-sm text-gray-500 whitespace-nowrap">
          {renderRoles(user)}
        </td>
        <td className="px-3 py-5 text-sm text-center text-gray-500 whitespace-nowrap">
          <div className="text-gray-900">
            {zones.find((zone) => zone.id === user.zone)?.name}
          </div>
        </td>
        <td
          className={`px-3 py-5 text-sm text-center ${
            dayjs(user.last_access).isBefore(dayjs().subtract(6, 'months')) // Si date de connexion supérieure à 6 mois
              ? ' text-red-500' // Date en rouge rouge
              : ' text-gray-500'
          } whitespace-nowrap`}
        >
          {dayjs(user.last_access).format('DD MMMM YYYY') !== 'Invalid Date'
            ? dayjs(user.last_access).format('DD MMMM YYYY')
            : 'Jamais connecté'}
        </td>
        <td className="px-3 py-5 text-sm text-gray-500 whitespace-nowrap">
          {user.email}
        </td>
        <td className="relative py-5 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-0">
          <Link to="/" className="text-indigo-600 hover:text-indigo-900">
            Edit
            <span className="sr-only">
              {user.first_name} {user.last_name}
            </span>
          </Link>
        </td>
      </tr>
    </>
  );
}
