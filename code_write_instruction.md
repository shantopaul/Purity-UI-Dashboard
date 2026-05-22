# Code Write Instruction: Engineering Workflow Guidelines

This document defines the permanent development workflow, coding standards, Git protocols, and verification steps for engineers working on the Purity UI Dashboard conversion codebase.

---

## 1. Core Workflow Rules

Before writing any code or modifying existing workspace files, you must follow these operational rules:

1.  **Read the Requirements First:** Review `full_figma_to_code_conversion.md` and the design images in the `Purity UI Dashboard - Chakra UI Dashboard (Community)` folder to understand layout details.
2.  **Inspect the Architecture First:** Review [ARCHITECTURE_NOTES.md](file:///k:/AndroidDev/tools/Project/React%20Project/10.%20Purity%20UI%20Dashboard%20%28%20Freelancer%20Project%20%29/Purity-UI-Dashboard-Figma-To-React/ARCHITECTURE_NOTES.md) and [TECHNICAL_DECISIONS.md](file:///k:/AndroidDev/tools/Project/React%20Project/10.%20Purity%20UI%20Dashboard%20%28%20Freelancer%20Project%20%29/Purity-UI-Dashboard-Figma-To-React/TECHNICAL_DECISIONS.md) to maintain established folder configurations and component patterns.
3.  **Work Feature-by-Feature:** Follow the roadmap in [PROFESSIONAL_IMPLEMENTATION_PLAN.md](file:///k:/AndroidDev/tools/Project/React%20Project/10.%20Purity%20UI%20Dashboard%20%28%20Freelancer%20Project%20%29/Purity-UI-Dashboard-Figma-To-React/PROFESSIONAL_IMPLEMENTATION_PLAN.md). You must work on only one feature at a time.
4.  **Enforce Feature Isolation:** You cannot work on multiple features concurrently. The active feature status must be `In Progress` in [FEATURE_TRACKING.md](file:///k:/AndroidDev/tools/Project/React%20Project/10.%20Purity%20UI%20Dashboard%20%28%20Freelancer%20Project%20%29/Purity-UI-Dashboard-Figma-To-React/FEATURE_TRACKING.md), and all others must remain `Pending`.

---

## 2. Production-Grade Quality Standards

### 2.1 Styling & Theme System
*   **Tailwind Exclusively:** Use Tailwind CSS for all layout and styling. Do not use ad-hoc CSS modules or inline styling objects unless dynamic calculation (e.g. dynamic width percentages) is required.
*   **Theme Tokens:** Use the custom design tokens (e.g., `text-primary`, `rounded-card`, `shadow-soft`) to maintain visual alignment.

### 2.2 Component Reusability & Clean Code
*   Keep components small and focused. If a file exceeds 150 lines, evaluate if it can be broken down into sub-components.
*   Document props using descriptive comments or JSDoc.
*   Preserve all existing codebase comments, helper utilities, and layout structures unless they are explicitly targeted by the feature requirements.

### 2.3 Accessibility (A11y) Rules
*   Every interactive component (e.g., buttons, anchors) must have focus rings: `focus:ring-2 focus:ring-primary focus:outline-none`.
*   All images and avatars must include descriptive `alt` tags.
*   Use semantic tags instead of generic `div`s for layout grids.

### 2.4 Responsive Layout Execution
*   Design mobile-first. Implement grid styles starting with mobile layouts and scaling up for larger screens:
    ```javascript
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    ```
*   Wrap all table views in an overflow-x wrapper:
    ```javascript
    className="w-full overflow-x-auto scrollbar-thin"
    ```

---

## 3. Git & Signed Commits Workflow

To ensure security and code integrity, you must sign your commits.

### 3.1 GPG Key Configuration
Before starting development, verify your GPG key configuration:

1.  **Check for existing keys:**
    ```bash
    gpg --list-secret-keys --keyid-format=LONG
    ```
2.  **Generate a new key if none exist:**
    ```bash
    gpg --full-generate-key
    ```
    *   *Algorithm:* RSA and RSA (default)
    *   *Key size:* 4096 bits
    *   *Validity:* 0 (does not expire)
    *   *Details:* Use the name and verified email address associated with your GitHub profile.
3.  **Get the GPG Key ID:**
    Identify the long key ID string after `sec rsa4096/` (e.g., `3AA5C34371567BD2`).
4.  **Configure Git to sign commits:**
    ```bash
    git config --global user.signingkey 3AA5C34371567BD2
    git config --global commit.gpgsign true
    ```

### 3.2 Safe Windows Git Execution
On Windows systems, you may encounter directory ownership constraints. Always execute Git commands using the `safe.directory` override flag:

```bash
git -c safe.directory="k:/AndroidDev/tools/Project/React Project/10. Purity UI Dashboard ( Freelancer Project )/Purity-UI-Dashboard-Figma-To-React" <command>
```

**Common Command Overrides:**
*   *Add Changes:*
    ```bash
    git -c safe.directory="k:/AndroidDev/tools/Project/React Project/10. Purity UI Dashboard ( Freelancer Project )/Purity-UI-Dashboard-Figma-To-React" add .
    ```
*   *Commit Changes:*
    ```bash
    git -c safe.directory="k:/AndroidDev/tools/Project/React Project/10. Purity UI Dashboard ( Freelancer Project )/Purity-UI-Dashboard-Figma-To-React" commit -m "feat(auth): add sign-in form validation"
    ```
*   *Push Changes:*
    ```bash
    git -c safe.directory="k:/AndroidDev/tools/Project/React Project/10. Purity UI Dashboard ( Freelancer Project )/Purity-UI-Dashboard-Figma-To-React" push origin feature/auth-forms
    ```

### 3.3 Commit Message Standards
Use the Conventional Commits specification:
*   `feat(<scope>): ...` — New layout or component additions.
*   `fix(<scope>): ...` — Visual alignment or responsive behavior corrections.
*   `docs(<scope>): ...` — Updates to planning or project files.
*   `style(<scope>): ...` — Code formatting updates.

---

## 4. Build & Verification Workflow

Before committing changes, run this local verification suite:

```bash
# 1. Format code files
npm run format

# 2. Analyze code formatting and rules
npm run lint

# 3. Compile code for production distribution
npm run build
```

If any check returns a non-zero exit code or logs a compilation warning:
1.  **Stop immediately.**
2.  Fix the issues.
3.  Re-run the verification suite.
4.  Commit changes only when all checks pass with zero errors.

---

## 5. Feature Completion Protocol

When you complete a feature:
1.  **Verify UI states:** Test focus states, hover scales, active menu transitions, and mobile responsiveness.
2.  **Verify production builds:** Run `npm run build` and preview the build locally using `npm run preview`.
3.  **Update Feature Tracking:** Set the completed feature status to `Done` in `FEATURE_TRACKING.md`, add completion notes, and note your verification steps.
4.  **Commit and Push:** Commit your signed changes using the Windows safe Git command and push to the feature branch.
5.  **Stop development:** Do not begin the next feature until the current feature changes are merged or approved by the user.
