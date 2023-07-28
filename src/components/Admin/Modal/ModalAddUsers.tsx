import dayjs from 'dayjs';
import { useEffect } from 'react';
import { User } from '../../../@types/organism';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchRoles, fetchZones } from '../../../store/reducers/admin';
import './Modal.scss';

interface ModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  user?: User;
}

function ModalUsers({ setIsActive, user: { ...user } }: ModalProps) {
  const dispatch = useAppDispatch();
  const zones = useAppSelector((state) => state.admin.zones);
  const roles = useAppSelector((state) => state.admin.roles);

  useEffect(() => {
    dispatch(fetchZones());
    dispatch(fetchRoles());
  }, [dispatch]);

  return (
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">Informations organisme</h1>
        <form className="modal-list">
          <div className="modal-double">
            <div className="modal-case modal-double__case">
              <h4 className="modal-case__title">Prénom</h4>
              <input
                className="modal-case__inputTxt"
                type="text"
                defaultValue={user.firstname}
              />
            </div>
            <div className="modal-case modal-double__case">
              <h4 className="modal-case__title">Nom de famille</h4>
              <input
                className="modal-case__inputTxt"
                type="text"
                defaultValue={user.lastname}
              />
            </div>
          </div>
          <div className="modal-double">
            <div className="modal-case modal-double__case">
              <h4 className="modal-case__title">Antenne local</h4>
              <select>
                {zones.map((zone) => (
                  <option key={zone.id} value={zone.name}>
                    {zone.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="modal-case modal-double__case">
              <h4 className="modal-case__title">Adresse email</h4>
              <input
                className="modal-case__inputTxt"
                type="text"
                defaultValue={user.email}
              />
            </div>
          </div>
          <div className="modal-double">
            <div className="modal-case modal-double__case">
              <h4 className="modal-case__title">Rôles</h4>
              <select defaultValue={user.role_id.name}>
                {roles.map((role) => (
                  <option key={role.id} value={role.name}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="modal-case modal-double__case">
              <h4 className="modal-case__title">Dernière connexion</h4>
              {dayjs(user.last_connected).format('DD  MMMM  YYYY')}
            </div>
          </div>
        </form>
        <div className="modal-actions">
          <button
            type="button"
            className="btn btn-danger-fill btn-flat modal-actions__close"
          >
            Supprimer
          </button>
          <button
            type="button"
            className="btn btn-info-fill btn-flat modal-actions__close"
            onClick={() => setIsActive(false)}
          >
            Annuler
          </button>
          <button
            type="button"
            className="btn btn-sucess-fill btn-flat modal-actions__save"
          >
            Sauvegarder
          </button>
        </div>
      </div>
    </div>
  );
}
ModalUsers.defaultProps = {
  user: {
    firstname: '',
    lastname: '',
    role_id: { name: '' },
    email: '',
    last_connected: '',
  },
};

export default ModalUsers;
