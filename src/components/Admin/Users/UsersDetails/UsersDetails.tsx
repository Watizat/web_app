import dayjs from 'dayjs';
import { useState } from 'react';
import { DirectusUser } from '../../../../@types/user';
import { useAppSelector } from '../../../../hooks/redux';
import ModalUsers from '../../Modal/ModalEditUsers';
import './UsersDetails.scss';

interface UsersDetailsProps {
  user: DirectusUser;
  admin: boolean;
}

function UsersDetails({ user, admin }: UsersDetailsProps) {
  const [isActiveService, setIsActiveService] = useState(false);
  const zones = useAppSelector((state) => state.admin.zones);

  function renderRoles(data: DirectusUser) {
    if (data.role === '4a30876c-cea0-455f-92d0-593212918aaf') {
      return (
        <>
          <span className="role editor">edition</span>
          <span className="role localref">ref-local</span>
        </>
      );
    }
    if (data.role === '53de6ec2-6d70-48c8-8532-61f96133f139') {
      return (
        <>
          <span className="role editor">edition</span>
          <span className="role localref">ref-local</span>
          <span className="role admin">admin</span>
        </>
      );
    }
    if (data.role === '5754603f-add3-4823-9c77-a2f9789074fc') {
      return <span className="role newrole">Nouveau</span>;
    }
    return <span className="role editor">edition</span>;
  }

  return (
    <>
      {isActiveService && (
        <ModalUsers
          setIsActive={setIsActiveService}
          user={user}
          admin={admin}
        />
      )}
      <tr>
        <td className="userstable-name">
          {user.first_name} {user.last_name}
        </td>

        <td className="userstable-antenne">
          {zones.find((zone) => zone.id === user.zone)?.name}
        </td>

        <td className="userstable-email">{user.email}</td>

        <td className="userstable-connexion">
          {dayjs(user.last_access).format('DD MMMM YYYY')}
        </td>

        <td className="userstable-roles">{renderRoles(user)}</td>

        <td className="userstable-action">
          <button type="button" onClick={() => setIsActiveService(true)}>
            <i className="las la-edit" />
          </button>
        </td>
      </tr>
    </>
  );
}

export default UsersDetails;
