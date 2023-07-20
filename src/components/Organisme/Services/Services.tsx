import { useState } from 'react';
import classNames from 'classnames';
import './Services.scss';

function Services() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpenSettings() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="organisme-services">
      <h3>Services proposés</h3>
      <div className="organisme-services-contentcards">
        <div className="organisme-services-contentcards--cards">
          <article>
            <button
              className={classNames(
                'organisme-services-contentcards--cards-header',
                {
                  'organisme-services-contentcards--cards-header--open': isOpen,
                }
              )}
              type="button"
              onClick={handleOpenSettings}
            >
              <h4>
                <i className="las la-utensils" /> Repas{' '}
                <i
                  className={
                    isOpen ? 'las la-minus-circle' : 'las la-plus-circle'
                  }
                />
              </h4>
            </button>

            <div
              className={classNames(
                'organisme-services-contentcards--cards-content',
                { 'is-visible': isOpen }
              )}
            >
              <table>
                <tr>
                  <td className="organisme-services-contentcards--cards-content-scheduleday">
                    Lundi
                  </td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td className="organisme-services-contentcards--cards-content-scheduleday">
                    Mardi
                  </td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td className="organisme-services-contentcards--cards-content-scheduleday">
                    Mercredi
                  </td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td className="organisme-services-contentcards--cards-content-scheduleday">
                    Jeudi
                  </td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td className="organisme-services-contentcards--cards-content-scheduleday">
                    Vendredi
                  </td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td className="organisme-services-contentcards--cards-content-scheduleday">
                    Samedi
                  </td>
                  <td>
                    <span>Fermé</span>
                  </td>
                </tr>
                <tr>
                  <td className="organisme-services-contentcards--cards-content-scheduleday">
                    Dimanche
                  </td>
                  <td>
                    <span>Fermé</span>
                  </td>
                </tr>
              </table>
            </div>
          </article>
        </div>
        <div className="organisme-services-contentcards--cards">
          <article>
            <button
              className="organisme-services-contentcards--cards-header"
              type="button"
              onClick={handleOpenSettings}
            >
              <h4>
                <i className="las la-utensils" /> Repas{' '}
                <i
                  className={
                    isOpen ? 'las la-minus-circle' : 'las la-plus-circle'
                  }
                />
              </h4>
            </button>

            <div
              className={classNames(
                'organisme-services-contentcards--cards-content',
                {
                  'is-visible': isOpen,
                }
              )}
            >
              <table>
                <tr>
                  <td>Lundi</td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td>Mardi</td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td>Mercredi</td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td>Jeudi</td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td>Vendredi</td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td>Samedi</td>
                  <td>
                    <span>Fermé</span>
                  </td>
                </tr>
                <tr>
                  <td>Dimanche</td>
                  <td>
                    <span>Fermé</span>
                  </td>
                </tr>
              </table>
            </div>
          </article>
        </div>
        <div className="organisme-services-contentcards--cards">
          <article>
            <button
              className="organisme-services-contentcards--cards-header"
              type="button"
              onClick={handleOpenSettings}
            >
              <h4>
                <i className="las la-utensils" /> Repas{' '}
                <i
                  className={
                    isOpen ? 'las la-minus-circle' : 'las la-plus-circle'
                  }
                />
              </h4>
            </button>

            <div
              className={classNames(
                'organisme-services-contentcards--cards-content',
                {
                  'is-visible': isOpen,
                }
              )}
            >
              <table>
                <tr>
                  <td>Lundi</td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td>Mardi</td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td>Mercredi</td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td>Jeudi</td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td>Vendredi</td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td>Samedi</td>
                  <td>
                    <span>Fermé</span>
                  </td>
                </tr>
                <tr>
                  <td>Dimanche</td>
                  <td>
                    <span>Fermé</span>
                  </td>
                </tr>
              </table>
            </div>
          </article>
        </div>
        <div className="organisme-services-contentcards--cards">
          <article>
            <button
              className="organisme-services-contentcards--cards-header"
              type="button"
              onClick={handleOpenSettings}
            >
              <h4>
                <i className="las la-utensils" /> Repas{' '}
                <i
                  className={
                    isOpen ? 'las la-minus-circle' : 'las la-plus-circle'
                  }
                />
              </h4>
            </button>

            <div
              className={classNames(
                'organisme-services-contentcards--cards-content',
                {
                  'is-visible': isOpen,
                }
              )}
            >
              <table>
                <tr>
                  <td>Lundi</td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td>Mardi</td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td>Mercredi</td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td>Jeudi</td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td>Vendredi</td>
                  <td>
                    <span>9h-12h</span>/<span>14h-16h</span>
                  </td>
                </tr>
                <tr>
                  <td>Samedi</td>
                  <td>
                    <span>Fermé</span>
                  </td>
                </tr>
                <tr>
                  <td>Dimanche</td>
                  <td>
                    <span>Fermé</span>
                  </td>
                </tr>
              </table>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Services;
