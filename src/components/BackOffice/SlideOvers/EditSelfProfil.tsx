import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { fetchRoles, fetchZones } from '../../../store/reducers/admin';
import { useAppDispatch } from '../../../hooks/redux';
import { DirectusUser } from '../../../@types/user';
import { axiosInstance } from '../../../utils/axios';
import { Inputs } from '../../../@types/formInputs';
import { validateEmail } from '../../../utils/form/form';
import { editUser, logout } from '../../../store/reducers/user';
import DeleteAccount from '../Modals/DeleteAccount';

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
    return <div>Pas d&apos;infos</div>;
  }

  return (
    <>
      <Transition.Root show={openSlide} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenSlide}>
          <div className="fixed inset-0 bg-gray-400/50" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none sm:pl-16">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-600"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-400"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="w-screen max-w-md pointer-events-auto">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col h-full bg-white divide-y divide-gray-200 shadow-xl"
                    >
                      <input
                        type="text"
                        hidden
                        {...register('id')}
                        defaultValue={me.id}
                      />
                      <div className="flex-1 overflow-y-auto">
                        <div className="h-16 px-4 py-6 bg-gray-50 sm:px-6">
                          <div className="flex items-center justify-between">
                            <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                              Editer mon profil
                            </Dialog.Title>
                            <div className="flex items-center ml-3 h-7">
                              <button
                                type="button"
                                className="relative text-gray-400 hover:text-gray-500"
                                onClick={() => setOpenSlide(false)}
                              >
                                <span className="absolute -inset-2.5" />
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon
                                  className="w-6 h-6"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col justify-between flex-1">
                          <div className="px-4 pt-6 pb-5 space-y-3 sm:px-6">
                            <div>
                              <label
                                htmlFor="first_name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Prénom
                              </label>
                              <div>
                                <input
                                  type="text"
                                  {...register('first_name', {
                                    required: 'Ce champs est requis',
                                  })}
                                  placeholder="Prénom"
                                  defaultValue={me.first_name}
                                  className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-watizat-600 sm:text-sm sm:leading-6"
                                />
                                {errors.first_name?.message && (
                                  <small className="required">
                                    {errors.first_name.message}
                                  </small>
                                )}
                              </div>
                            </div>
                            <div>
                              <label
                                htmlFor="last_name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Nom de famille / surnom / pseudo
                              </label>
                              <div>
                                <input
                                  type="text"
                                  {...register('last_name', {
                                    required: 'Ce champs est requis',
                                  })}
                                  placeholder="Nom de famille / surnom / pseudo"
                                  defaultValue={me.last_name}
                                  className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-watizat-600 sm:text-sm sm:leading-6"
                                />
                                {errors.last_name?.message && (
                                  <small className="required">
                                    {errors.last_name.message}
                                  </small>
                                )}
                              </div>
                            </div>
                            <div>
                              <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Adresse email
                              </label>
                              <div>
                                <input
                                  type="email"
                                  {...register('email', {
                                    validate: validateEmail,
                                  })}
                                  placeholder="Adresse email"
                                  defaultValue={me.email}
                                  className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-watizat-600 sm:text-sm sm:leading-6"
                                />
                                {errors.email?.message && (
                                  <small className="required">
                                    {errors.email.message}
                                  </small>
                                )}
                              </div>
                            </div>
                            <div>
                              <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Mot de passe
                              </label>
                              <div>
                                <input
                                  type="password"
                                  {...register('password')}
                                  placeholder="Entrez un mot de passe (si nécessaire)"
                                  className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-watizat-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                              <div className="flex items-center py-4 mt-5 text-sm text-gray-600 group ">
                                <span>
                                  Pour modifier votre antenne locale de
                                  rattachement ou votre rôle utilisateur·ice,
                                  merci de contacter un·e administrateur·ice
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
                      <div className="flex justify-end flex-shrink-0 px-4 py-4">
                        <button
                          type="button"
                          onClick={handleCloseSlide}
                          className="px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                          Annuler
                        </button>
                        <button
                          type="submit"
                          className="inline-flex justify-center px-3 py-2 ml-4 text-sm font-semibold text-white bg-green-600 rounded-md shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                        >
                          Valider les modifications
                        </button>
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <DeleteAccount
        setDeleteModal={setDeleteModal}
        deleteModal={deleteModal}
        handleDeleteProfil={handleDeleteProfil}
      />
    </>
  );
}
