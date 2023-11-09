import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Contact } from '../../@types/organism';
import { Inputs } from '../../@types/formInputs';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setAdminOrganism } from '../../store/reducers/admin';
import { validateEmail, validatePhoneNumber } from '../../utils/form/form';
import Slide from './Components/Slide';
import Header from './Components/Header';
import Input from './Components/Input';
import Select from './Components/Select';
import Textarea from './Components/Textarea';
import BtnCloseValid from './Components/BtnCloseValid';
import { editContact } from '../../store/reducers/crud';

interface Props {
  isOpenSlide: boolean;
  setIsOpenSlide: (open: boolean) => void;
  contact: Contact;
}

export default function SlideEditOrgaContact({
  isOpenSlide,
  setIsOpenSlide,
  contact,
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

  const id = useAppSelector((state) => state.admin.organism?.id as number);
  const isSaving = useAppSelector((state) => state.crud.isSaving);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const contactId = contact.id;
    await dispatch(editContact({ formData, contactId }));
    setIsOpenSlide(false);
    await dispatch(setAdminOrganism(id));
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
        <input type="text" hidden value={contact.id} {...register('id')} />
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
                  label: 'Prénom, nom, surnom, alias, collectif',
                  defaultValue: contact.name,
                  register: 'name',
                  required: true,
                  placeholder: 'ex : Irène Dresel',
                }}
                formMethods={{ register, errors }}
              />
              <Input
                data={{
                  type: 'text',
                  label: 'Fonction, service, commission',
                  defaultValue: contact.job,
                  register: 'job',
                  required: true,
                  placeholder: 'ex : Cheffe de service',
                }}
                formMethods={{ register, errors }}
              />
              <Input
                data={{
                  type: 'string',
                  label: 'Télephone principal',
                  defaultValue: contact.phone,
                  register: 'phone',
                  required: false,
                  placeholder: 'ex : 0561216760',
                  validate: validatePhoneNumber,
                }}
                formMethods={{ register, errors }}
              />
              <Input
                data={{
                  type: 'string',
                  label: 'Adresse email',
                  defaultValue: contact.mail,
                  register: 'mail',
                  required: false,
                  placeholder: 'ex : contact@acab.fr',
                  validate: validateEmail,
                }}
                formMethods={{ register, errors }}
              />
              <Select
                data={{
                  label: 'Antenne locale',
                  defaultValue: contact.visibility,
                  register: 'visibility',
                  required: false,
                }}
                formMethods={{ register, errors }}
              >
                <option value="false">Privé</option>
                <option value="true">Public</option>
              </Select>
              <Select
                data={{
                  label: 'A utiliser pour actualisation',
                  defaultValue: contact.actualisation,
                  register: 'actualisation',
                  required: false,
                }}
                formMethods={{ register, errors }}
              >
                <option value="false">Non</option>
                <option value="true">Oui</option>
              </Select>
              <Textarea
                data={{
                  type: 'string',
                  label: 'Commentaires',
                  defaultValue: contact.comment,
                  register: 'comment',
                  required: false,
                  placeholder: 'ex : Ne pas contacter les weekends',
                }}
                formMethods={{ register, errors }}
              />
            </div>
          </div>
        </div>
        <BtnCloseValid
          handleCloseSlide={handleCloseSlide}
          handleValidation={handleSubmit(onSubmit)}
        />
      </form>
    </Slide>
  );
}
