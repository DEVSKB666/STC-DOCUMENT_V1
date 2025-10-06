# STC Document — Vue 3 + Tailwind
Frontend-only build (no backend). Data persists via localStorage.

## Tech
- Vue 3 (Vite) + Tailwind CSS
- Pinia + Vue Router
- Node >= 22

## Run
```bash
npm install
npm run dev
# open http://localhost:5174
```

## Pages (mapped from PHP)
- index.php / dashboard.php → `/` (Dashboard)
- login.php → `/login`
- register.php → `/register`
- document_box.php / add_doc.php → `/documents`
- profile.php → `/profile`
- admin/* → `/admin`

## Accounts
- seed: `admin / admin` (role: admin)
