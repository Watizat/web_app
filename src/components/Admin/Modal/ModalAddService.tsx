import { useAppSelector } from '../../../hooks/redux';
import { axiosInstance } from '../../../utils/axios';
import './Modal.scss';

interface ServiceModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function setData(data: { [k: string]: FormDataEntryValue }) {
  const myArray = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < 8; i++) {
    myArray.push({
      day: i,
      opentime_am: data[`schedule_openam_${i}`]
        ? String(data[`schedule_openam_${i}`]).replace('h', ':')
        : null,
      closetime_am: data[`schedule_closeam_${i}`]
        ? String(data[`schedule_closeam_${i}`]).replace('h', ':')
        : null,
      opentime_pm: data[`schedule_openpm_${i}`]
        ? String(data[`schedule_openpm_${i}`]).replace('h', ':')
        : null,
      closetime_pm: data[`schedule_closepm_${i}`]
        ? String(data[`schedule_closepm_${i}`]).replace('h', ':')
        : null,
    });
  }
  return {
    translations: {
      name: data.name,
      description: data.description,
      infos_alerte: data.infos_alerte,
    },
    horaire: myArray,
    categorie_id: data.categorie_id,
    organisme_id: data.organisme_id,
  };
}

function ModalAddService({ setIsActive }: ServiceModalProps) {
  const categoriesList = useAppSelector((state) => state.organism.categories);
  const organismId = useAppSelector((state) => state.admin.organism?.id);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = Object.fromEntries(new FormData(event.currentTarget));
    const data = setData(form);
    console.log(data.translations);
    try {
      const response = await axiosInstance.post(`/items/service`, {
        categorie_id: data.categorie_id,
        organisme_id: data.organisme_id,
      });
      const response1 = await axiosInstance.post(`/items/service_translation`, {
        ...data.translations,
        langue_id: 1,
        service: response.data.data.id,
      });
      console.log(response1);
      const test = await Promise.all(
        data.horaire.map((horaire) =>
          axiosInstance.post(`/items/schedule`, {
            ...horaire,
            service_id: response.data.data,
            organisme_id: null,
          })
        )
      );
      console.log(test);
    } catch (error) {
      console.log(error);
    }
    setIsActive(false);
  };

  return (
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">Ajouter un service</h1>
        <form className="modal-list" onSubmit={handleSubmit}>
          <input
            type="number"
            name="organisme_id"
            hidden
            defaultValue={organismId}
          />
          <div className="modal-case">
            <h4 className="modal-case__title">Catégorie</h4>

            <label className="modal-contact__actu">
              Catégorie du service
              <select
                name="categorie_id"
                defaultValue={categoriesList[0].translations[0].name}
              >
                {categoriesList.map((category) => (
                  <option
                    key={category.translations[0].name}
                    value={category.id}
                  >
                    {category.translations[0].name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Nom du service</h4>
            <input className="modal-case__inputTxt" type="text" name="name" />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Type de service·s proposé·s</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              name="description"
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Horaires</h4>
            <table className="modal-data__hours">
              <thead className="modal-data__hoursHead">
                <tr>
                  <td>Jours</td>
                  <td colSpan={3}>Matin</td>
                  <td />
                  <td colSpan={3}>Aprés-midi</td>
                </tr>
              </thead>
              <tbody>
                {[
                  'Lundi',
                  'Mardi',
                  'Mercredi',
                  'Jeudi',
                  'vendredi',
                  'Samedi',
                  'Dimanche',
                ].map((i, index) => (
                  <tr key={i} className="modal-data__hoursLine">
                    <td className="modal-data__hoursDay">
                      <span>{i}</span>
                    </td>
                    <td className="modal-data__hoursHour">
                      <input
                        className="modal-data__hoursInput"
                        name={`schedule_openam_${index + 1}`}
                      />
                    </td>
                    <td className="modal-data__hoursSeparater">-</td>
                    <td className="modal-data__hoursTd">
                      <input
                        className="modal-data__hoursInput"
                        name={`schedule_closeam_${index + 1}`}
                      />
                    </td>
                    <td className="modal-data__hoursSeparater">/</td>
                    <td className="modal-data__hoursTd">
                      <input
                        className="modal-data__hoursInput"
                        name={`schedule_openpm_${index + 1}`}
                      />
                    </td>
                    <td className="modal-data__hoursSeparater">-</td>
                    <td className="modal-data__hoursTd">
                      <input
                        className="modal-data__hoursInput"
                        name={`schedule_closepm_${index + 1}`}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Info s & alertes</h4>
            <textarea className="modal-case__textarea" name="infos_alerte" />
          </div>
          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-danger-fill btn-flat modal-actions__close"
            >
              Supprimer
            </button>
            <button
              type="button"
              className="btn btn-info-fill btn-flat modal-actions__close"
              onClick={() => setIsActive(false)}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="btn btn-sucess-fill btn-flat modal-actions__save"
            >
              Sauvegarder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalAddService;
