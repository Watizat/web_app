import { useState, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../@types/formInputs';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  fetchAdminOrganisms,
  setAdminOrganism,
} from '../../store/reducers/admin';
import { addOrganism } from '../../store/reducers/crud';
import { validateEmail, validatePhoneNumber } from '../../utils/form/form';
import { DirectusUser } from '../../@types/user';
import Slide from './Components/Slide';
import Header from './Components/Header';
import Input from './Components/Input';
import Select from './Components/Select';
import BtnCloseValid from './Components/BtnCloseValid';
import { axiosInstance } from '../../utils/axios';
import Checkbox from './Components/Checkbox';
import Textarea from './Components/Textarea';
import SchedulesTable from './Components/SchedulesTable';

interface Props {
  isOpenSlide: boolean;
  setIsOpenSlide: (open: boolean) => void;
}

export default function NewOrganism({ isOpenSlide, setIsOpenSlide }: Props) {
  const dispatch = useAppDispatch();
  const [me, setMe] = useState<DirectusUser | null>(null);
  const isSaving = useAppSelector((state) => state.crud.isSaving);
  const isAdmin = useAppSelector((state) => state.user.isAdmin);

  const zones = useAppSelector((state) => state.admin.zones);
  const days = useAppSelector((state) => state.organism.days);
  const city = useAppSelector((state) => state.user.city as string);
  const {
    register, // Récupère les fonctions register
    handleSubmit, // Récupère la fonction handleSubmit
    formState: { errors }, // Récupère les erreurs
    reset, // Ajoutez la fonction reset pour réinitialiser le formulaire
  } = useForm<Inputs>();

  useEffect(() => {
    async function getUserInfos() {
      const { data } = await axiosInstance.get('/users/me');
      setMe(data.data);
    }
    getUserInfos();
  }, [dispatch]);

  if (!me) {
    return <div />;
  }

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const { payload: id } = await dispatch(addOrganism(formData));
    await dispatch(setAdminOrganism(id));
    setIsOpenSlide(false);
    await dispatch(fetchAdminOrganisms({ city }));
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
        <div className="flex-1 overflow-y-auto">
          <Header
            title="Créer un nouvel organisme"
            setIsOpenSlide={setIsOpenSlide}
          />
          <div className="flex flex-col justify-between flex-1">
            <div className="px-4 pt-6 pb-5 space-y-3 sm:px-6">
              {isAdmin && (
                <Select
                  data={{
                    label: 'Antenne locale',
                    defaultValue: me.zone,
                    register: 'zone_id',
                    required: true,
                  }}
                  formMethods={{ register, errors }}
                >
                  <option value="" disabled>
                    Selectionner une ville
                  </option>
                  {zones.map((zone) => (
                    <option key={zone.id} value={zone.id}>
                      {zone.name}
                    </option>
                  ))}
                </Select>
              )}
              <Input
                data={{
                  type: 'text',
                  label: "Nom de l'organisme",
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
                  register: 'city',
                  required: true,
                  placeholder: 'ex : Toulouse',
                }}
                formMethods={{ register, errors }}
              />
              <Input
                data={{
                  type: 'string',
                  label: 'Télephone principal',
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
                  register: 'mail',
                  required: false,
                  placeholder: 'ex : contact@watizat.org',
                  validate: validateEmail,
                }}
                formMethods={{ register, errors }}
              />
              <Checkbox
                data={{
                  label: 'Accessibilité PSH / PMR',
                  description: 'Le lieu est-il accessible au PMR ?',
                  register: 'pmr',
                }}
                formMethods={{ register }}
              />
              <Textarea
                data={{
                  type: 'string',
                  label: 'Description',
                  register: 'description',
                  required: true,
                  placeholder: 'Décrire ici les missions de la structure',
                }}
                formMethods={{ register, errors }}
              />
              <Textarea
                data={{
                  type: 'string',
                  label: 'Infos & alertes',
                  register: 'info_alerte',
                  required: false,
                  placeholder: 'ex : Fermé pour les vacances de Noël',
                }}
                formMethods={{ register, errors }}
              />
              <SchedulesTable
                data={{
                  days,
                  register: 'schedules',
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
