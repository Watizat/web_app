import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { fetchRoles, fetchZones } from '../../../store/reducers/admin';
import { useAppDispatch } from '../../../hooks/redux';
import { DirectusUser } from '../../../@types/user';
import { axiosInstance } from '../../../utils/axios';
import { Inputs } from '../../../@types/formInputs';
import { validateEmail } from '../../../utils/form/form';
import { editUser, logout } from '../../../store/reducers/user';
import DeleteAccount from '../Alerts/DeleteAccount';
import Slide from '../Users/Slide';
import Header from './Components/Header';
import ValidationDouble from './Components/ValidationDouble';
import Input from './Components/Input';

interface Props {
  openSlide: boolean;
  setOpenSlide: (open: boolean) => void;
  onUpdateUser: (updatedUser: DirectusUser) => void;
}

export default function EditSelfProfil({
  openSlide,
  setOpenSlide,
  onUpdateUser,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Ajoutez la fonction reset pour réinitialiser le formulaire
  } = useForm<Inputs>();

  const dispatch = useAppDispatch();
  const [me, setMe] = useState<DirectusUser | null>(null);
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState(false);

  const getUserInfos = async () => {
    try {
      const { data } = await axiosInstance.get('/users/me');
      return data.data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(
        "Erreur lors de la récupération des données de l'utilisateur :",
        error
      );
      return null;
    }
  };

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    if (formData.password === '') {
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      await dispatch(editUser(formDataCopy));
    } else {
      await dispatch(editUser(formData));
    }
    const updatedUserData = await getUserInfos();
    if (updatedUserData) {
      onUpdateUser(updatedUserData);
    }
    setOpenSlide(false);
  };

  const handleCloseSlide = () => {
    reset(); // Réinitialise le formulaire à la fermeture de la slide
    setOpenSlide(false); // Ferme la slide
  };

  // Fonction pour changer le rôle de l'utilisateur et déconnecter le compte
  const handleDeleteProfil = async () => {
    try {
      const updatedUserData = await getUserInfos();

      if (updatedUserData) {
        // Créez un objet avec les propriétés nécessaires
        const updatedUser = {
          id: updatedUserData.id,
          role: 'fd46fe69-2a5d-4742-a536-cfad86d3e81f', // Remplacez par l'ID du rôle cible
          // Vous pouvez ajouter d'autres propriétés si nécessaire
        };

        // Changer le rôle de l'utilisateur et déconnecter
        await dispatch(editUser(updatedUser));
        // dispatch(logout()); // This line is commented out because the 'logout' function is not defined in the code you provided
        dispatch(logout());
        navigate('/');
      }
    } catch (error) {
      console.error(
        'Erreur lors de la mise à jour du rôle et de la déconnexion :',
        error
      );
    }
  };
  useEffect(() => {
    if (openSlide) {
      // Appel de getUserInfos uniquement si la diapositive est ouverte
      getUserInfos().then((userData) => {
        if (userData) {
          setMe(userData);
        }
      });
      dispatch(fetchZones());
      dispatch(fetchRoles());
    }
  }, [dispatch, openSlide]);

  if (!me) {
    return <div />;
  }

  // const inputs = {
  //   firstName: {
  //     htmlFor: 'first_name',
  //     type: 'text',
  //     register: 'first_name',
  //     required: true,
  //     value: me.first_name,
  //     placeholder: 'Prénom',
  //     error: 'first_name',
  //   },
  // };

  return (
    <>
      <DeleteAccount
        setDeleteModal={setDeleteModal}
        deleteModal={deleteModal}
        handleDeleteProfil={handleDeleteProfil}
      />
      <Slide openSlide={openSlide} setOpenSlide={setOpenSlide}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col h-full bg-white divide-y divide-gray-200 shadow-xl"
        >
          <input type="text" hidden {...register('id')} defaultValue={me.id} />
          <div className="flex-1 overflow-y-auto">
            <Header title="Editer mon profil" setOpenSlide={setOpenSlide} />
            <div className="flex flex-col justify-between flex-1">
              <div className="px-4 pt-6 pb-5 space-y-3 sm:px-6">
                <Input
                  data={{
                    type: 'text',
                    defaultValue: me.first_name,
                    register: 'first_name',
                    required: true,
                    placeholder: 'Prénom',
                  }}
                  formMethods={{ register, errors }}
                />
                <Input
                  data={{
                    type: 'text',
                    defaultValue: me.last_name,
                    register: 'last_name',
                    required: true,
                    placeholder: 'Nom de famille / surnom ou pseudo',
                  }}
                  formMethods={{ register, errors }}
                />
                <Input
                  data={{
                    type: 'email',
                    defaultValue: me.email,
                    register: 'email',
                    required: true,
                    placeholder: 'Adresse email',
                    validate: validateEmail,
                  }}
                  formMethods={{ register, errors }}
                />
                <Input
                  data={{
                    type: 'password',
                    register: 'password',
                    required: false,
                    placeholder: 'Mot de passe',
                  }}
                  formMethods={{ register, errors }}
                />
                <div>
                  <div className="flex items-center py-4 mt-5 text-sm text-gray-600 group ">
                    <span>
                      Pour modifier votre antenne locale de rattachement ou
                      votre rôle utilisateur·ice, merci de contacter un·e
                      administrateur·ice
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-start flex-shrink-0 px-4 py-4">
                <button
                  type="button"
                  className="px-3 py-2 text-sm font-semibold text-red-500"
                  onClick={() => setDeleteModal(true)}
                >
                  Demander la suppression de mon compte
                </button>
              </div>
            </div>
          </div>
          <ValidationDouble
            handleCloseSlide={handleCloseSlide}
            handleValidation={handleSubmit(onSubmit)}
          />
        </form>
      </Slide>
    </>
  );
}
