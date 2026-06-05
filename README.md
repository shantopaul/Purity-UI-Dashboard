# Purity UI Dashboard (React + Tailwind CSS)

A modern, responsive, pixel-perfect React implementation of the Purity UI Dashboard template. Converted with precision from the original Figma design, utilizing Tailwind CSS for styling, Recharts for statistics and data visualization, React Router DOM v7 for routing, and Framer Motion for smooth micro-animations.

---

## 📸 Project Screens (In Flow Order)

Here is a visual walk-through of the application pages in serial order:

### 1. Sign In Screen
A clean, split-screen authentication page featuring email/password controls, custom switches (with "Remember me" checked by default), social login shortcuts, and a prominent Chakra branded background banner.
![Sign In Screen](./Purity%20UI%20Dashboard%20-%20Chakra%20UI%20Dashboard%20%28Community%29/Sign%20In%20Screen.png)

### 2. Sign Up Screen
An overlapping registration layout featuring full credentials form fields, a toggle switch for terms and agreements, and a vibrant teal header block.
![Sign Up Screen](./Purity%20UI%20Dashboard%20-%20Chakra%20UI%20Dashboard%20%28Community%29/Sign%20Up%20Screen.png)

### 3. Dashboard Screen
The primary analytics overview hub, containing key performance indicator stats, an interactive sales performance chart (Recharts Area), active user metrics (Recharts Bar Chart), and a visual satisfaction dial SVG.
![Dashboard Screen](./Purity%20UI%20Dashboard%20-%20Chakra%20UI%20Dashboard%20%28Community%29/Dashboard%20Screen.png)

### 4. Tables Screen
A dedicated data grid containing the **Authors Table** (representing staff members, roles, online status badges, and hire dates) and the **Projects Table** (visualizing budgets, development states, and custom-styled completion bars).
![Tables Screen](./Purity%20UI%20Dashboard%20-%20Chakra%20UI%20Dashboard%20%28Community%29/Tables%20Screen.png)

### 5. Billing Screen
A financial manager component containing a glassmorphic credit card visual, salary/payment cards, invoices, billing information cards, and a recent transactions ledger.
![Billing Screen](./Purity%20UI%20Dashboard%20-%20Chakra%20UI%20Dashboard%20%28Community%29/Billing%20Screen.png)

### 6. Profile Screen
A user information dashboard featuring customized application configuration switches, user biography profile details, dynamic messaging logs, and project portfolio showcases.
![Profile Screen](./Purity%20UI%20Dashboard%20-%20Chakra%20UI%20Dashboard%20%28Community%29/Profile%20Screen.png)

---

## 🛠️ Technology Stack

*   **Core Framework:** [React v19](https://react.dev/)
*   **Build Tool / Dev Server:** [Vite v8](https://vitejs.dev/)
*   **Styling Engine:** [Tailwind CSS v3](https://tailwindcss.com/)
*   **Routing:** [React Router DOM v7](https://reactrouter.com/en/main)
*   **Data Visualization:** [Recharts v3](https://recharts.org/)
*   **Animations:** [Framer Motion v12](https://www.framer.com/motion/)
*   **Vector Icons:** [Lucide React](https://lucide.dev/)

---

## 📁 Key Directories & Architecture

```txt
src/
├── assets/          # SVG vectors, backgrounds, and brand graphics
├── components/      # UI components categorized by modular concern:
│   ├── common/      # Primitive elements (Cards, Buttons, Badges)
│   ├── layout/      # Structuring elements (Sidebar, Topbar, AuthLayout)
│   ├── dashboard/   # Dashboard widgets and Recharts components
│   ├── tables/      # Data table rows and headers
│   ├── billing/     # Credit Card rendering and lists
│   └── profile/     # Settings checklist and timeline feeds
├── data/            # Mock database structures and dataset values
├── pages/           # High-level route views (Dashboard, Profile, SignUp, etc.)
├── routes/          # Navigation paths configuration mapping
├── utils/           # Utility helpers (like `cn` for styling merging)
└── App.jsx          # Top-level context wrapper and route definitions
```

Detailed architectural configurations can be found in [ARCHITECTURE_NOTES.md](file:///k:/AndroidDev/tools/Project/React%20Project/10.%20Purity%20UI%20Dashboard%20%28%20Freelancer%20Project%20%29/Purity-UI-Dashboard-Figma-To-React/ARCHITECTURE_NOTES.md).

---

## ⚙️ Getting Started & Installation

To run this application locally on your machine, perform the following steps:

### 1. Clone & Navigate to Project
```bash
cd "k:/AndroidDev/tools/Project/React Project/10. Purity UI Dashboard ( Freelancer Project )/Purity-UI-Dashboard-Figma-To-React"
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Launch the Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` to view the application live.

### 4. Build for Production Compilation
```bash
npm run build
```
The compiled output files will be built under the `/dist` directory.

---

## 📝 Code Quality & Git Protocols

All engineering practices must align with the standards defined in the codebase guidelines:
*   **Tailwind Exclusively:** No custom inline styles or style modules. Use design tokens.
*   **Mobile-First Design:** Direct styling begins on mobile layout size before scaling up through breakpoints (`md:`, `lg:`).
*   **Strict Feature Isolation:** Follow the feature tracking dashboard rules defined in [FEATURE_TRACKING.md](file:///k:/AndroidDev/tools/Project/React%20Project/10.%20Purity%20UI%20Dashboard%20%28%20Freelancer%20Project%20%29/Purity-UI-Dashboard-Figma-To-React/FEATURE_TRACKING.md).
*   **Signed Commits:** Every commit must be signed using GPG keys to comply with security requirements. For detailed setup guidelines, see [code_write_instruction.md](file:///k:/AndroidDev/tools/Project/React%20Project/10.%20Purity%20UI%20Dashboard%20%28%20Freelancer%20Project%20%29/Purity-UI-Dashboard-Figma-To-React/code_write_instruction.md).
