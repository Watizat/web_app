import styles from './Container.module.scss';

interface PageProps {
  children: React.ReactNode;
}

function Container({ children }: PageProps) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
