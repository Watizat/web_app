import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setAdminOrganism } from '../../../store/reducers/admin';
import { axiosInstance } from '../../../utils/axios';
import './Modal.scss';

interface ModalProps {
  setIsActiveConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalDeleteServiceConfirmation({
  setIsActiveConfirmation,
  id,
  setIsActive,
}: ModalProps) {
  const organismId = useAppSelector(
    (state) => state.admin.organism?.id as number
  );
  const dispatch = useAppDispatch();

  async function handleDelete(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await axiosInstance.delete(`/items/service/${id}`);
    await dispatch(setAdminOrganism(organismId));
    setIsActive(false);
    setIsActiveConfirmation(false);
  }

  return (
    <div className="modal">
      <div className="modal-main modal-empty">
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

export default ModalDeleteServiceConfirmation;
