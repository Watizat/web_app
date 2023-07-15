import Header from '../Header/Header';
import './Users.scss';

function Users() {
  return (
    <main id="bo-main">
      <Header />
      <div id="users">
        <table className="userstable">
          <thead>
            <tr>
              <th scope="col" className="userstable-checkbox tbl-center">
                <input type="checkbox" className="checkbox" />{' '}
              </th>
              <th scope="col" className="tbl-left">
                Prénom & nom
              </th>
              <th scope="col" className="tbl-left">
                Antenne locale
              </th>
              <th scope="col" className="tbl-center">
                Adresse email
              </th>
              <th scope="col" className="tbl-center">
                Dernière connexion
              </th>
              <th scope="col" className="tbl-center">
                Rôles
              </th>
              <th scope="col" className="tbl-center">
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
                <span className="role localref">Ref-local</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
                <span className="role localref">Ref-local</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
                <span className="role localref">Ref-local</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
                <span className="role localref">Ref-local</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
                <span className="role localref">Ref-local</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
                <span className="role localref">Ref-local</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
                <span className="role localref">Ref-local</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
                <span className="role localref">Ref-local</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
                <span className="role localref">Ref-local</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
                <span className="role localref">Ref-local</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
                <span className="role localref">Ref-local</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
                <span className="role localref">Ref-local</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
                <span className="role localref">Ref-local</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
                <span className="role localref">Ref-local</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
                <span className="role localref">Ref-local</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
                <span className="role localref">Ref-local</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
                <span className="role localref">Ref-local</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
                <span className="role localref">Ref-local</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
                <span className="role localref">Ref-local</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
                <span className="role localref">Ref-local</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
                <span className="role localref">Ref-local</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
                <span className="role localref">Ref-local</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
                <span className="role localref">Ref-local</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
                <span className="role localref">Ref-local</span>
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
              <td className="userstable-antenne">New York</td>
              <td className="userstable-email">j.smith@example.com</td>
              <td className="userstable-connexion">03 fev. 23</td>
              <td className="userstable-roles">
                <span className="role editor">editor</span>
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
    </main>
  );
}

export default Users;
