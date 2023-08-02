import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { fetchRoles, fetchZones } from '../../../store/reducers/admin';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { DirectusUser } from '../../../@types/user';
import { axiosInstance } from '../../../utils/axios';
import './Account.scss';
import { Inputs } from '../../../@types/formInputs';
import { validateEmail } from '../../../utils/form/form';
import { editUser } from '../../../store/reducers/user';

function Account() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useAppDispatch();
  const zones = useAppSelector((state) => state.admin.zones);
  const roles = useAppSelector((state) => state.admin.roles);
  const [me, setMe] = useState<DirectusUser | null>(null);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    if (formData.password === '') {
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      await dispatch(editUser(formDataCopy));
    } else {
      await dispatch(editUser(formData));
    }
    navigate('/admin/dashboard');
  };

  useEffect(() => {
    async function getUserInfos() {
      const { data } = await axiosInstance.get('/users/me');
      setMe(data.data);
    }
    getUserInfos();
    dispatch(fetchZones());
    dispatch(fetchRoles());
  }, [dispatch]);

  if (!me) {
    return <div>Pas d&apos;infos</div>;
  }

  return (
    <div className="account">
      <div className="account-main">
        <h1 className="account-title">Informations du compte</h1>
        <form className="account-list" onSubmit={handleSubmit(onSubmit)}>
          <input type="text" hidden {...register('id')} defaultValue={me.id} />
          <div className="account-double">
            <div className="account-case">
              <fieldset>
                <legend>Prénom</legend>
                <input
                  className="account-case__inputTxt"
                  type="text"
                  {...register('first_name', {
                    required: 'Ce champs est requis',
                  })}
                  placeholder="Prénom"
                  defaultValue={me.first_name}
                />
              </fieldset>
              {errors.first_name?.message && (
                <small className="required">{errors.first_name.message}</small>
              )}
            </div>
            <div className="account-case">
              <fieldset>
                <legend>Nom</legend>
                <input
                  className="account-case__inputTxt"
                  type="text"
                  {...register('last_name', {
                    required: 'Ce champs est requis',
                  })}
                  placeholder="Nom"
                  defaultValue={me.last_name}
                />
              </fieldset>
              {errors.last_name?.message && (
                <small className="required">{errors.last_name.message}</small>
              )}
            </div>
          </div>
          <div className="account-double">
            <div className="account-case">
              <fieldset>
                <legend>Adresse email</legend>
                <input
                  className="account-case__inputTxt account-contact__mail"
                  type="text"
                  {...register('email', {
                    validate: validateEmail,
                  })}
                  placeholder="Adresse email"
                  defaultValue={me.email}
                />
              </fieldset>
            </div>
            <div className="account-case">
              <fieldset>
                <legend>Nouveau mot de passe</legend>
                <input
                  className="account-case__inputTxt account-contact__mail"
                  type="password"
                  {...register('password')}
                  placeholder="Nouveau mot de passe"
                />
              </fieldset>
            </div>
          </div>
          <div className="account-double">
            <div className="account-case">
              <fieldset>
                <select defaultValue={me.role} disabled>
                  {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
                <legend>Rôle</legend>
              </fieldset>
            </div>
            <div className="account-case">
              <fieldset>
                <select defaultValue={me.zone} disabled>
                  {zones.map((zone) => (
                    <option key={zone.id} value={zone.id}>
                      {zone.name}
                    </option>
                  ))}
                </select>
                <legend className="legend-isactive">Antenne local</legend>
              </fieldset>
            </div>
          </div>
          <div className="account-actions">
            <Link to="/admin">
              <button
                type="button"
                className="btn btn-info-fill btn-flat modal-actions__close"
              >
                Retour
              </button>
            </Link>
            <button
              type="submit"
              className="btn btn-sucess-fill btn-flat modal-actions__save"
            >
              Sauvegarder les modifications
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Account;
