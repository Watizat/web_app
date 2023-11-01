import styles from './HomeCategory.module.scss';

function HomeCategorySkeleton() {
  return (
    <button type="button" className={styles.choiceRight_button__skeleton}>
      <div className="choiceRight-button__icon--skeleton" />
      <div className="text-button choiceRight-button__text--skeleton" />
    </button>
  );
}

export default HomeCategorySkeleton;
