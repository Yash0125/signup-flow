# Sign-Up Flow Application

A responsive and accessible sign-up form built with React and Next.js, featuring comprehensive form validation, error handling, and a polished user interface.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Comprehensive Validation**: Real-time form validation with clear error messages
- **Accessibility**: WCAG-compliant with proper ARIA labels and keyboard navigation
- **Mock API Integration**: Simulates real API calls with loading states and error handling
- **Modern UI**: Clean, professional design with smooth animations and transitions

## Form Fields

- **Full Name**: Required, minimum 2 characters, letters and spaces only
- **Email**: Required, valid email format validation
- **Password**: Required, minimum 8 characters with uppercase, lowercase, and number
- **Confirm Password**: Required, must match the password
- **Terms Acceptance**: Required checkbox for terms and conditions

## Project Structure

```
signup-flow/
├── components/
│   ├── ErrorMessage.js      # Reusable error message component
│   ├── FormInput.js         # Reusable form input with validation
│   ├── SignUpForm.js        # Main sign-up form component
│   └── SuccessScreen.js     # Success confirmation screen
├── pages/
│   ├── _app.js             # Next.js app wrapper
│   ├── _document.js        # Custom document
│   └── index.js            # Main page
├── styles/
│   ├── globals.css         # Global styles and CSS variables
│   ├── ErrorMessage.module.css
│   ├── FormInput.module.css
│   ├── SignUpForm.module.css
│   └── SuccessScreen.module.css
├── utils/
│   ├── mockApi.js          # Mock API simulation
│   └── validation.js       # Form validation functions
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 16.0 or later
- npm, yarn, or pnpm

### Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## Technical Implementation

### Validation System
- Real-time validation with immediate feedback
- Custom validation functions for each field type
- Accessible error messages with ARIA attributes

### Mock API
- Simulates 1.5-second network delay
- 90% success rate (10% simulated failures for testing)
- Returns user data on successful sign-up

### Styling Approach
- CSS Modules for component-scoped styling
- CSS custom properties for consistent theming
- Responsive design with mobile-first approach
- Smooth animations and micro-interactions

### Accessibility Features
- Semantic HTML structure
- Proper form labels and associations
- ARIA attributes for screen readers
- Keyboard navigation support
- High contrast colors for readability

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

### Code Organization
- Components are modular and reusable
- Separation of concerns between validation, API, and UI
- Consistent naming conventions throughout
- Well-documented functions with JSDoc comments

### Best Practices Implemented
- React Hooks for state management
- Controlled components for form inputs
- Error boundaries and graceful error handling
- Performance optimizations with proper re-render prevention
- Clean, readable code with meaningful variable names

### Testing Considerations
- Form validation edge cases
- API error handling scenarios
- Responsive design across devices
- Accessibility compliance testing

## Future Enhancements

- Email verification flow
- Password strength indicator
- Remember me functionality
- Social media sign-up options
- Multi-step form wizard
- Progressive web app features

---

**Note**: This is a demonstration project for technical assessment purposes. The mock API simulates real-world scenarios including network delays and potential failures to showcase proper error handling and user experience patterns.

---

## Quick Start Guide

### How to Run This Project

1. **Extract the project files** to your desired location
2. **Open terminal/command prompt** and navigate to the project folder:
   ```bash
   cd signup-flow
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```
5. **Open your browser** and go to: http://localhost:3000

### Important Notes

- **Password Eye Icons**: Click the eye icon in password fields to show/hide your password
- **Form Validation**: All fields have real-time validation with clear error messages
- **Mock API**: The signup process simulates a real API with 1.5-second delay and 90% success rate
- **Responsive Design**: The form works perfectly on mobile, tablet, and desktop devices
- **Accessibility**: Full keyboard navigation and screen reader support included

### Testing the Form

Try these scenarios to see the validation in action:
- Leave fields empty and try to submit
- Enter an invalid email format
- Use a weak password (less than 8 characters, missing uppercase/lowercase/numbers)
- Make passwords not match
- Forget to check the terms checkbox

### Build for Production

```bash
npm run build
npm start
```

This will create an optimized production build and start the server on port 3000.
