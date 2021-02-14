import styles from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.circle}></div>
    </div>
  );
};
export default Loader;
