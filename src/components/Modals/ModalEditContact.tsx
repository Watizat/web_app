import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../@types/formInputs';
import { Contact } from '../../@types/organism';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setAdminOrganism } from '../../store/reducers/admin';
import { editContact } from '../../store/reducers/crud';
import { validateEmail } from '../../utils/form/form';

import ModalDeleteConfirmation from './ModalDeleteContactConfirmation';

interface ModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  contact: Contact;
}

function ModalEditContact({ contact, setIsActive }: ModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [isActiveConfirmation, setIsActiveConfirmation] = useState(false);

  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.admin.organism?.id as number);
  const isSaving = useAppSelector((state) => state.crud.isSaving);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const contactId = contact.id;
    await dispatch(editContact({ formData, contactId }));
    setIsActive(false);
    await dispatch(setAdminOrganism(id));
  };

  if (isActiveConfirmation) {
    return (
      <ModalDeleteConfirmation
        id={contact.id}
        setIsActiveConfirmation={setIsActiveConfirmation}
        setIsActive={setIsActive}
      />
    );
  }

  return (
    <div className="absolute top-0 left-0 z-[100] flex items-center content-center justify-center w-screen h-screen bg-gray-950/75">
      <div className="w-4/6 bg-white 2xl:w-2/6 max-h-2/6 rounded-xl">
        <h1 className="pt-8 pb-2 pl-16 text-2xl font-medium text-left text-slate-700">
          Modifier un contact
        </h1>
        <form
          className="relative flex flex-col gap-y-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-6 px-16 pt-4 overflow-y-scroll max-h-50">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-teal-800"
                >
                  Nom du contact
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    className={`block w-full rounded-md border-0 py-1.5  pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 ${
                      errors.name && 'ring-2 ring-red-500  focus:ring-red-500'
                    }`}
                    {...register('name', { required: 'Ce champs est requis' })}
                    defaultValue={contact.name}
                  />
                  {errors.name && (
                    <small className="text-red-600">
                      {errors.name.message}
                    </small>
                  )}
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="job"
                  className="block text-sm font-medium leading-6 text-teal-800"
                >
                  Fonction / service
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                    defaultValue={contact.job}
                    {...register('job')}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="comment"
                className="block text-sm font-medium leading-6 text-teal-800"
              >
                Commentaires
              </label>
              <div className="mt-2">
                <textarea
                  rows={2}
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  {...register('comment')}
                  defaultValue={contact.comment}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="mail"
                  className="block text-sm font-medium leading-6 text-teal-800"
                >
                  Adresse email
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    className={`block w-full rounded-md border-0 py-1.5  pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6  ${
                      errors.mail && 'ring-2 ring-red-500  focus:ring-red-500'
                    }`}
                    defaultValue={contact.mail}
                    {...register('mail', {
                      validate: validateEmail,
                    })}
                  />
                  {errors.mail?.message && (
                    <small className="text-red-600">
                      {errors.mail.message}
                    </small>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-teal-800"
                >
                  N° de télephone
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    className={`block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6  ${
                      errors.phone && ` ring-2 ring-red-500 focus:ring-red-500`
                    }`}
                    defaultValue={contact.phone}
                    {...register('phone', {
                      minLength: {
                        value: 10,
                        message:
                          'Le numéro de téléphone doit comporter au moins 10 chiffres.',
                      },
                      maxLength: {
                        value: 10,
                        message:
                          'Le numéro de téléphone ne peut pas comporter plus de 10 chiffres.',
                      },
                    })}
                  />

                  {errors.phone?.message && (
                    <small className="text-red-600">
                      {errors.phone.message}
                    </small>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="visibility"
                  className="block text-sm font-medium leading-6 text-teal-800"
                >
                  Publicité du contact
                </label>
                <div className="mt-2">
                  <select
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    {...register('visibility', { required: true })}
                    defaultValue={`${contact.visibility}`}
                  >
                    <option value="false">Privé</option>
                    <option value="true">Public</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="actualisation"
                  className="block text-sm font-medium leading-6 text-teal-800"
                >
                  Contact d&apos;actualisation
                </label>
                <div className="mt-2">
                  <select
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    {...register('actualisation', { required: true })}
                    defaultValue={`${contact.actualisation}`}
                  >
                    <option value="false">Non</option>
                    <option value="true">Oui</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-12 px-16 py-4 bg-gray-50 rounded-b-xl">
            <button
              type="button"
              className="px-3 py-2 text-sm font-semibold text-gray-600 rounded-md"
              onClick={() => setIsActiveConfirmation(true)}
            >
              Supprimer
            </button>
            <button
              type="button"
              className="px-3 py-2 text-sm font-semibold bg-white rounded-md shadow-sm shadow-smtext-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 "
              onClick={() => setIsActive(false)}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-3 py-2 text-sm font-semibold text-white bg-teal-600 rounded-md shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              {isSaving && <span>Sauvegarde en cours...</span>}
              {!isSaving && <span>Sauvegarder</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalEditContact;
