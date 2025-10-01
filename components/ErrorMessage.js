import styles from "../styles/ErrorMessage.module.css";

/**
 * General error message component for displaying form errors
 */
const ErrorMessage = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className={styles.errorContainer} role="alert">
      <div className={styles.errorMessage}>
        <span className={styles.errorIcon}>⚠️</span>
        <span className={styles.errorText}>{message}</span>
        {onClose && (
          <button
            onClick={onClose}
            className={styles.closeButton}
            aria-label="Close error message"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;
