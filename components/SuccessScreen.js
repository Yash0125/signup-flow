import styles from "../styles/SuccessScreen.module.css";

/**
 * Success screen displayed after successful sign-up
 */
const SuccessScreen = ({ userData, onStartOver }) => {
  return (
    <div className={styles.successContainer}>
      <div className={styles.successCard}>
        <div className={styles.successIcon}>✅</div>

        <h1 className={styles.successTitle}>Welcome aboard!</h1>

        <p className={styles.successMessage}>
          Your account has been created successfully.
        </p>

        <div className={styles.userInfo}>
          <h2>Account Details:</h2>
          <div className={styles.infoItem}>
            <strong>Name:</strong> {userData.name}
          </div>
          <div className={styles.infoItem}>
            <strong>Email:</strong> {userData.email}
          </div>
          <div className={styles.infoItem}>
            <strong>Account ID:</strong> {userData.id}
          </div>
          <div className={styles.infoItem}>
            <strong>Created:</strong>{" "}
            {new Date(userData.createdAt).toLocaleDateString()}
          </div>
        </div>

        <div className={styles.actions}>
          <button onClick={onStartOver} className={styles.startOverButton}>
            Create Another Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
