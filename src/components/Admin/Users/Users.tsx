import './Users.scss';

function Users() {
  return (
    <div id="users">
      <table className="userstable">
        <thead>
          <tr>
            <th scope="col" className="userstable-checkbox txt-align-center">
              <input type="checkbox" className="checkbox" />{' '}
            </th>
            <th scope="col" className="txt-align-left hideForMenu">
              Prénom & nom
            </th>
            <th scope="col" className="txt-align-left hideForMenu">
              Antenne locale
            </th>
            <th scope="col" className="txt-align-center hideForMenu">
              Adresse email
            </th>
            <th scope="col" className="txt-align-center hideForMenu">
              Dernière connexion
            </th>
            <th scope="col" className="txt-align-center hideForMenu">
              Rôles
            </th>
            <th scope="col" className="txt-align-center hideForMenu">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
              <span className="role localref">ref-local</span>
              <span className="role admin">admin</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
              <span className="role localref">ref-local</span>
              <span className="role admin">admin</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
              <span className="role localref">ref-local</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Thierry Breton</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 mars 2022</td>
            <td className="userstable-roles">
              <span className="role admin">admin</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Paris</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
              <span className="role localref">ref-local</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
              <span className="role localref">ref-local</span>
              <span className="role admin">admin</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
              <span className="role localref">ref-local</span>
              <span className="role admin">admin</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
              <span className="role localref">ref-local</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role admin">admin</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
              <span className="role localref">ref-local</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
              <span className="role localref">ref-local</span>
              <span className="role admin">admin</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
              <span className="role localref">ref-local</span>
              <span className="role admin">admin</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
              <span className="role localref">ref-local</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role admin">admin</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
              <span className="role localref">ref-local</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
              <span className="role localref">ref-local</span>
              <span className="role admin">admin</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
              <span className="role localref">ref-local</span>
              <span className="role admin">admin</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
              <span className="role localref">ref-local</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role admin">admin</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
              <span className="role localref">ref-local</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
              <span className="role localref">ref-local</span>
              <span className="role admin">admin</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
              <span className="role localref">ref-local</span>
              <span className="role admin">admin</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
              <span className="role localref">ref-local</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role admin">admin</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
              <span className="role localref">ref-local</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
              <span className="role localref">ref-local</span>
              <span className="role admin">admin</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
              <span className="role localref">ref-local</span>
              <span className="role admin">admin</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
              <span className="role localref">ref-local</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role admin">admin</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
              <span className="role localref">ref-local</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="userstable-checkbox">
              <input type="checkbox" />{' '}
            </td>
            <td className="userstable-name">Jane Smith</td>
            <td className="userstable-antenne">Toulouse</td>
            <td className="userstable-email">j.smith@example.com</td>
            <td className="userstable-connexion">03 février 2023</td>
            <td className="userstable-roles">
              <span className="role editor">edition</span>
            </td>
            <td className="userstable-action">
              <button type="button">
                <i className="las la-ellipsis-h" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Users;
