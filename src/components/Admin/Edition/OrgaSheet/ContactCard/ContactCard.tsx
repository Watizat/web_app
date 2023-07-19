import './ContactCard.scss';

function ContactCard() {
  return (
    <div className="orgaSheet-case orgaSheet-contact">
      <div className="orgaSheet-contact__header">
        <div className="orgaSheet-contact__subheader">
          <h5>Contact</h5>
          <div className="contacts-roles">
            <span className="contacts-roles__role contacts-roles__prive">
              privé
            </span>
            <span className="contacts-roles__role contacts-roles__public">
              public
            </span>
            <span className="contacts-roles__role contacts-roles__actualisation">
              actualisation
            </span>
          </div>
        </div>
        <button type="button" className="orgaSheet-edition__menu">
          <i className="las la-ellipsis-h" />
        </button>
      </div>
      <div className="orgaSheet-contact__details">
        <div className="orgaSheet-contact__infos">
          <p className="orgaSheet-contact__nom">Michel Larem</p>
          <p className="orgaSheet-contact__fonction">Assistant social</p>
        </div>
        <div className="orgaSheet-contact__name">
          <p className="orgaSheet-contact__mail">06 25 65 45 78</p>
          <p className="orgaSheet-contact__tel">laprem@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;