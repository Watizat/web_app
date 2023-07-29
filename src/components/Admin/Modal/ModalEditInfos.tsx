import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../../@types/formInputs';
import { Organism } from '../../../@types/organism';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setAdminOrganism } from '../../../store/reducers/admin';
import { axiosInstance } from '../../../utils/axios';
import './Modal.scss';

interface ModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  organism: Organism;
}

function ModalEditInfos({ setIsActive, organism }: ModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const id = useAppSelector((state) => state.admin.organism?.id as number);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const address = `${data.address} ${data.zipcode} ${data.city}`;

    try {
      const geolocResponse = await axios.get(
        `https://api-adresse.data.gouv.fr/search/?q=${address}`
      );

      const [longitude, latitude] =
        geolocResponse.data.features[0].geometry.coordinates;
      const response = await axiosInstance.patch(`/items/organisme/${id}`, {
        ...data,
        latitude,
        longitude,
        service: null,
      });
      if (response.status === 200) {
        dispatch(setAdminOrganism(id));
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
    setIsActive(false);
  };

  return (
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">
          Modifier les informations de l&apos;organisme
        </h1>
        <form className="modal-list" onSubmit={handleSubmit(onSubmit)}>
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

export default ModalEditInfos;
