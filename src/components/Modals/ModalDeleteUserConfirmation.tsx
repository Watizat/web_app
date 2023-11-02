import jwt_decode from 'jwt-decode';
import { UserSession } from '../../@types/user';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUsers } from '../../store/reducers/admin';
import { axiosInstance } from '../../utils/axios';
import { getUserDataFromLocalStorage } from '../../utils/user';

import styles from './Modal.module.scss';
import elements from '../../../styles/index.scss';

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
    <div className="absolute top-0 left-0 z-[100] flex items-center content-center justify-center w-screen h-screen bg-gray-950/75">
      <div className="w-4/6 bg-white 2xl:w-2/6 max-h-2/6 rounded-xl">
        <h1 className="pt-8 pb-2 pl-16 text-2xl font-medium text-left text-slate-700">
          Êtes-vous sûr de vouloir supprimer&nbsp;?
        </h1>
        <form
          className="relative flex flex-col gap-y-12"
          onSubmit={handleDelete}
        >
          <div className="flex justify-end gap-12 px-16 py-4 bg-gray-50 rounded-b-xl">
            <button
              type="button"
              className={styles.actions_close2}
              onClick={() => setIsActiveConfirmation(false)}
            >
              Annuler
            </button>
            <button type="submit" className={styles.actions_delete1}>
              Oui
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalDeleteConfirmation;
