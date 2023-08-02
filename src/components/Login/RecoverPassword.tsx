import './Login.scss';

function RecoverPassword() {
  return (
    <div className="login">
      <h1>Réinitialisation du mot de passe</h1>
      <form className="login-form">
        <fieldset>
          <legend>Nouveau mot de passe</legend>
          <input type="text" placeholder="Nouveau mot de passe" />
        </fieldset>

        <fieldset>
          <legend>Confirmer le mot de pass</legend>
          <input type="text" placeholder="Confirmer le mot de passe" />
        </fieldset>
        <butto
          className="btn btn-flat btn-primary btn-slowRounded "
          n
          type="button"
        >
          Confirmer
        </butto>
      </form>
    </div>
  );
}

export default RecoverPassword;
