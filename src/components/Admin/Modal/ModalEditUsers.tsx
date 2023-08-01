import dayjs from 'dayjs';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../../@types/formInputs';
import { DirectusUser } from '../../../@types/user';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchUsers } from '../../../store/reducers/admin';
import { editUser } from '../../../store/reducers/user';
import './Modal.scss';

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

  console.log(user);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    await dispatch(editUser(formData));
    setIsActive(false);
    await dispatch(fetchUsers(null));
  };

  return (
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">Informations organisme</h1>
        <form className="modal-list" onSubmit={handleSubmit(onSubmit)}>
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
              <select {...register('zone')} defaultValue={user.zone}>
                {zones.map((zone) => (
                  <option key={zone.id} value={zone.id}>
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
                {...register('email')}
                defaultValue={user.email}
              />
            </div>
          </div>
          <div className="modal-double">
            <div className="modal-case modal-double__case">
              <h4 className="modal-case__title">Rôles</h4>
              <select defaultValue={user.role} {...register('role')}>
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="modal-case modal-double__case">
              <h4 className="modal-case__title">Dernière connexion</h4>
              {dayjs(user.last_access).format('DD  MMMM  YYYY')}
            </div>
          </div>
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
        </form>
        <div className="modal-actions" />
      </div>
    </div>
  );
}

export default ModalUsers;
