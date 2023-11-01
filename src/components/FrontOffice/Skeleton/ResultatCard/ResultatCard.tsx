import styles from './ResultatCard.module.scss';
import './ResultatCard.scss';

import HomeCategorySkeleton from '../HomeCategory/HomeCategory';

function ResultatsCardSkeleton() {
  return (
    <div className={styles.resultCardSkeleton}>
      <div className={styles.left}>
        <div className={styles.left__upper}>
          <div className={styles.left_upper__positionId}>
            <p>&nbsp;</p>
          </div>
          <div className={styles.left_upper__organizationInfos}>
            <div className={styles.left_upper__organizationInfos___title}>
              &nbsp;
            </div>
            <span className={styles.left_upper__organizationInfos___address}>
              &nbsp;
            </span>
          </div>
        </div>
        <div className={styles.left_upper__description}>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className={styles.left_lower}>
          <div className={styles.left_lower__moreInfos}>&nbsp;</div>
          <div className={styles.left_lower__categories}>
            <HomeCategorySkeleton />
            <HomeCategorySkeleton />
            <HomeCategorySkeleton />
            <HomeCategorySkeleton />
          </div>
        </div>
        <span>&nbsp;</span>
      </div>
      <div className={styles.right}>
        <div className={styles.right_btn}>&nbsp;</div>
        <div className={styles.right_btn}>&nbsp;</div>
      </div>
    </div>
  );
}

export default ResultatsCardSkeleton;
