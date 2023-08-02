import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../../@types/formInputs';
import { Organism } from '../../../@types/organism';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setAdminOrganism } from '../../../store/reducers/admin';
import { editOrganismInfos } from '../../../store/reducers/crud';
import './Modal.scss';

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
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">
          Modifier les informations de l&apos;organisme
        </h1>
        <form className="modal-list" onSubmit={handleSubmit(onSubmit)}>
          <div className="modal-overflow">
            <div className="modal-case">
              <h4 className="modal-case__title">Organisme</h4>
              <input
                className="modal-case__inputTxt"
                type="text"
                defaultValue={organism.name}
                {...register('name', { required: 'Ce champs est requis' })}
              />
              {errors.name && <small>{errors.name.message}</small>}
            </div>
            <div className="modal-case">
              <h4 className="modal-case__title">Adresse</h4>
              <input
                className="modal-case__inputTxt"
                type="text"
                defaultValue={organism.address}
                {...register('address', { required: 'Ce champs est requis' })}
              />
              {errors.address && <small>{errors.address.message}</small>}
            </div>
            <div className="modal-case">
              <h4 className="modal-case__title">Ville</h4>
              <input
                className="modal-case__inputTxt"
                type="text"
                defaultValue={organism.city}
                {...register('city', { required: 'Ce champs est requis' })}
              />
              {errors.city && <small>{errors.city.message}</small>}
            </div>
            <div className="modal-case">
              <h4 className="modal-case__title">Code postal</h4>
              <input
                className="modal-case__inputTxt"
                type="number"
                defaultValue={organism.zipcode}
                {...register('zipcode', { required: 'Ce champs est requis' })}
              />
              {errors.zipcode && <small>{errors.zipcode.message}</small>}
            </div>
            <div className="modal-case">
              <h4 className="modal-case__title">Site web</h4>
              <input
                className="modal-case__inputTxt"
                type="text"
                defaultValue={organism.website}
                {...register('website')}
              />
            </div>
          </div>
          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-info-fill btn-flat modal-actions__close"
              onClick={() => setIsModalActive(false)}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="btn btn-sucess-fill btn-flat modal-actions__save"
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
