import './Login.scss';

function RecoverPassword() {
  return (
    <div className="login">
      <h1>Réinitialisation du mot de passe</h1>
      <form className="login-form">
        <input type="text" placeholder="Nouveau mot de passe" />
        <input type="text" placeholder="Confirmer le mot de passe" />
        <button type="button">Confirmer</button>
      </form>
    </div>
  );
}

export default RecoverPassword;
