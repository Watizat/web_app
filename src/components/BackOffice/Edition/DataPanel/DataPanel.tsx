import { useAppSelector } from '../../../../hooks/redux';
import General from './General';
import Contacts from './Contacts';
import Informations from './Informations';
import Services from './Services';

export default function DataPanel() {
  const organism = useAppSelector((state) => state.admin.organism);

  if (organism === null) {
    return <span>Une erreur s&apos;est produite.</span>;
  }
  return (
    <section className="sticky flex flex-col flex-1 h-[calc(100vh-4rem)] max-h-screen gap-8 p-6 overflow-y-auto top-16 ">
      {organism !== null ? (
        <>
          <General />
          <Contacts contacts={organism.contacts} />
          <Informations />
          <Services />
        </>
      ) : (
        <div className="flex flex-col justify-center flex-1 h-full m-auto text-lg text-center item-center text-zinc-600">
          <p>Veuillez sélectionner un organisme dans la barre latérale</p>
        </div>
      )}
    </section>
  );
}
