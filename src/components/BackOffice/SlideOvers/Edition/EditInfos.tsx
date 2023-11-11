import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../../../@types/formInputs';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setAdminOrganism } from '../../../../store/reducers/admin';
import Slide from '../components/Slide';
import Header from '../components/Header';
import Textarea from '../../components/Textarea';
import Checkbox from '../../components/ToggleEdit';
import BtnCloseValid from '../components/BtnCloseValid';
import { Organism } from '../../../../@types/organism';
import { editOrganismData } from '../../../../store/reducers/crud';
import SchedulesTable from '../../components/SchedulesTable';

interface Props {
  isOpenSlide: boolean;
  setIsOpenSlide: React.Dispatch<React.SetStateAction<boolean>>;
  organism: Organism;
}

export default function EditOrgaInfos({
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

  const days = useAppSelector((state) => state.organism.days);

  const organismId = useAppSelector(
    (state) => state.admin.organism?.id as number
  );
  const isSaving = useAppSelector((state) => state.crud.isSaving);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const organismTranslationId = organism.translations[0].id;
    await dispatch(
      editOrganismData({ formData, organismId, organismTranslationId })
    );
    setIsOpenSlide(false);
    await dispatch(setAdminOrganism(organismId));
  };

  const handleCloseSlide = () => {
    // reset(); // Réinitialise le formulaire à la fermeture de la slide
    setIsOpenSlide(false); // Ferme la slide
  };

  // Créer une copie du tableau avant de trier
  const orderedSchedule = organism.schedules.map((objet) => ({ ...objet }));
  // Trier les objets par le jour (day) en ordre croissant
  orderedSchedule.sort((a, b) => a.day - b.day);

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
          <div className="flex flex-col justify-between flex-1 px-4 pt-6 pb-5 space-y-3 sm text-center:px-6 ">
            <Checkbox
              data={{
                label: 'Accessibilité PSH / PMR',
                description: 'Le lieu est-il accessible au PMR ?',
                defaultValue: organism.pmr,
                register: 'pmr',
              }}
              formMethods={{ register }}
            />
            <Checkbox
              data={{
                label: 'Animaux',
                description: 'La structure accepte-t-elle les animaux ?',
                defaultValue: organism.animals,
                register: 'animals',
              }}
              formMethods={{ register }}
            />
            <Textarea
              data={{
                type: 'string',
                label: 'Infos & alertes',
                defaultValue: organism.translations[0].infos_alerte,
                register: 'info_alerte',
                required: false,
                placeholder: 'ex : Fermé pour les vacances de Noël',
              }}
              formMethods={{ register, errors }}
            />
            <Textarea
              data={{
                type: 'string',
                label: 'Description',
                defaultValue: organism.translations[0].description,
                register: 'description',
                required: false,
                placeholder: 'Décrire ici les missions de la structure',
              }}
              formMethods={{ register, errors }}
            />
            <SchedulesTable
              data={{
                schedules: organism.schedules,
                days,
                register: 'schedules',
              }}
              formMethods={{ register, errors }}
            />
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
