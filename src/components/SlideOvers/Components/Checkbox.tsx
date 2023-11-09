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

export default function Checkbox({ data, formMethods }: Props) {
  const { register } = formMethods;

  return (
    <div className="flex flex-col ">
      <div className="block text-sm font-medium leading-6 text-gray-900">
        {data.label}
      </div>
      <div className="relative flex items-start">
        <div className="flex items-center h-6">
          <input
            type="checkbox"
            id={data.register}
            name={data.register}
            defaultChecked={data.defaultValue}
            {...register(data.register)}
            aria-describedby="candidates-description"
            className="w-4 h-4 border-gray-300 rounded text-sky-600 focus:ring-sky-600"
          />
        </div>
        <div className="ml-3 text-sm leading-6">
          <label htmlFor={data.register} className="font-medium text-gray-500">
            {data.description}
          </label>
        </div>
      </div>
    </div>
  );
}
