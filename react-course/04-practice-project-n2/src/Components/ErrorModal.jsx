import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{props.title}</h2>
        </div>
        <div className={styles.content}>{props.content}</div>
        <div className={styles.actions}>
          <button onClick={props.onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
