import { useAppSelector } from '../../../../hooks/redux';
import Contacts from './Contacts/Contacts';
import Data from './Data/Data';
import Infos from './Infos/Infos';
import styles from './OrgaSheet.module.scss';
import Services from './Services/Services';

function OrgaSheet() {
  const organism = useAppSelector((state) => state.admin.organism);

  if (organism === null) {
    return (
      <div className="flex flex-col w-full gap-8 sticky top-16 overflow-y-scroll h-full p-10 flex-1;">
        Veuillez sélectionner un organisme dans la barre latérale
      </div>
    );
  }

  return (
    <article className="flex flex-col gap-8 sticky top-16 overflow-y-scroll h-full p-10 flex-1 max-h-screen overflow-y-auto;">
      <Infos />
      <Contacts contacts={organism.contacts} />
      <Data />
      <Services />
    </article>
  );
}

export default OrgaSheet;
