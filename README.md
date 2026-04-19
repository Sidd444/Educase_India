# PopX - Educase India UI Assignment

## 🚀 Live Demo
**Deployed Application:** [https://educaseuiassignment.netlify.app/](https://educaseuiassignment.netlify.app/)

---

## 📋 Overview
PopX is a modern authentication and account management interface built with React and Vite. This project showcases a clean, user-friendly UI for user registration, login, and account settings management.

---

## 🎨 UI Components

### 1. **Welcome Page**
The landing page that introduces users to PopX with two main action buttons.
- **Location:** `/` (Root path)
- **Features:**
  - Welcoming headline: "Welcome to PopX"
  - Descriptive text with placeholder content
  - "Create Account" button (purple, primary action)
  - "Already Registered? Login" button (light purple, secondary action)
  - Clean white card design on light gray background
  - Responsive layout with max-width constraints

### 2. **Login Page**
User authentication interface with email and password fields.
- **Location:** `/login`
- **Features:**
  - Login form with two input fields:
    - **Email Address** - Email input with validation
    - **Password** - Password input field
  - Form validation - submit button is disabled until both fields are filled
  - Dynamic button styling:
    - Enabled: Purple background (#6C25FF) with white text
    - Disabled: Light gray background (#ECECEC) with gray text
  - Fixed dimensions: 375px width, 812px height (mobile device size)
  - Floating labels for better UX
  - Form submission navigates to Account Settings page

### 3. **Create Account Page**
Comprehensive registration form for new users.
- **Location:** `/create-account`
- **Features:**
  - Six input fields:
    - **Full Name** (Required) - Text input pre-filled with "Marry Doe"
    - **Phone Number** (Required) - Tel input pre-filled with "0000000000"
    - **Email Address** (Required) - Email input pre-filled with "marrydoe@gmail.com"
    - **Password** (Required) - Password input pre-filled with "Marry Doe"
    - **Company Name** (Optional) - Text input pre-filled with "Marry Doe"
  - Radio button group:
    - **Are you an Agency?** (Required)
    - Options: "Yes" or "No"
    - Default selected: "Yes"
  - Styled input fields with purple focus rings
  - "Create Account" button with purple background and hover effect
  - White card design with shadow and rounded corners
  - Maximum width constraint for responsive design

### 4. **Account Settings Page**
User profile and account settings display.
- **Location:** `/account-settings`
- **Features:**
  - Profile section with:
    - Circular profile image (external image from CDN)
    - User name: "Marry Doe"
    - User email: "Marry@Gmail.Com"
  - Camera icon overlay on profile image for photo upload interaction
  - Camera icon is positioned at bottom-right of the image
  - Purple background on camera icon button
  - Lorem ipsum placeholder text for user bio/information
  - White card layout with consistent styling

---

## 🛣️ Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Welcome | Landing page with account creation and login buttons |
| `/login` | Login | User login page with email and password fields |
| `/create-account` | CreateAccount | Account registration form |
| `/account-settings` | AccountSettings | User profile and account settings page |

### Navigation Flow
```
Welcome (/)
├── "Create Account" → Create Account (/create-account)
└── "Login" → Login (/login)
    └── "Login" (submit) ��� Account Settings (/account-settings)
```

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.2.0
- **Build Tool:** Vite 5.2.0
- **Routing:** React Router DOM 6.23.1
- **Styling:** Tailwind CSS 3.4.4
- **Icons:** React Icons 5.2.1
- **Code Quality:** ESLint 8.57.0

---

## 📦 Project Structure

```
src/
├── App.jsx                 # Main app component with routing
├── main.jsx               # React entry point
├── index.css              # Global styles
├── App.css                # App-specific styles
├── components/
│   ├── Welcome.jsx        # Welcome/landing page
│   ├── Login.jsx          # Login page
│   ├── CreateAccount.jsx  # Account creation form
│   └── AccountSettings.jsx # Account settings page
└── assets/                # Static assets directory
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sidd444/Educase_India.git
cd Educase_India
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview the production build:
```bash
npm run preview
```

---

## 📝 Available Scripts

- `npm run dev` - Start Vite development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

---

## 🎯 Features

✅ Responsive UI components  
✅ Modern authentication flow  
✅ Form validation and state management  
✅ Dynamic button states based on form input  
✅ Clean and intuitive user interface  
✅ Smooth transitions and hover effects  
✅ Mobile-first design approach  
✅ Production-ready Vite setup  

---

## 📧 Contact & Support

For questions or support, please reach out to the project maintainer:
- **GitHub:** [@Sidd444](https://github.com/Sidd444)
- **Repository:** [Educase_India](https://github.com/Sidd444/Educase_India)

---

## 📄 License

This project is open source and available under the MIT License