import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Organism } from '../../../../@types/organism';
import { Inputs } from '../../../../@types/formInputs';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setAdminOrganism } from '../../../../store/reducers/admin';
import { editOrganismInfos } from '../../../../store/reducers/crud';
import {
  validateEmail,
  validatePhoneNumber,
} from '../../../../utils/form/form';
import Slide from '../Components/Slide';
import Header from '../Components/Header';
import Input from '../Components/Input';
import BtnCloseValid from '../Components/BtnCloseValid';

interface Props {
  isOpenSlide: boolean;
  setIsOpenSlide: (open: boolean) => void;
  organism: Organism;
}

export default function EditOrgaGeneral({
  isOpenSlide,
  setIsOpenSlide,
  organism,
}: Props) {
  const dispatch = useAppDispatch();

  const {
    register, // Récupère les fonctions register
    handleSubmit, // Récupère la fonction handleSubmit
    formState: { errors }, // Récupère les erreurs
    reset, // Ajoutez la fonction reset pour réinitialiser le formulaire
  } = useForm<Inputs>();

  // Réinitialiser le formulaire à l'ouverture de la slide
  useEffect(() => {
    if (isOpenSlide) {
      reset();
    }
  }, [isOpenSlide, reset]);

  const organismId = useAppSelector(
    (state) => state.admin.organism?.id as number
  );

  const isSaving = useAppSelector((state) => state.crud.isSaving);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    await dispatch(editOrganismInfos({ formData, organismId }));
    setIsOpenSlide(false);
    await dispatch(setAdminOrganism(organismId));
  };

  const handleCloseSlide = () => {
    reset(); // Réinitialise le formulaire à la fermeture de la slide
    setIsOpenSlide(false); // Ferme la slide
  };

  return (
    <Slide isOpenSlide={isOpenSlide} setIsOpenSlide={setIsOpenSlide}>
      <form
        // onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col h-full bg-white divide-y divide-gray-200 shadow-xl select-none"
      >
        <input type="text" hidden value={organism.id} {...register('id')} />
        <div className="flex-1 overflow-y-auto">
          <Header
            title="Editer les informations de l'organisme"
            setIsOpenSlide={setIsOpenSlide}
          />
          <div className="flex flex-col justify-between flex-1">
            <div className="px-4 pt-6 pb-5 space-y-3 sm:px-6">
              <Input
                data={{
                  type: 'text',
                  label: "Nom de l'organisme",
                  defaultValue: organism.name,
                  register: 'name',
                  required: true,
                  placeholder: 'ex : Médecins sans frontières',
                }}
                formMethods={{ register, errors }}
              />
              <Input
                data={{
                  type: 'text',
                  label: 'N° et nom de la rue',
                  defaultValue: organism.address,
                  register: 'address',
                  required: true,
                  placeholder: 'ex : 5 boulevard Armand Duportal',
                }}
                formMethods={{ register, errors }}
              />
              <Input
                data={{
                  type: 'number',
                  label: 'Code postal',
                  defaultValue: organism.zipcode,
                  register: 'zipcode',
                  required: true,
                  placeholder: 'ex : 31000',
                }}
                formMethods={{ register, errors }}
              />
              <Input
                data={{
                  type: 'string',
                  label: 'Ville',
                  defaultValue: organism.city,
                  register: 'city',
                  required: true,
                  placeholder: 'ex : Toulouse',
                }}
                formMethods={{ register, errors }}
              />
              <Input
                data={{
                  type: 'string',
                  label: 'Site internet',
                  defaultValue: organism.website,
                  register: 'website',
                  required: false,
                  placeholder: 'ex : watizat.org',
                }}
                formMethods={{ register, errors }}
              />
              <Input
                data={{
                  type: 'string',
                  label: 'Télephone principal',
                  defaultValue: organism.phone,
                  register: 'phone',
                  required: false,
                  placeholder: 'ex : 0516547845',
                  validate: validatePhoneNumber,
                }}
                formMethods={{ register, errors }}
              />
              <Input
                data={{
                  type: 'string',
                  label: 'Adresse email principale',
                  defaultValue: organism.mail,
                  register: 'mail',
                  required: false,
                  placeholder: 'ex : contact@watizat.org',
                  validate: validateEmail,
                }}
                formMethods={{ register, errors }}
              />
            </div>
          </div>
        </div>
        <BtnCloseValid
          isSaving={isSaving}
          handleCloseSlide={handleCloseSlide}
          handleValidation={handleSubmit(onSubmit)}
        />
      </form>
    </Slide>
  );
}
