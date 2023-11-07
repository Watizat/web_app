import dayjs from 'dayjs';
import jwt_decode from 'jwt-decode';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../../@types/formInputs';
import { DirectusUser, UserSession } from '../../../@types/user';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchUsers } from '../../../store/reducers/admin';
import { editUser } from '../../../store/reducers/user';
import { axiosInstance } from '../../../utils/axios';
import { getUserDataFromLocalStorage } from '../../../utils/user';
import Slide from '../Components/Slide';
import Header from '../Components/Header';
import Input from '../Components/Input';
import BtnCloseValid from '../Components/BtnCloseValid';
import DeleteConfirmation from '../../Alerts/DeleteConfirmation';

interface Props {
  isOpenSlide: boolean;
  setIsOpenSlide: (open: boolean) => void;
  user: DirectusUser;
}

export default function EditSelfProfil({
  isOpenSlide,
  setIsOpenSlide,
  user,
}: Props) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleCloseSlide = () => {
    setIsOpenSlide(false); // Ferme la slide
  };
  const handleDeleteConfirm = () => {
    setIsOpenModal(false); // Ferme la modale
    setIsOpenSlide(false); // Ferme la slide
  };

  return (
    <>
      <DeleteConfirmation
        setIsOpenModal={setIsOpenModal}
        isOpenModal={isOpenModal}
        handleDeleteConfirm={handleDeleteConfirm}
        title="Suppression du compte"
        message="Êtes-vous sûr de vouloir valider la suppression du compte ? Cette action est irréversible."
        deleteBtnText="Confirmer la suppression"
      />
      {/* <Slide isOpenSlide={isOpenSlide} setIsOpenSlide={setIsOpenSlide}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col h-full bg-white divide-y divide-gray-200 shadow-xl"
        >
          <input type="text" hidden {...register('id')} defaultValue={me.id} />
          <div className="flex-1 overflow-y-auto">
            <Header title="Editer mon profil" setOpenSlide={setIsOpenSlide} />
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
                    label: 'Mot de passe',
                    placeholder:
                      'Entrez un nouveau mot de passe (si nécessaire)',
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
          <BtnCloseValid
            handleCloseSlide={handleCloseSlide}
            handleValidation={handleSubmit(onSubmit)}
          />
        </form>
      </Slide> */}
    </>
  );
}
