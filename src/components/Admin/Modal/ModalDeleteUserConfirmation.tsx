import jwt_decode from 'jwt-decode';
import { UserSession } from '../../../@types/user';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchUsers } from '../../../store/reducers/admin';
import { axiosInstance } from '../../../utils/axios';
import { getUserDataFromLocalStorage } from '../../../utils/user';
import './Modal.scss';

interface ModalProps {
  setIsActiveConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalDeleteConfirmation({
  setIsActiveConfirmation,
  id,
  setIsActive,
}: ModalProps) {
  const dispatch = useAppDispatch();

  const zones = useAppSelector((state) => state.admin.zones);
  const city = useAppSelector((state) => state.user.city);

  async function handleDelete(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await axiosInstance.delete(`/users/${id}`);
    const fetchData = async () => {
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
        console.error(
          'Error while decoding JWT or dispatching actions:',
          error
        );
      }
    };

    fetchData();

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
