import { Link, useLocation } from 'react-router-dom';
import { axiosInstance } from '../../../utils/axios';

interface Props {
  item: {
    name: string;
    href: string;
    icon: React.ElementType;
    active: boolean;
    onclick: () => void;
    limitedForRefLocal: boolean;
  };
}
const { data } = await axiosInstance.get('/users/me');

export default function LinkLarge({ item }: Props) {
  const { pathname } = useLocation();

  return (
    <li key={item.name}>
      <Link
        to={item.href}
        onClick={item.onclick}
        className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold py-3 ${
          // eslint-disable-next-line no-nested-ternary
          item.active === false || // Si len lien est désactivé
          (item.limitedForRefLocal && // Ou si le lien est maqué comme limité aux refs locaux
            data.data.role !== '4a30876c-cea0-455f-92d0-593212918aaf' && // et que l'user n'est ni admin ni ref-local
            data.data.role !== '53de6ec2-6d70-48c8-8532-61f96133f139')
            ? ' text-watizat-100/40 pointer-events-none'
            : pathname === item.href
            ? ' text-white bg-watizat-400/70'
            : 'text-watizat-100 hover:text-white hover:bg-watizat-600'
        }`}
      >
        <item.icon
          className={`h-6 w-6 shrink-0  ${
            // eslint-disable-next-line no-nested-ternary
            item.active === false || // Si len lien est désactivé
            (item.limitedForRefLocal && // Ou si le lien est maqué comme limité aux refs locaux
              data.data.role !== '4a30876c-cea0-455f-92d0-593212918aaf' && // et que l'user n'est ni admin ni ref-local
              data.data.role !== '53de6ec2-6d70-48c8-8532-61f96133f139')
              ? ' text-watizat-100/40 pointer-events-none'
              : pathname === item.href
              ? ' text-white '
              : 'text-watizat-100 hover:text-white hover:bg-watizat-600'
          } `}
          aria-hidden="true"
        />
        {item.name}
      </Link>
    </li>
  );
}
