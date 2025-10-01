/**
 * Validation utility functions for form inputs
 */

/**
 * Validates if a name is valid (minimum 2 characters, only letters and spaces)
 */
export const validateName = (name) => {
  if (!name || name.trim().length < 2) {
    return "Name must be at least 2 characters long";
  }
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    return "Name can only contain letters and spaces";
  }
  return "";
};

/**
 * Validates email format
 */
export const validateEmail = (email) => {
  if (!email) {
    return "Email is required";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }
  return "";
};

/**
 * Validates password strength
 * Requirements: min 8 chars, 1 uppercase, 1 lowercase, 1 number
 */
export const validatePassword = (password) => {
  if (!password) {
    return "Password is required";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters long";
  }
  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter";
  }
  if (!/[a-z]/.test(password)) {
    return "Password must contain at least one lowercase letter";
  }
  if (!/[0-9]/.test(password)) {
    return "Password must contain at least one number";
  }
  return "";
};

/**
 * Validates if passwords match
 */
export const validatePasswordMatch = (password, confirmPassword) => {
  if (!confirmPassword) {
    return "Please confirm your password";
  }
  if (password !== confirmPassword) {
    return "Passwords do not match";
  }
  return "";
};

/**
 * Validates if terms are accepted
 */
export const validateTerms = (accepted) => {
  if (!accepted) {
    return "You must accept the terms and conditions";
  }
  return "";
};
