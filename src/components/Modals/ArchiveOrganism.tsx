import { useEffect, useRef } from 'react';
import { Dialog } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { SubmitHandler, useForm } from 'react-hook-form';
import ModalBase from './components/ModalBase';
import { Inputs } from '../../@types/formInputs';
import Textarea from '../BackOffice/components/Textarea';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { editOrganismVisibility } from '../../store/reducers/crud';
import { Organism } from '../../@types/organism';
import {
  fetchAdminOrganisms,
  setAdminOrganism,
} from '../../store/reducers/admin';
import { useAppContext } from '../../context/BackOfficeContext';

interface Props {
  setIsOpenModal: (open: boolean) => void;
  isOpenModal: boolean;
  visibiltyAnswer: [string, string];
  organism: Organism;
  confirmBtnText: string;
}

export default function ArchiveOrganism({
  setIsOpenModal,
  isOpenModal,
  visibiltyAnswer,
  organism,
  confirmBtnText,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const dispatch = useAppDispatch();

  // Réinitialiser le formulaire à l'ouverture de la Modal
  useEffect(() => {
    if (isOpenModal) {
      reset();
    }
  }, [isOpenModal, reset]);

  const organismId = useAppSelector(
    (state) => state.admin.organism?.id as number
  );

  // Récupération du contexte
  const appContext = useAppContext();
  const city = useAppSelector((state) => state.user.city as string);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const updatedVisibility = !organism.visible;
    await dispatch(
      editOrganismVisibility({
        formData,
        organismId,
        isVisible: updatedVisibility,
      })
    );
    reset();
    setIsOpenModal(false);
    await dispatch(setAdminOrganism(organismId));
    if (appContext) {
      dispatch(
        fetchAdminOrganisms({
          city,
        })
      );
    }
  };

  const updateVisibilityMessage: SubmitHandler<Inputs> = async (formData) => {
    // Mise à jour du message sans changer la visibilité
    await dispatch(
      editOrganismVisibility({
        formData,
        organismId,
        isVisible: organism.visible, // La visibilité reste inchangée
      })
    );

    reset();
    setIsOpenModal(false);

    // Rafraîchissement des données de l'organisme
    await dispatch(setAdminOrganism(organismId));

    // Rafraîchissement de la liste des organismes
    if (appContext) {
      dispatch(
        fetchAdminOrganisms({
          city,
          isDisplayArchivedOrga: appContext.isDisplayArchivedOrga,
        })
      );
    }
  };

  const cancelButtonRef = useRef(null);

  return (
    <ModalBase setIsOpenModal={setIsOpenModal} isOpenModal={isOpenModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="sm:flex sm:items-start">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-yellow-200 rounded-full sm:mx-0 sm:h-10 sm:w-10">
            <ExclamationTriangleIcon
              className="w-6 h-6 text-yellow-700"
              aria-hidden="true"
            />
          </div>
          <div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <Dialog.Title
                as="h3"
                className="text-base font-semibold leading-6 text-gray-900"
              >
                {visibiltyAnswer[0]}
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">{visibiltyAnswer[1]}</p>
              </div>
            </div>
            <div className="pl-4 mt-4">
              <Textarea
                data={{
                  type: 'string',
                  label: "Message d'archivage",
                  defaultValue: organism.visible_comment,
                  register: 'visible_comment',
                  required: false,
                  placeholder: 'ex : Pas de réponse depuis plus de six mois',
                }}
                formMethods={{ register, errors }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="button"
            onClick={handleSubmit(updateVisibilityMessage)}
            className="px-2 py-1 mr-2 text-sm font-semibold text-gray-600 rounded"
          >
            Modifier le message
          </button>
          <button
            type="button"
            className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            onClick={() => setIsOpenModal(false)}
            ref={cancelButtonRef}
          >
            Annuler
          </button>
          <button
            type="submit"
            className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-yellow-600 rounded-md shadow-sm hover:bg-yellow-500 sm:ml-3 sm:w-auto"
          >
            {confirmBtnText}
          </button>
        </div>
      </form>
    </ModalBase>
  );
}
