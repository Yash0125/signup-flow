import { useState } from "react";
import styles from "../styles/FormInput.module.css";

/**
 * Reusable form input component with label and error display
 * Supports password visibility toggle for password fields and textarea
 */
const FormInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  placeholder,
  required = false,
  rows = 3, // For textarea
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === "password";
  const isTextarea = type === "textarea";
  const inputType = isPasswordField && showPassword ? "text" : type;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name} className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      <div className={styles.inputWrapper}>
        {isTextarea ? (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            className={`${styles.input} ${styles.textarea} ${
              error ? styles.inputError : ""
            }`}
            aria-describedby={error ? `${name}-error` : undefined}
            aria-invalid={error ? "true" : "false"}
          />
        ) : (
          <input
            type={inputType}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${styles.input} ${error ? styles.inputError : ""} ${
              isPasswordField ? styles.passwordInput : ""
            }`}
            aria-describedby={error ? `${name}-error` : undefined}
            aria-invalid={error ? "true" : "false"}
          />
        )}
        {isPasswordField && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={styles.passwordToggle}
            aria-label={showPassword ? "Hide password" : "Show password"}
            tabIndex={0}
          >
            {showPassword ? (
              <svg
                className={styles.eyeIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                />
              </svg>
            ) : (
              <svg
                className={styles.eyeIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        )}
      </div>
      {error && (
        <div id={`${name}-error`} className={styles.errorText} role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default FormInput;
