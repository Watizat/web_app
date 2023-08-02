import dayjs from 'dayjs';
import { SubmitHandler, useForm } from 'react-hook-form';
import jwt_decode from 'jwt-decode';
import { Inputs } from '../../../@types/formInputs';
import { DirectusUser, UserSession } from '../../../@types/user';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchUsers } from '../../../store/reducers/admin';
import { editUser } from '../../../store/reducers/user';
import './Modal.scss';
import { axiosInstance } from '../../../utils/axios';
import { getUserDataFromLocalStorage } from '../../../utils/user';

interface ModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  user: DirectusUser;
}

function ModalUsers({ setIsActive, user }: ModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useAppDispatch();
  const zones = useAppSelector((state) => state.admin.zones);
  const roles = useAppSelector((state) => state.admin.roles);
  const admin = useAppSelector((state) => state.user.isAdmin);
  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    await dispatch(editUser(formData));
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
      console.error('Error while decoding JWT or dispatching actions:', error);
    }
    setIsActive(false);
  };

  return (
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">Informations utilisateur·ice</h1>
        <form className="modal-list" onSubmit={handleSubmit(onSubmit)}>
          <div className="modal-overflow">
            <div className="modal-double">
              <div className="modal-case modal-double__case">
                <input type="text" hidden value={user.id} {...register('id')} />
                <h4 className="modal-case__title">Prénom</h4>
                <input
                  className="modal-case__inputTxt"
                  type="text"
                  {...register('first_name')}
                  defaultValue={user.first_name}
                />
              </div>
              <div className="modal-case modal-double__case">
                <h4 className="modal-case__title">Nom de famille</h4>
                <input
                  className="modal-case__inputTxt"
                  type="text"
                  {...register('last_name')}
                  defaultValue={user.last_name}
                />
              </div>
            </div>
            <div className="modal-double">
              <div className="modal-case modal-double__case">
                <h4 className="modal-case__title">Antenne local</h4>
                <fieldset>
                  <select
                    {...register('zone')}
                    defaultValue={user.zone}
                    disabled={!admin}
                  >
                    {zones.map((zone) => (
                      <option key={zone.id} value={zone.id}>
                        {zone.name}
                      </option>
                    ))}
                  </select>
                </fieldset>
              </div>
              <div className="modal-case modal-double__case">
                <h4 className="modal-case__title">Adresse email</h4>
                <input
                  className="modal-case__inputTxt"
                  type="text"
                  {...register('email')}
                  defaultValue={user.email}
                />
              </div>
            </div>
            <div className="modal-double">
              <div className="modal-case modal-double__case">
                <h4 className="modal-case__title">Rôles</h4>
                <fieldset>
                  <select defaultValue={user.role} {...register('role')}>
                    {admin &&
                      roles.map((role) => (
                        <option key={role.id} value={role.id}>
                          {role.name}
                        </option>
                      ))}
                    {!admin &&
                      roles
                        .filter(
                          (filteredRole) =>
                            filteredRole.id !==
                            '53de6ec2-6d70-48c8-8532-61f96133f139'
                        )
                        .map((role) => (
                          <option key={role.id} value={role.id}>
                            {role.name}
                          </option>
                        ))}
                  </select>
                </fieldset>
              </div>
              <div className="modal-case modal-double__case">
                <h4 className="modal-case__title">Dernière connexion</h4>
                {dayjs(user.last_access).format('DD  MMMM  YYYY')}
              </div>
            </div>
          </div>
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
              type="submit"
              className="btn btn-sucess-fill btn-flat modal-actions__save"
            >
              Sauvegarder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalUsers;
