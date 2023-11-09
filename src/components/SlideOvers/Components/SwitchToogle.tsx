import { useState } from 'react';
import { Switch } from '@headlessui/react';

interface Props {
  data: {
    label: string;
    description: string;
    defaultValue: boolean;
    register: string;
  };
  formMethods: {
    // eslint-disable-next-line @typescript-eslint/ban-types
    register: Function; // Vous pouvez ajuster le type ici en fonction de vos besoins
  };
}
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function SwitchToogle({ data, formMethods }: Props) {
  const { register } = formMethods;
  const [enabled, setEnabled] = useState(() => data.defaultValue);

  // Utilise la fonction onChange de react-hook-form pour mettre à jour la valeur dans le registre
  const handleSwitchChange = (value: boolean) => {
    register(data.register, { value }); // Met à jour la valeur dans le registre

    setEnabled(value);
  };

  return (
    <div className="flex flex-col">
      <p className="block text-sm font-medium leading-6 text-gray-900">
        {data.label}
      </p>
      <Switch.Group as="div" className="flex items-center select-none">
        <Switch
          checked={enabled}
          onChange={handleSwitchChange}
          // {...register(data.register)}
          className="relative inline-flex items-center justify-center flex-shrink-0 w-10 h-5 rounded-full cursor-pointer group focus:outline-none "
        >
          <span className="sr-only">{data.label}</span>
          <span
            aria-hidden="true"
            className="absolute w-full h-full bg-white rounded-md pointer-events-none"
          />
          <span
            aria-hidden="true"
            className={classNames(
              enabled ? 'bg-indigo-600' : 'bg-gray-200',
              'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out'
            )}
          />
          <span
            aria-hidden="true"
            className={classNames(
              enabled ? 'translate-x-5' : 'translate-x-0',
              'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out'
            )}
          />
        </Switch>
        <Switch.Label as="span" className="ml-3 text-sm">
          <span className="font-medium text-gray-700/80">
            {data.description}
          </span>
        </Switch.Label>
      </Switch.Group>
    </div>
  );
}
