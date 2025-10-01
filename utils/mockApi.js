/**
 * Mock API to simulate server-side sign up
 * Simulates network delay and occasional errors
 */

export const mockSignUp = async (userData) => {
  return new Promise((resolve, reject) => {
    // Simulate network delay (1.5 seconds)
    setTimeout(() => {
      // Simulate 90% success rate
      const shouldSucceed = Math.random() > 0.1;

      if (shouldSucceed) {
        resolve({
          success: true,
          message: "Account created successfully!",
          user: {
            id: Math.random().toString(36).substr(2, 9),
            name: userData.fullName,
            email: userData.email,
            createdAt: new Date().toISOString(),
          },
        });
      } else {
        // Simulate server error
        reject({
          success: false,
          error:
            "This email address is already registered. Please use a different email.",
        });
      }
    }, 1500);
  });
};
