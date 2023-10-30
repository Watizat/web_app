import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setAdminOrganism } from '../../../store/reducers/admin';
import { axiosInstance } from '../../../utils/axios';

import styles from './Modal.module.scss';

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
    <div className="absolute top-0 left-0 z-[100] flex flex-col items-center content-center justify-center w-screen h-screen bg-gray-950/75">
      <div className="flex flex-col justify-between w-4/12 gap-4 bg-white 2xl:x3/12 h-max-1/6 rounded-xl">
        <div className="px-8 pt-8">
          <p className="mb-4 text-lg font-semibold leading-6 text-left text-gray-900">
            Suppression
          </p>

          <p className="text-gray-500 text-normal">
            Etes-vous sûr de vouloir procéder à la suppression de ce service ?
          </p>
        </div>
        <form
          className="text-2xl font-medium text-left text-slate-700"
          onSubmit={handleDelete}
        >
          <div className="flex justify-end gap-8 px-8 py-4 bg-gray-50 rounded-b-xl">
            <button
              type="button"
              className="px-3 py-2 text-sm font-semibold bg-white rounded-md shadow-sm text-gray-700/75 ring-1 ring-inset ring-gray-700/50 hover:bg-gray-50"
              onClick={() => setIsActiveConfirmation(false)}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Supprimer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalDeleteServiceConfirmation;
