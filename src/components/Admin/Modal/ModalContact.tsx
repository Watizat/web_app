import { Contact } from '../../../@types/organism';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setAdminOrganism } from '../../../store/reducers/admin';
import { axiosInstance } from '../../../utils/axios';
import './Modal.scss';

interface ModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  contact: Contact;
}

function ModalContact({ contact, setIsActive }: ModalProps) {
  const id = useAppSelector((state) => state.admin.organism?.id as number);
  const dispatch = useAppDispatch();

  async function handleDelete() {
    const response = await axiosInstance.delete(`/items/contact/${contact.id}`);
    dispatch(setAdminOrganism(id));
    setIsActive(false);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form);
    try {
      const response = await axiosInstance.patch(
        `/items/contact/${contact.id}`,
        {
          ...data,
          service: null,
        }
      );
      if (response.status === 200) {
        dispatch(setAdminOrganism(id));
      }
    } catch (error) {
      console.log(error);
    }
    setIsActive(false);
  }

  return (
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">Ajouter un contact</h1>
        <form className="modal-list" onSubmit={handleSubmit}>
          <div className="modal-case">
            <h4 className="modal-case__title">Prénom</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              defaultValue={contact.firstname}
              name="firstname"
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Nom</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              defaultValue={contact.lastname}
              name="lastname"
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Fonction</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              defaultValue={contact.job}
              name="job"
            />
          </div>
          <div className="modal-contact__modes">
            <div className="modal-case">
              <h4 className="modal-case__title">Adresse email</h4>
              <input
                className="modal-case__inputTxt modal-contact__mail"
                type="text"
                defaultValue={contact.mail}
                name="mail"
              />
            </div>
            <div className="modal-case">
              <h4 className="modal-case__title">Telephone</h4>
              <input
                className="modal-case__inputTxt"
                type="number"
                defaultValue={contact.phone}
                name="phone"
              />
            </div>
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Rôles</h4>
            <div className=" modal-contact__roles">
              <label className="modal-contact__private">
                Publicité du contact
                <select
                  name="visibility"
                  defaultValue={`${contact.visibility}`}
                >
                  <option value="false">Privé</option>
                  <option value="true">Public</option>
                </select>
              </label>
              <label className="modal-contact__actu">
                Contact pour actualisation
                <select
                  name="actualisation"
                  defaultValue={`${contact.actualisation}`}
                >
                  <option value="false">Non</option>
                  <option value="true">Oui</option>
                </select>
              </label>
            </div>
          </div>
          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-danger-fill btn-flat modal-actions__close"
              onClick={handleDelete}
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

export default ModalContact;
