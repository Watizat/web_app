import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../@types/formInputs';
import { Organism } from '../../@types/organism';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setAdminOrganism } from '../../store/reducers/admin';
import { editOrganismInfos } from '../../store/reducers/crud';
import { validateEmail } from '../../utils/form/form';

import styles from './Modal.module.scss';

interface ModalProps {
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  organism: Organism;
}

function ModalEditInfos({ setIsModalActive, organism }: ModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useAppDispatch();
  const organismId = useAppSelector(
    (state) => state.admin.organism?.id as number
  );
  const isSaving = useAppSelector((state) => state.crud.isSaving);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    await dispatch(editOrganismInfos({ formData, organismId }));
    setIsModalActive(false);
    await dispatch(setAdminOrganism(organismId));
  };

  return (
    <div className="absolute top-0 left-0 z-[100] flex items-center content-center justify-center w-screen h-screen bg-gray-950/75">
      <div className="w-4/6 bg-white 2xl:w-2/6 max-h-2/6 rounded-xl">
        <h1 className="pt-8 pb-2 pl-16 text-2xl font-medium text-left text-slate-700">
          Modifier les informations de l&apos;organisme
        </h1>
        <form
          className="relative flex flex-col gap-y-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-6 px-16 pt-4 overflow-y-scroll max-h-50">
            <div className={styles.case}>
              <h4 className={styles.case_title}>Organisme</h4>
              <input
                className={styles.case_inputTxt}
                type="text"
                defaultValue={organism.name}
                {...register('name', { required: 'Ce champs est requis' })}
              />
              {errors.name && (
                <small className="text-red-600">{errors.name.message}</small>
              )}
            </div>
            <div className={styles.case}>
              <h4 className={styles.case_title}>Adresse</h4>
              <input
                className={styles.case_inputTxt}
                type="text"
                defaultValue={organism.address}
                {...register('address', { required: 'Ce champs est requis' })}
              />
              {errors.address && (
                <small className="text-red-600">{errors.address.message}</small>
              )}
            </div>
            <div className={styles.case}>
              <h4 className={styles.case_title}>Ville</h4>
              <input
                className={styles.case_inputTxt}
                type="text"
                defaultValue={organism.city}
                {...register('city', { required: 'Ce champs est requis' })}
              />
              {errors.city && (
                <small className="text-red-600">{errors.city.message}</small>
              )}
            </div>
            <div className={styles.case}>
              <h4 className={styles.case_title}>Code postal</h4>
              <input
                className={styles.case_inputTxt}
                type="number"
                defaultValue={organism.zipcode}
                {...register('zipcode', { required: 'Ce champs est requis' })}
              />
              {errors.zipcode && (
                <small className="text-red-600">{errors.zipcode.message}</small>
              )}
            </div>
            <div className={styles.case}>
              <h4 className={styles.case_title}>Site web</h4>
              <input
                className={styles.case_inputTxt}
                type="text"
                defaultValue={organism.website}
                {...register('website')}
              />
            </div>
            <div className={`${styles.double} ${styles.start}`}>
              <div className={styles.case}>
                <h4 className={styles.case_title}>Phone</h4>
                <input
                  className={styles.case_inputTxt}
                  type="tel"
                  defaultValue={organism.phone}
                  {...register('phone', {
                    minLength: {
                      value: 10,
                      message:
                        'Le numéro de téléphone doit comporter au moins 10 chiffres.',
                    },
                    maxLength: {
                      value: 10,
                      message:
                        'Le numéro de téléphone ne peut pas comporter plus de 10 chiffres.',
                    },
                  })}
                />
              </div>
              <div className={styles.case}>
                <h4 className={styles.case_title}>Mail</h4>
                <input
                  className={`${styles.case_inputTxt} ${styles.contact_mail}`}
                  type="email"
                  defaultValue={organism.mail}
                  {...register('mail', {
                    validate: validateEmail,
                  })}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-12 px-16 py-4 bg-gray-50 rounded-b-xl">
            <button
              type="button"
              className="px-3 py-2 text-sm font-semibold bg-white rounded-md shadow-sm text-teal-700/75 ring-1 ring-inset ring-teal-700/50 hover:bg-gray-50"
              onClick={() => setIsModalActive(false)}
            >
              Annuler
            </button>
            <button
              type="submit"
              className={`${styles.actions_save} btn btn-sucess btn-flat`}
            >
              {isSaving && <span>Sauvegarde en cours...</span>}
              {!isSaving && <span>Sauvegarder</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalEditInfos;
