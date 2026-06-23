# GitHub Profile Explorer

A responsive GitHub profile clone built with **Next.js 14** and **Tailwind CSS**. It fetches real user and repository data from the [GitHub REST API](https://docs.github.com/en/rest) — no mock data, no API key required for public profiles.

<p align="center">
  <a href="https://github-profile-explorer-rosy.vercel.app/">
    <img src="https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo on Vercel" />
  </a>
  &nbsp;
  <a href="https://github.com/AnishRane13/github-profile-explorer">
    <img src="https://img.shields.io/badge/Repository-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="View source on GitHub" />
  </a>
</p>

---

## Features

- **Profile sidebar** — Avatar, name, bio, location, company, website, Twitter, followers/following/repo counts
- **Repository list** — Description, language, stars, forks, last updated date
- **Search** — Filter repositories by name
- **Sort** — Last updated, name, or stars
- **Language filter** — Filter by programming language
- **Pagination** — 10 repositories per page with page controls
- **Dark mode** — Toggle with preference saved to `localStorage` (no flash on reload)
- **Loading skeleton** — Shimmer placeholders while data loads
- **Error handling** — Graceful messages for rate limits and API failures
- **Responsive layout** — Mobile-first; sidebar stacks on small screens

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 14](https://nextjs.org/) | App Router, server-side data fetching |
| [React 18](https://react.dev/) | UI components |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Styling and responsive design |
| [GitHub REST API](https://docs.github.com/en/rest) | Live profile and repository data |
| [react-icons](https://react-icons.github.io/react-icons/) | GitHub and social icons |

No UI component libraries — all components are hand-written.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn / pnpm)

### Installation

```bash
git clone https://github.com/AnishRane13/github-profile-explorer.git
cd github-profile-explorer
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Configuration

To display a different GitHub profile, change the username in `lib/github.ts`:

```ts
export const GITHUB_USERNAME = "your-username";
```

API responses are cached for **1 hour** (`revalidate: 3600`). Adjust `REVALIDATE_SECONDS` in the same file if needed.

---

## API Endpoints Used

```
GET https://api.github.com/users/{username}
GET https://api.github.com/users/{username}/repos?sort=updated&per_page=100&page={n}
```

Public data does not require authentication. Unauthenticated requests are limited to **60 requests/hour** per IP.

---

## Project Structure

```
app/
  page.tsx                 # Main profile page (server component)
  layout.tsx               # Root layout and metadata
  loading.tsx              # Skeleton loading UI
  error.tsx                # Error boundary with retry
  globals.css              # Theme variables and shimmer animation
  icon.svg                 # GitHub favicon
  components/
    Navbar.tsx             # Header with avatar and dark mode toggle
    ProfileSidebar.tsx     # User profile card
    RepoList.tsx           # Search, sort, filter, pagination
    RepoCard.tsx           # Individual repository card
    SearchBar.tsx          # Repository name search
    Pagination.tsx         # Page navigation controls
    LanguageBadge.tsx      # Colored language indicator
    StatsBar.tsx           # Followers, following, repo count
    DarkModeToggle.tsx     # Theme switcher
    ThemeScript.tsx        # Prevents dark mode flash on load
    Footer.tsx
lib/
  github.ts                # GitHub API fetch helpers
  languages.ts             # GitHub linguist color mapping
  theme.ts                 # Dark mode utilities
types/
  github.ts                # TypeScript interfaces for API responses
```

**Separation of concerns**

- `lib/` — Data fetching and shared utilities
- `types/` — API response types
- `app/components/` — Presentational and interactive UI
- Server components fetch data; client components handle search, sort, filters, and theme

---

## Deployment

This app is designed for [Vercel](https://vercel.com):

1. Push the repository to GitHub
2. Import the project on [vercel.com/new](https://vercel.com/new)
3. Deploy — no environment variables required for public GitHub data

---

## Improvements Over GitHub's Profile Page

- Skeleton loading instead of a blank page
- Search repositories by name on the profile view
- Sort and filter controls in one place
- Paginated repo list for easier browsing
- Dark mode toggle with persisted preference

---

## License

This project is for educational and portfolio purposes.
