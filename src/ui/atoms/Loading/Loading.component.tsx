import styles from './styles.module.scss';

function Loading() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>Loading...</div>
    </div>
  );
}
export default Loading;
