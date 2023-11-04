import {
  UsersIcon,
  PencilSquareIcon,
  LanguageIcon,
  PrinterIcon,
  ArrowPathIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline';
import { useAppSelector } from '../../../hooks/redux';
import Button from './Button';
import BackColor from '../../Container/BackColor';

const navigation = [
  {
    name: 'Edition',
    href: '/admin/edition',
    descript: 'Edition des données',
    icon: PencilSquareIcon,
    active: true,
    devOnly: false,
    limitedForRefLocal: false,
  },
  {
    name: 'Traduction',
    href: '/admin/translate',
    descript: 'Espace traduction',
    icon: LanguageIcon,
    active: false,
    devOnly: false,
    limitedForRefLocal: false,
  },
  {
    name: 'Print',
    href: '/admin/print',
    descript: 'Export pour guides papier',
    icon: PrinterIcon,
    active: false,
    devOnly: false,
    limitedForRefLocal: false,
  },
  {
    name: 'Actualisation',
    href: '/admin/actualisation',
    descript: "Envoi des mails d'actualisation",
    icon: ArrowPathIcon,
    active: false,
    devOnly: false,
    limitedForRefLocal: false,
  },
  {
    name: 'Utilisateur·ice·s',
    href: '/admin/users',
    descript: 'Gestion des utilisateur·ice·s',
    icon: UsersIcon,
    active: true,
    devOnly: false,
    limitedForRefLocal: true,
  },
  {
    name: 'Back-end',
    href: 'https://watizat.lunalink.nl/',
    descript: 'Back-end (seulement pour les devs)',
    target: '_blank',
    icon: CircleStackIcon,
    active: true,
    devOnly: true,
    limitedForRefLocal: false,
  },
];

export default function Dashboard() {
  const isAdmin = useAppSelector((state) => state.user.isAdmin);

  return (
    <BackColor>
      <main className="flex flex-col items-center justify-center flex-1 w-full h-full gap-y-10">
        <h2 className="text-2xl font-bold leading-9 tracking-tight text-center text-slate-700">
          Dashboard
        </h2>
        <ul className="flex flex-wrap items-center justify-center gap-10 p-10 md:9/12 xl:w-8/12 2xl:w-1/2">
          {isAdmin
            ? navigation.map((item) => <Button key={item.name} item={item} />)
            : navigation
                .filter((item) => !item.devOnly) // Filtrer les éléments qui ont devOnly à false
                .map((item) => <Button key={item.name} item={item} />)}
        </ul>
      </main>
    </BackColor>
  );
}
