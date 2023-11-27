import {
  UsersIcon,
  PencilSquareIcon,
  LanguageIcon,
  PrinterIcon,
  ArrowPathIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline';
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
    refLocalOnly: false,
  },
  {
    name: 'Traduction',
    href: '/admin/translation',
    descript: 'Espace traduction',
    icon: LanguageIcon,
    active: true,
    devOnly: false,
    refLocalOnly: false,
  },
  {
    name: 'Print',
    href: '/admin/print',
    descript: 'Export pour guides papier',
    icon: PrinterIcon,
    active: false,
    devOnly: false,
    refLocalOnly: false,
  },
  {
    name: 'Actualisation',
    href: '/admin/actualisation',
    descript: "Envoi des mails d'actualisation",
    icon: ArrowPathIcon,
    active: false,
    devOnly: false,
    refLocalOnly: false,
  },
  {
    name: 'Utilisateur·ice·s',
    href: '/admin/users',
    descript: 'Gestion des utilisateur·ice·s',
    icon: UsersIcon,
    active: true,
    devOnly: false,
    refLocalOnly: true,
  },
  {
    name: 'Back-end',
    href: 'https://api.watizat.app',
    descript: 'Back-end (Directus)',
    target: '_blank',
    icon: CircleStackIcon,
    active: true,
    devOnly: true,
    refLocalOnly: false,
  },
];

export default function Dashboard() {
  return (
    <BackColor>
      <main className="flex flex-col items-center justify-center flex-1 w-full h-full gap-y-10">
        <h2 className="text-2xl font-bold leading-9 tracking-tight text-center text-slate-700">
          Dashboard
        </h2>
        <ul className="flex flex-wrap items-center justify-center gap-10 p-10 md:9/12 xl:w-8/12 2xl:w-1/2">
          {navigation.map((item) => (
            <Button key={item.name} item={item} />
          ))}
        </ul>
      </main>
    </BackColor>
  );
}
