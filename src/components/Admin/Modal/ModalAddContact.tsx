import axios from 'axios';
import { useEffect } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import { axiosInstance } from '../../../utils/axios';
import './Modal.scss';

interface ModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalAddContact({ setIsActive }: ModalProps) {
  const id = useAppSelector((state) => state.admin.organism?.id);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    console.log(Object.fromEntries(form));
  }

  /*   async function createContact() {
    const response = await axiosInstance.get('/items/organisme');
    console.log(response.data);
    setIsActive(false);
  } */

  return (
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">Ajouter un contact</h1>
        <form className="modal-list" onSubmit={handleSubmit}>
          <input type="number" value={id} hidden name="organisme" />
          <div className="modal-case">
            <h4 className="modal-case__title">Nom</h4>
            <input className="modal-case__inputTxt" type="text" name="name" />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Fonction</h4>
            <input className="modal-case__inputTxt" type="text" name="job" />
          </div>
          <div className="modal-contact__modes">
            <div className="modal-case">
              <h4 className="modal-case__title">Adresse email</h4>
              <input
                className="modal-case__inputTxt modal-contact__mail"
                type="text"
                name="mail"
              />
            </div>
            <div className="modal-case">
              <h4 className="modal-case__title">Telephone</h4>
              <input
                className="modal-case__inputTxt"
                type="number"
                name="phone"
              />
            </div>
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Rôles</h4>
            <div className=" modal-contact__roles">
              <label className="modal-contact__private">
                Publicité du contact
                <select name="role">
                  <option value="false">Privé</option>
                  <option value="true">Public</option>
                </select>
              </label>
              <label className="modal-contact__actu">
                Contact pour actualisation
                <select name="actualisation">
                  <option value="false">Non</option>
                  <option value="true">Oui</option>
                </select>
              </label>
            </div>
          </div>
          <div className="modal-actions">
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

export default ModalAddContact;