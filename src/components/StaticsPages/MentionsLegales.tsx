import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import styles from './StaticsPages.module.scss';

function MentionsLegales() {
  return (
    <div className={styles.mentionslegales}>
      <div>
        <p className={styles.title1}>Mentions légales</p>
        <p>
          <span className={styles.important}>Nom de l’association :&nbsp;</span>
          WATIZAT
        </p>
        <p>
          <p className={styles.title2}>Siège social : </p>74, rue des Martyrs
          75018 PARIS (cette adresse est une boîte aux lettres, nous n’y sommes
          pas présents)
        </p>
        <p>Association déclarée à but non lucratif (loi 1901) </p>
        <p>SIRET 87900454700037 </p>
        <br />
        <p>
          <span className={styles.important}>
            Directrices de publication :&nbsp;
          </span>
          Clémence Tondut, directrice de publication
        </p>
        <br />
        <p>
          <span className={styles.important}>
            Réalisation technique du site et hébergement :&nbsp;
          </span>
          <Link to="https://github.com/aliceout" target="_blank">
            Alice OsDel (lien github)
          </Link>
        </p>
        <p>
          L’utilisation du site watizat.app implique l’acceptation pleine et
          entière des conditions d’utilisation ci-après décrites. Elles sont
          susceptibles d’être modifiées ou complétées à tout moment.
        </p>
        <p className={styles.title2}>
          Législation française relative au droit d’accès au fichier informatisé
        </p>
        <p>
          Conformément à la loi française N· 78-17 du 6 janvier 1978 relative à
          l’informatique, aux fichiers et aux libertés (CNIL), tout
          utilisateur·ice ayant déposé sur ce site des informations directement
          ou indirectement nominatives, peut demander la communication des
          informations nominatives le concernant en s’adressant à :
        </p>
        <p>
          WATIZAT – 74 RUE DES MARTYRS – 75018 PARIS et les faire rectifier le
          cas échéant.
        </p>
        <p className={styles.title2}>Propriété intellectuelle </p>
        <p>
          Sauf mention contraire, la structure générale ainsi que les textes,
          images, logos, vidéos et tous les autres éléments composant le site
          sont la propriété exclusive de WATIZAT. Merci de contacter WATIZAT (
          <Link to="https://watizat.org/nous-contacter" target="_blank">
            formulaire de contact
          </Link>
          ) pour toute représentation totale ou partielle de ce site, quel que
          soit le procédé utilisé. La photo de la page d’accueil appartient à
          Perou.
        </p>
        <p className={styles.title2}>Décharge de responsabilité </p>
        <p>
          Malgré nos efforts pour nous assurer de la fiabilité des informations
          contenues sur ce site Internet, WATIZAT ne peut encourir aucune
          responsabilité du fait d’erreurs, d’omissions ou pour les résultats
          qui pourraient être obtenus par l’usage des informations, données ou
          contenus téléchargeables, qu’elles soient de notre fait ou du fait de
          tiers partenaires qui nous les fournissent. En conséquence,
          l’utilisateur·ice reconnaît utiliser ces informations sous sa
          responsabilité exclusive.
        </p>
        <p>
          Par ailleurs l’usage des liens hypertextes peut conduire vers d’autres
          serveurs sur lesquels WATIZAT n’a aucun contrôle et ne saurait être
          responsable.
        </p>
        <p className={styles.title2}>Contact </p>
        <p>
          Si vous souhaitez nous faire part d’une remarque, d’une critique ou
          d’une suggestion, vous pouvez nous adresser vos commentaires&nbsp;
          <Link to="https://feedback.watizat.app/" target="_blank">
            via cet outil de remonté de bugs et de suggestions
          </Link>{' '}
          ou directement{' '}
          <Link to="https://watizat.org/nous-contacter/" target="_blank">
            via le formualire de contact
          </Link>
        </p>
      </div>
    </div>
  );
}

export default MentionsLegales;
