# Technical Decisions: Purity UI Dashboard Conversion

This document details the software engineering justifications, trade-offs, and strategies selected for the Purity UI Dashboard conversion.

---

## 1. Core Technology Selection

### 1.1 Vite + React

- **Decision:** React 18 bootstrap via Vite.
- **Alternative Considered:** Create React App (CRA) or Next.js.
- **Justification:** CRA is deprecated and slow. Next.js is overkill for a static design-to-code project, introducing server-side configuration overhead. Vite provides near-instantaneous Hot Module Replacement (HMR) and produces highly optimized single-page app static builds.

### 1.2 Tailwind CSS

- **Decision:** Utility-first Tailwind CSS styling.
- **Alternative Considered:** Chakra UI (original design framework), CSS Modules, or Styled-Components.
- **Justification:** While the reference is named "Purity UI Dashboard — Chakra UI", the client requested a **React + Tailwind CSS** conversion. Extending Tailwind's configuration allows us to match the visual spacing, radius, and shadows of Chakra UI while keeping the output lightweight. Avoiding runtime CSS-in-JS libraries reduces browser execution latency.

### 1.3 React Router DOM

- **Decision:** `react-router-dom` v6 for client-side navigation.
- **Alternative Considered:** Custom React page state switching.
- **Justification:** Declaring explicit routes makes the application scalable and aligns it with production standards (e.g. bookmarks, back-button history, layouts nesting).

### 1.4 Recharts

- **Decision:** `recharts` for charts.
- **Alternative Considered:** Chart.js, D3.js.
- **Justification:** Recharts is built specifically for React, using declarative components that match standard markup structures. It provides responsive containers, tooltips, and smooth SVG-based animations that closely resemble the design references.

### 1.5 Framer Motion

- **Decision:** `framer-motion` for transitions.
- **Alternative Considered:** Vanilla CSS transitions or React Transition Group.
- **Justification:** Framer Motion handles complex layout transitions (such as sliding off-canvas mobile menus and card hover scales) using clean, declarative component wrappers.

---

## 2. Technical Trade-offs & Compromises

### 2.1 Figma Inspect vs Screen Matching

- **Trade-off:** We are conducting an **image-based conversion** because the Figma source file (`.fig` or inspect link) was not provided.
- **Decision:** We extract colors, margins, and borders by analyzing the screenshots in `Purity UI Dashboard - Chakra UI Dashboard (Community)` and matching them against standard Tailwind scales. This requires careful grid modeling (e.g., matching Card padding, shadow levels, and font sizing hierarchies).

### 2.2 Global State vs Prop Drilling

- **Trade-off:** Using React Context instead of Redux/Zustand.
- **Decision:** Redux or Zustand would introduce unnecessary boilerplate. A lightweight `AppContext` is sufficient to manage the sidebar toggle state, setting configs, and mock auth logins.

---

## 3. Validation & Testing Strategy

To ensure code stability during incremental development, we implement the following multi-tier validation loop:

```txt
┌────────────────┐     ┌───────────────┐     ┌──────────────┐
│  npm run lint  │ ──> │npm run format │ ──> │npm run build │
└────────────────┘     └───────────────┘     └──────────────┘
```

1.  **Linter Verification:** Strict ESLint configuration ensures code conforms to clean-code rules and catches unused variables or broken hooks.
2.  **Format Compliance:** Prettier rules verify spacing, trailing commas, and brackets to prevent messy diffs in Git.
3.  **Build Verification:** The compiler verifies there are no import path errors, syntax bugs, or bundling issues.

---

## 4. Accessibility (A11y) Implementation Mapping

To build a professional-grade UI, we map accessibility best practices to components:

| Element Group            | Accessibility (A11y) Actions                                                                                                                         |
| :----------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Document Shell**       | Use semantic landmarks: `<aside>` for sidebar, `<nav>` for menus, `<main>` for dashboard content, `<footer>` for footer notes.                       |
| **Interactive Controls** | All buttons, links, and inputs must use native elements (no `div` click handlers).                                                                   |
| **Input Controls**       | Explicit `<label>` associations for text fields. Switches/Toggles use standard checkbox elements styled with CSS overlays to support screen readers. |
| **Visual Elements**      | Add `aria-hidden="true"` to vector SVG icons. Add descriptive `alt` tags to avatars and background media.                                            |
| **Keyboard Nav**         | Ensure distinct outline focus rings on interactive elements: `focus:ring-2 focus:ring-primary`.                                                      |

---

## 5. Security & Verification Strategy

- **Zero Secrets Policy:** Never commit secrets, API keys, or environment settings to Git. The `.gitignore` file must prevent uploading `.env` configurations.
- **Input Sanitization:** Treat input forms (SignIn/SignUp) as untrusted; use native HTML type constraints (e.g., `type="email"`) and basic regex validation.
- **Git Security:** Enable GPG signature verification for commits to ensure identity protection during freelancing or corporate contributions.
