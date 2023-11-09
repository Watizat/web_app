import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { updateOrganismVisibility } from '../../../../store/reducers/crud';
import {
  formatPhoneNumber,
  addURLPrefix,
  removeURLPrefix,
} from '../../../../utils/format';

import SlideEditOrgaInfos from '../../../SlideOvers/EditOrgaGeneral';
import Card from './Components/Card';
import DeleteConfirmation from '../../../Modals/DeleteConfirmation';

export default function General() {
  const dispatch = useAppDispatch();
  const [isOpenSlide, setIsOpenSlide] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const organism = useAppSelector((state) => state.admin.organism);

  if (organism === null) {
    return <span>Une erreur s&apos;est produite.</span>;
  }

  const contactDetails = [
    ...(organism.website
      ? [
          {
            title: 'Site Web',
            type: 'url',
            label: removeURLPrefix(organism.website),
            value: addURLPrefix(organism.website),
          },
        ]
      : []),
    ...(organism.phone
      ? [
          {
            title: 'Téléphone',
            type: 'tel',
            value: formatPhoneNumber(organism.phone),
          },
        ]
      : []),
    ...(organism.mail
      ? [{ title: 'Adresse email', type: 'mailto', value: organism.mail }]
      : []),
  ];

  const handleHideOrganism = (organismId: number) => {
    // Utilisez l'action updateOrganismVisibility pour masquer l'organisme
    dispatch(updateOrganismVisibility({ organismId, isVisible: false }));
    // Remplacez fetchOrganisms par l'action appropriée

    setIsOpenModal(false);
  };

  // Fonction pour gérer l'ouverture du Slide pour la modification d'informations
  const handleModifierInfos = () => {
    setIsOpenSlide(true);

    // Autres actions spécifiques à "Modifier infos" ici
  };

  // Fonction pour gérer l'ouverture du Slide pour l'archivage de l'organisme
  const handleArchiverOrganisme = () => {
    setIsOpenModal(true);
    // Autres actions spécifiques à "Archiver organisme" ici
  };

  const menuChoices = [
    {
      title: 'Modifier infos',
      onClick: () => handleModifierInfos(),
    },
    {
      title: 'Archiver organisme',
      onClick: () => handleArchiverOrganisme(),
    },
  ];

  if (isOpenSlide) {
    return (
      <SlideEditOrgaInfos
        isOpenSlide={isOpenSlide}
        setIsOpenSlide={setIsOpenSlide}
        organism={organism}
      />
    );
  }

  if (isOpenModal) {
    return (
      <DeleteConfirmation
        setIsOpenModal={setIsOpenModal}
        isOpenModal={isOpenModal}
        handleDeleteConfirm={() => handleHideOrganism(organism.id)}
        title="Archiver l'organisme"
        message="Êtes-vous sûr de vouloir archiver l'organisme ? Cette action peut être annulée à tout moment"
        deleteBtnText="Confirmer ma demande"
      />
    );
  }

  return (
    <Card
      title={organism.name}
      address={`${organism.address}, ${organism.zipcode} ${organism.city}`}
      srMessage="Information principales de l'organisme"
      headCard
      menuChoices={menuChoices}
    >
      {contactDetails.length > 0 && (
        <div
          className={`grid border-t rounded-b-lg border-gray-200/60 divide-y divide-gray-200 bg-gray-50 grid-cols-${contactDetails.length} md:divide-x md:divide-y-0`}
        >
          {contactDetails.map((item) => (
            <Link
              key={item.title}
              to={
                item.type === 'url' ? item.value : `${item.type}:${item.value}`
              }
              {...(item.type === 'url' && { target: '_blank' })}
              className={`px-6 py-4 text-xs font-medium col-span-1${
                contactDetails.length === 1
                  ? 'text-left w-full flex-1'
                  : ' text-center'
              }`}
            >
              <p>
                <span className="text-slate-900">{item.title}</span> :{' '}
                <span className="text-gray-600">
                  {item.label ?? item.value}
                </span>
              </p>
            </Link>
          ))}
        </div>
      )}
    </Card>
  );
}
