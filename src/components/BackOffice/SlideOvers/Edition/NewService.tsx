import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../../../@types/formInputs';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setAdminOrganism } from '../../../../store/reducers/admin';
import { addService } from '../../../../store/reducers/crud';

import Slide from '../Components/Slide';
import Header from '../Components/Header';
import Input from '../Components/Input';
import Select from '../Components/Select';
import BtnCloseValid from '../Components/BtnCloseValid';
import Textarea from '../Components/Textarea';
import SchedulesTable from '../Components/SchedulesTable';

interface Props {
  isOpenSlide: boolean;
  setIsOpenSlide: (open: boolean) => void;
}

export default function NewOrganism({ isOpenSlide, setIsOpenSlide }: Props) {
  const {
    register, // Récupère les fonctions register
    handleSubmit, // Récupère la fonction handleSubmit
    formState: { errors }, // Récupère les erreurs
    reset, // Ajoutez la fonction reset pour réinitialiser le formulaire
  } = useForm<Inputs>();

  const dispatch = useAppDispatch();
  const categoriesList = useAppSelector((state) => state.organism.categories);
  const organismId = useAppSelector(
    (state) => state.admin.organism?.id as number
  );

  const isSaving = useAppSelector((state) => state.crud.isSaving);
  const days = useAppSelector((state) => state.organism.days);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    await dispatch(addService(formData));
    setIsOpenSlide(false);
    await dispatch(setAdminOrganism(organismId));
    reset();
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
            title="Créer un nouveau service"
            setIsOpenSlide={setIsOpenSlide}
          />
          <div className="flex flex-col justify-between flex-1">
            <input
              type="number"
              defaultValue={organismId}
              hidden
              {...register('organisme_id')}
            />
            <div className="px-4 pt-6 pb-5 space-y-3 sm:px-6">
              <Select
                data={{
                  label: 'Catégorie du service',
                  register: 'categorie_id',
                  required: true,
                }}
                formMethods={{ register, errors }}
              >
                <option disabled>Selectionnez une catégorie</option>
                {categoriesList.map((category) => (
                  <option
                    key={category.translations[0].name}
                    value={`${category.id}`}
                  >
                    {category.translations[0].name}
                  </option>
                ))}
              </Select>
              <Input
                data={{
                  type: 'string',
                  label: 'Nom du service',
                  register: 'name',
                  required: true,
                  placeholder: 'Nom du service proposé',
                }}
                formMethods={{ register, errors }}
              />
              <Textarea
                data={{
                  type: 'string',
                  label: 'Description',
                  register: 'description',
                  required: false,
                  placeholder: 'Décrire ici les missions du service',
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
