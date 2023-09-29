import Card from "./UI/Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = () => {
  return (
    <Card>
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <div className={styles.header}>
            <h2>Error</h2>
          </div>
          <div className={styles.content}>Error!!</div>
          <div className={styles.actions}>
            <button>Close</button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ErrorModal;
