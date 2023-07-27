import { useAppDispatch } from '../../../hooks/redux';
import { setAdminOrganism } from '../../../store/reducers/admin';
import { axiosInstance } from '../../../utils/axios';
import './Modal.scss';

interface ModalProps {
  setIsActiveConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  organismId: number;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalDeleteConfirmation({
  setIsActiveConfirmation,
  id,
  organismId,
  setIsActive,
}: ModalProps) {
  const dispatch = useAppDispatch();

  async function handleDelete(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await axiosInstance.delete(`/items/contact/${id}`);
    dispatch(setAdminOrganism(organismId));
    setIsActive(false);
    setIsActiveConfirmation(false);
  }

  return (
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">
          Êtes-vous sûr de vouloir supprimer&nbsp;?
        </h1>
        <form className="modal-list" onSubmit={handleDelete}>
          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-info-fill btn-flat modal-actions__close"
              onClick={() => setIsActiveConfirmation(false)}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="btn btn-danger-fill btn-flat modal-actions__save"
            >
              Oui
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalDeleteConfirmation;
