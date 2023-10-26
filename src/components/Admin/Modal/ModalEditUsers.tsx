import dayjs from 'dayjs';
import jwt_decode from 'jwt-decode';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../../@types/formInputs';
import { DirectusUser, UserSession } from '../../../@types/user';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchUsers } from '../../../store/reducers/admin';
import { editUser } from '../../../store/reducers/user';
import { axiosInstance } from '../../../utils/axios';
import { getUserDataFromLocalStorage } from '../../../utils/user';

import styles from './Modal.module.scss';
import ModalDeleteConfirmation from './ModalDeleteUserConfirmation';

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
  const [isActiveConfirmation, setIsActiveConfirmation] = useState(false);
  const admin = useAppSelector((state) => state.user.isAdmin);
  const city = useAppSelector((state) => state.user.city);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    await dispatch(editUser(formData));
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
      console.error('Error while decoding JWT or dispatching actions:', error);
    }
    setIsActive(false);
  };

  if (isActiveConfirmation) {
    return (
      <ModalDeleteConfirmation
        id={user.id}
        setIsActiveConfirmation={setIsActiveConfirmation}
        setIsActive={setIsActive}
      />
    );
  }

  return (
    <div className={styles.modal}>
      <div className={styles.main}>
        <h1 className={styles.title}>Informations utilisateur·ice</h1>
        <form className={styles.list} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.overflow}>
            <table className={styles.editUser_table}>
              <tbody>
                <tr>
                  <td>
                    <div className={`${styles.case} ${styles.double}`}>
                      <input
                        type="text"
                        hidden
                        value={user.id}
                        {...register('id')}
                      />
                      <h4 className={styles.case_title}>Prénom</h4>
                      <input
                        className={styles.case_inputTxt}
                        type="text"
                        {...register('first_name')}
                        defaultValue={user.first_name}
                      />
                    </div>
                  </td>
                  <td>
                    <div className={`${styles.case} ${styles.double}`}>
                      <h4 className={styles.case_title}>Nom de famille</h4>
                      <input
                        className={styles.case_inputTxt}
                        type="text"
                        {...register('last_name')}
                        defaultValue={user.last_name}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={`${styles.case} ${styles.double}`}>
                      <h4 className={styles.case_title}>Antenne local</h4>
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
                  </td>
                  <td>
                    <div className={`${styles.case} ${styles.double}`}>
                      <h4 className={styles.case_title}>Adresse email</h4>
                      <input
                        className={styles.case_inputTxt}
                        type="email"
                        {...register('email')}
                        defaultValue={user.email}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={`${styles.case} ${styles.double}`}>
                      <h4 className={styles.case_title}>Rôles</h4>
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
                  </td>
                  <td>
                    <div className={`${styles.case} ${styles.double}`}>
                      <h4 className={styles.case_title}>Dernière connexion</h4>
                      {user.last_access
                        ? dayjs(user.last_access).format('DD  MMMM  YYYY')
                        : 'Jamais connecté'}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.actions}>
            <button
              type="button"
              className={`${styles.actions_delete} btn btn-danger-fill btn-flat`}
              onClick={() => setIsActiveConfirmation(true)}
            >
              Supprimer
            </button>
            <button
              type="button"
              className={`${styles.actions_close} btn btn-info-fill btn-flat`}
              onClick={() => setIsActive(false)}
            >
              Annuler
            </button>
            <button
              type="submit"
              className={`${styles.actions_save} btn btn-sucess btn-flat`}
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
