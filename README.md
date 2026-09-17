# 🌟 Modern React Contact Page

A sleek, highly responsive, and beautifully animated Contact Page built with React and Tailwind CSS. This project demonstrates modern web design principles including glassmorphism, dynamic animations, and seamless light/dark mode integration.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## ✨ Features

- **Premium Aesthetics**: Features a glassmorphism card layout with subtle radial gradients and dotted masking.
- **Dynamic Micro-animations**: Background blur elements elegantly drift across the screen (`drift-a` & `drift-b`), providing a "live" feel to the interface.
- **Advanced Theming**: Fully integrated Dark and Light modes.
  - Automatically respects your device's system preferences.
  - Saves your manual preference using `localStorage` so it persists across reloads.
- **Component-Driven Architecture**: The codebase is cleanly split into reusable, modular components (`ContactForm`, `ContactInput`, `ContactDetails`, `SocialLinks`).
- **Form Validation**: Real-time validation for Name, Email, Subject, and Message fields, providing clear error feedback to the user.
- **Formspree Integration**: The form handles real submissions to a Formspree endpoint smoothly with loading states ("submitting", "success", "error").
- **Modern Typography**: Integrated with Google's 'Inter' font for a sharp and modern look.
- **Fully Accessible**: Implements extensive `aria` labels (`aria-invalid`, `aria-describedby`) ensuring the form is accessible to everyone.

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/II3boody/Contact.git
   cd Contact
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173` to see the application running.

## 📁 Project Structure

```text
src/
├── Components/
│   └── Contact/
│       ├── ContactDetails.tsx    # Renders email, phone, location info
│       ├── ContactForm.tsx       # Main form handling state & submission
│       ├── ContactInput.tsx      # Reusable UI component for form fields
│       └── SocialLinks.tsx       # Renders social media buttons
├── Pages/
│   └── Contact/
│       └── Contact.tsx           # The main layout, theme toggle, & animations
├── Types/
│   ├── Contact/
│   │   └── ContactFormData.ts    # Types for form data
│   └── Theme/
│       └── Theme.ts              # Types for Light/Dark mode
├── index.css                     # Global styles, Tailwind imports, & Inter font
└── main.tsx                      # Entry point
```

## 🛠️ Built With

- [React 18](https://reactjs.org/) - The UI library used.
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI development.
- [TypeScript](https://www.typescriptlang.org/) - For adding static typing and improved developer experience.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/II3boody/Contact/issues).

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
