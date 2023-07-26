import { Organism } from '../../../@types/organism';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setAdminOrganism } from '../../../store/reducers/admin';
import { axiosInstance } from '../../../utils/axios';
import './Modal.scss';

interface ModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  organism: Organism;
}

function ModalInfos({ setIsActive, organism }: ModalProps) {
  const id = useAppSelector((state) => state.admin.organism?.id as number);
  const dispatch = useAppDispatch();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form);
    console.log(data);

    try {
      const response = await axiosInstance.patch(`/items/organisme/${id}`, {
        ...data,
        service: null,
      });
      if (response.status === 200) {
        dispatch(setAdminOrganism(id));
      }
    } catch (error) {
      console.log(error);
    }
    setIsActive(false);
  }

  return (
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">Informations organisme</h1>
        <form className="modal-list" onSubmit={handleSubmit}>
          <div className="modal-case">
            <h4 className="modal-case__title">Organisme</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              defaultValue={organism.name}
              name="name"
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Adresse</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              defaultValue={organism.address}
              name="address"
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Ville</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              defaultValue={organism.city}
              name="city"
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Code postal</h4>
            <input
              className="modal-case__inputTxt"
              type="number"
              defaultValue={organism.zipcode}
              name="zipcode"
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Site web</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              defaultValue={organism.website}
              name="website"
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

export default ModalInfos;
