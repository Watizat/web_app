interface Props {
  data: {
    type: string;
    defaultValue?: string;
    register: string;
    placeholder: string;
    required?: boolean;
    // eslint-disable-next-line @typescript-eslint/ban-types
    validate?: Function;
  };
  formMethods: {
    // eslint-disable-next-line @typescript-eslint/ban-types
    register: Function; // Vous pouvez ajuster le type ici en fonction de vos besoins
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errors: any; // Ajustez le type des erreurs si nécessaire
  };
}

export default function MyComponent({ data, formMethods }: Props) {
  const { register, errors } = formMethods;

  return (
    <div>
      <label
        htmlFor={data.register}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {data.placeholder}
      </label>
      <div>
        <input
          type={data.type}
          placeholder={data.placeholder}
          {...(data.register &&
            data.required && {
              ...register(data.register, {
                required: 'Ce champ est requis',
              }),
            })}
          {...(data.register &&
            data.required &&
            data.validate && {
              ...register(data.register, {
                required: 'Ce champ est requis',
                validate: data.validate,
              }),
            })}
          {...(data.register &&
            !data.required &&
            !data.validate && {
              ...register(data.register, {
                required: 'Ce champ est requis',
              }),
            })}
          defaultValue={data.defaultValue} // Utilisez "as" pour le caster en string si nécessaire
          className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-watizat-600 sm:text-sm sm:leading-6"
        />
      </div>
      {data.required && (
        <small className="required">{errors[data.register]?.message}</small>
      )}
    </div>
  );
}
