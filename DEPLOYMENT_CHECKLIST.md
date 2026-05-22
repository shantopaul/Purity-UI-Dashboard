# Deployment Checklist: Purity UI Dashboard Conversion

This checklist outlines the verification steps, environment checks, and hosting procedures required to deploy the Purity UI Dashboard conversion project to a production server (Vercel/Netlify).

---

## 1. Environment Preparation

- `[ ]` Ensure `.env` is listed in `.gitignore` and is not committed to the repository.
- `[ ]` Configure standard env files locally if required:
  - `VITE_APP_TITLE=Purity UI Dashboard`
  - `VITE_API_URL=` (Leave blank or set to local/staging URL for mock routes)
- `[ ]` Verify that all dependency packages in `package.json` are current and have no vulnerability warnings (run `npm audit`).

---

## 2. Pre-Build Verification

Run this verification suite locally before committing any deployment branch:

```bash
# 1. Format code files
npm run format

# 2. Analyze code formatting and rules
npm run lint

# 3. Compile code for production distribution
npm run build
```

- `[ ]` **Lint check:** Zero warnings, zero errors.
- `[ ]` **Formatter check:** Clean formatting across all `.js`, `.jsx`, `.css`, and `.json` files.
- `[ ]` **Compilation check:** Vite build succeeds with code division assets exported inside the `dist/` directory.

---

## 3. Git Status Verification

- `[ ]` Check active Git status:
  ```bash
  git status
  ```
  Ensure no active development files are uncommitted.
- `[ ]` Verify that temporary folders (`node_modules/`, `dist/`, `.vite/`, `.env`) are excluded from Git staging.
- `[ ]` Check commit log signatures to ensure GPG sign validation passes.

---

## 4. Hosting & CI/CD Setup

### 4.1 Production Hosting (Vercel / Netlify)

#### Option A: Vercel Deployment

1.  Connect your Git repository to Vercel.
2.  Select the project repository.
3.  Configure the build settings:
    - **Framework Preset:** `Vite`
    - **Build Command:** `npm run build`
    - **Output Directory:** `dist`
4.  Configure Environment Variables if applicable.
5.  Click **Deploy**.

#### Option B: Netlify Deployment

1.  Connect your Git repository to Netlify.
2.  Set build configuration:
    - **Build Command:** `npm run build`
    - **Publish Directory:** `dist`
3.  Add redirect rules for single-page routing:
    Create a `public/_redirects` file with the following content:
    ```txt
    /*    /index.html   200
    ```
4.  Click **Deploy site**.

### 4.2 CI/CD Configuration (GitHub Actions)

To automate linting and build checks, create `.github/workflows/deploy.yml`:

```yaml
name: Build & Verify CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: "npm"
      - name: Install Dependencies
        run: npm ci
      - name: Code Formatting Check
        run: npm run format -- --check
      - name: Code Linting
        run: npm run lint
      - name: Production Build
        run: npm run build
```

---

## 5. Post-Deployment Verification Checklist

Once the project is deployed, perform these verification steps on the live preview link:

- `[ ]` **Routing Check:** Access `/dashboard`, `/tables`, `/billing`, `/profile`, `/sign-in`, `/sign-up` directly in the URL bar to verify fallback routing works.
- `[ ]` **Responsive Layout Check:** Use browser developer tools to verify responsiveness at `320px`, `375px`, `768px`, `1024px`, and `1440px`. Ensure no horizontal scrollbars appear on dashboard grids.
- `[ ]` **Mobile Menu Check:** Verify the sliding off-canvas drawer opens and closes without breaking page interaction.
- `[ ]` **Chart Check:** Verify that Recharts components render correctly inside their parent cards on different screens.
- `[ ]` **Interaction Check:** Hover, active, and focus states render on buttons, links, table rows, and inputs.
- `[ ]` **Sign-in / Sign-up Check:** Verify that submit button validation and mock page redirects trigger correctly.

---

## 6. Rollback & Recovery Procedures

If a deployment introduces critical layout or routing bugs:

1.  **Immediate Reversion:** Locate the deployment history in Vercel/Netlify. Identify the last stable commit build and click "Promote to Production" (Rollback).
2.  **Git Branch Debugging:**
    - Check out the stable commit locally.
    - Create a debug branch from that point to isolate and resolve the issue.
    - Do not push fixes directly to `main` without validating them against the build checking suite.
