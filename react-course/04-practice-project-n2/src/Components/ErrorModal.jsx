import styles from "./ErrorModal.module.css";
import Button from "./UI/Button";

const ErrorModal = (props) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{props.title}</h2>
        </div>
        <div className={styles.content}>{props.content}</div>
        <div className={styles.actions}>
          <Button onClick={props.onClose} type={"button"}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
