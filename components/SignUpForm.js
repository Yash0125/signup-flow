import { useState } from "react";
import FormInput from "./FormInput";
import ErrorMessage from "./ErrorMessage";
import SuccessScreen from "./SuccessScreen";
import {
  validateName,
  validateEmail,
  validatePassword,
  validatePasswordMatch,
  validateTerms,
} from "../utils/validation";
import { mockSignUp } from "../utils/mockApi";
import styles from "../styles/SignUpForm.module.css";

/**
 * Main sign-up form component
 */
const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [successData, setSuccessData] = useState(null);

  /**
   * Handle input changes and clear related errors
   */
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: inputValue,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Clear submit error when user makes changes
    if (submitError) {
      setSubmitError("");
    }
  };

  /**
   * Validate all form fields
   */
  const validateForm = () => {
    const newErrors = {};

    newErrors.fullName = validateName(formData.fullName);
    newErrors.email = validateEmail(formData.email);
    newErrors.password = validatePassword(formData.password);
    newErrors.confirmPassword = validatePasswordMatch(
      formData.password,
      formData.confirmPassword
    );
    newErrors.acceptTerms = validateTerms(formData.acceptTerms);

    setErrors(newErrors);

    // Return true if no errors
    return !Object.values(newErrors).some((error) => error !== "");
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const result = await mockSignUp({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      // Success - show success screen
      setSuccessData(result.user);
    } catch (error) {
      // Handle API error
      setSubmitError(
        error.error || "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Reset form to start over
   */
  const handleStartOver = () => {
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    });
    setErrors({});
    setSubmitError("");
    setSuccessData(null);
  };

  // Show success screen if sign-up was successful
  if (successData) {
    return (
      <SuccessScreen userData={successData} onStartOver={handleStartOver} />
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <header className={styles.header}>
          <h1 className={styles.title}>Create Your Account</h1>
          <p className={styles.subtitle}>
            Welcome! Please fill out the form below to get started.
          </p>
        </header>

        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          <FormInput
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
            placeholder="Enter your full name"
            required
          />

          <FormInput
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            placeholder="Enter your email address"
            required
          />

          <FormInput
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            error={errors.password}
            placeholder="Create a strong password"
            required
          />

          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            error={errors.confirmPassword}
            placeholder="Confirm your password"
            required
          />

          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
                className={styles.checkbox}
              />
              <span className={styles.checkboxText}>
                I accept the{" "}
                <a href="#" className={styles.link}>
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="#" className={styles.link}>
                  Privacy Policy
                </a>
                <span className={styles.required}>*</span>
              </span>
            </label>
            {errors.acceptTerms && (
              <div className={styles.checkboxError} role="alert">
                {errors.acceptTerms}
              </div>
            )}
          </div>

          {submitError && (
            <ErrorMessage
              message={submitError}
              onClose={() => setSubmitError("")}
            />
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`${styles.submitButton} ${
              isSubmitting ? styles.submitting : ""
            }`}
          >
            {isSubmitting ? (
              <>
                <span className={styles.spinner}></span>
                Creating Account...
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <footer className={styles.footer}>
          <p className={styles.footerText}>
            Already have an account?{" "}
            <a href="#" className={styles.link}>
              Sign In
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SignUpForm;
