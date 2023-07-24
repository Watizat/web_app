import { useState } from 'react';
import classNames from 'classnames';
import './Card.scss';

function Card() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpenSettings() {
    setIsOpen(!isOpen);
  }
  return (
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
    </div>
  );
}

export default Card;
