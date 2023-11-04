import { Link } from 'react-router-dom';
import { axiosInstance } from '../../../utils/axios';

interface Props {
  item: {
    name: string;
    descript: string;
    href: string;
    active: boolean;
    icon: React.ElementType;
    refLocalOnly: boolean;
    devOnly: boolean;
  };
}
const { data } = await axiosInstance.get('/users/me');

export default function Button({ item }: Props) {
  return (
    <Link
      key={item.name}
      to={item.href}
      className={`flex flex-col items-center justify-center m-auto text-center divide-y divide-gray-200 shadow h-52 bg-white/40 rounded-xl aspect-square select-none  ${
        item.active === false || // Si l'item est désactivé
        ((item.refLocalOnly || item.devOnly) && // Ou si l'item est refOnly ou devOnly
          data.data.role !== '4a30876c-cea0-455f-92d0-593212918aaf' && // et que l'utilisateur n'est pas ref-local
          data.data.role !== '53de6ec2-6d70-48c8-8532-61f96133f139') // o
          ? 'pointer-events-none'
          : 'hover:shadow-md hover:shadow-watizat-200 group hover:bg-white/60'
      }`}
    >
      <div className="flex flex-col items-center justify-center p-8">
        <div
          className={`flex items-center justify-center w-20 h-auto p-5 overflow-hidden rounded-full aspect-square ${
            item.active === false || // Si l'item est désactivé
            ((item.refLocalOnly || item.devOnly) && // Ou si l'item est refOnly ou devOnly
              data.data.role !== '4a30876c-cea0-455f-92d0-593212918aaf' && // et que l'utilisateur n'est pas ref-local
              data.data.role !== '53de6ec2-6d70-48c8-8532-61f96133f139') // o
              ? 'text-gray-300'
              : ' text-indigo-900/70 ring-watizat-200 group-hover:text-watizat-400 '
          }`}
        >
          <item.icon className="flex-shrink-0 mx-auto " />
        </div>
        <h3
          className={`mt-6 text-sm font-semibold  ${
            item.active === false || // Si l'item est désactivé
            ((item.refLocalOnly || item.devOnly) && // Ou si l'item est refOnly ou devOnly
              data.data.role !== '4a30876c-cea0-455f-92d0-593212918aaf' && // et que l'utilisateur n'est pas ref-local
              data.data.role !== '53de6ec2-6d70-48c8-8532-61f96133f139') // o
              ? 'text-gray-300'
              : ' text-indigo-900/70 group-hover:text-watizat-400'
          }`}
        >
          {item.name}
        </h3>
        <dl className="flex flex-col justify-between flex-grow mt-1">
          <dt className="sr-only">Description</dt>
          <dd
            className={`text-sm ${
              item.active === false || // Si l'item est désactivé
              ((item.refLocalOnly || item.devOnly) && // Ou si l'item est refOnly ou devOnly
                data.data.role !== '4a30876c-cea0-455f-92d0-593212918aaf' && // et que l'utilisateur n'est pas ref-local
                data.data.role !== '53de6ec2-6d70-48c8-8532-61f96133f139') // o
                ? 'text-gray-300'
                : ' text-slate-500 '
            }`}
          >
            {item.descript}
          </dd>
        </dl>
      </div>
    </Link>
  );
}
