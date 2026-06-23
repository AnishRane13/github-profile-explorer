"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  resultCount: number;
  totalCount: number;
}

export default function SearchBar({
  value,
  onChange,
  resultCount,
  totalCount,
}: SearchBarProps) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full sm:max-w-md">
        <svg
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gh-muted"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="search"
          placeholder="Find a repository…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-md border border-gh-border bg-gh-bg-secondary py-2 pl-10 pr-4 text-sm text-gh-text placeholder:text-gh-muted focus:border-gh-link focus:outline-none focus:ring-1 focus:ring-gh-link"
          aria-label="Search repositories"
        />
      </div>
      {value && (
        <p className="text-sm text-gh-muted">
          {resultCount} of {totalCount} repositories
        </p>
      )}
    </div>
  );
}
