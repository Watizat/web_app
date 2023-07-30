import classNames from 'classnames';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../../@types/formInputs';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setAdminOrganism } from '../../../store/reducers/admin';
import { axiosInstance } from '../../../utils/axios';
import {
  scheduleFormat,
  validateScheduleFormat,
} from '../../../utils/form/form';
import './Modal.scss';

interface ServiceModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalAddService({ setIsActive }: ServiceModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const categoriesList = useAppSelector((state) => state.organism.categories);
  const organismId = useAppSelector(
    (state) => state.admin.organism?.id as number
  );
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    function setData(data: Inputs) {
      return {
        translations: {
          name: data.name,
          description: data.description,
          infos_alerte: data.infos_alerte,
        },
        categorie_id: data.categorie_id,
        organisme_id: data.organisme_id,
        horaire: scheduleFormat(data),
      };
    }
    const data = setData(formData);
    try {
      const response = await axiosInstance.post(`/items/service`, {
        categorie_id: data.categorie_id,
        organisme_id: data.organisme_id,
      });
      await axiosInstance.post(`/items/service_translation`, {
        ...data.translations,
        langue_id: 1,
        service: response.data.data.id,
      });
      await Promise.all(
        data.horaire.map(({ id, ...horaire }) =>
          axiosInstance.post(`/items/schedule`, {
            ...horaire,
            service_id: response.data.data.id,
            organisme_id: null,
          })
        )
      );
      dispatch(setAdminOrganism(organismId));
      setIsActive(false);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">Ajouter un service</h1>
        <form className="modal-list" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="number"
            defaultValue={organismId}
            hidden
            {...register('organisme_id')}
          />
          <div className="modal-case">
            <h4 className="modal-case__title">Catégorie</h4>

            <label className="modal-contact__actu">
              Catégorie du service
              <select {...register('categorie_id')}>
                {categoriesList.map((category) => (
                  <option
                    key={category.translations[0].name}
                    value={category.id}
                  >
                    {category.translations[0].name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Nom du service</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              {...register('name', { required: 'Ce champs est requis' })}
            />
            {errors.name && <small>{errors.name.message}</small>}
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Type de service·s proposé·s</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              {...register('description')}
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Horaires</h4>
            <table className="modal-data__hours">
              <thead className="modal-data__hoursHead">
                <tr>
                  <td>Jours</td>
                  <td colSpan={3}>Matin</td>
                  <td />
                  <td colSpan={3}>Aprés-midi</td>
                </tr>
              </thead>
              <tbody>
                {[
                  'Lundi',
                  'Mardi',
                  'Mercredi',
                  'Jeudi',
                  'vendredi',
                  'Samedi',
                  'Dimanche',
                ].map((i, index) => (
                  <tr key={i} className="modal-data__hoursLine">
                    <td className="modal-data__hoursDay">
                      <span>{i}</span>
                      <input
                        type="hidden"
                        {...register(
                          `schedule_id_${index + 1}`
                          // , { value: '',}
                        )}
                      />
                    </td>
                    <td className="modal-data__hoursHour">
                      <input
                        className={classNames(
                          'modal-data__hoursInput',
                          errors[`schedule_openam_${index + 1}`] &&
                            'modal-data__hoursInput--error'
                        )}
                        {...register(`schedule_openam_${index + 1}`, {
                          validate: (value) =>
                            validateScheduleFormat(value as string),
                        })}
                      />
                    </td>
                    <td className="modal-data__hoursSeparater">-</td>
                    <td className="modal-data__hoursTd">
                      <input
                        className={classNames(
                          'modal-data__hoursInput',
                          errors[`schedule_closeam_${index + 1}`] &&
                            'modal-data__hoursInput--error'
                        )}
                        {...register(`schedule_closeam_${index + 1}`, {
                          validate: (value) =>
                            validateScheduleFormat(value as string),
                        })}
                      />
                    </td>
                    <td className="modal-data__hoursSeparater">/</td>
                    <td className="modal-data__hoursTd">
                      <input
                        className={classNames(
                          'modal-data__hoursInput',
                          errors[`schedule_openpm_${index + 1}`] &&
                            'modal-data__hoursInput--error'
                        )}
                        {...register(`schedule_openpm_${index + 1}`, {
                          validate: (value) =>
                            validateScheduleFormat(value as string),
                        })}
                      />
                    </td>
                    <td className="modal-data__hoursSeparater">-</td>
                    <td className="modal-data__hoursTd">
                      <input
                        className={classNames(
                          'modal-data__hoursInput',
                          errors[`schedule_closepm_${index + 1}`] &&
                            'modal-data__hoursInput--error'
                        )}
                        {...register(`schedule_closepm_${index + 1}`, {
                          validate: (value) =>
                            validateScheduleFormat(value as string),
                        })}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Info s & alertes</h4>
            <textarea
              className="modal-case__textarea"
              {...register('infos_alerte')}
            />
          </div>
          <div className="modal-actions">
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

export default ModalAddService;
