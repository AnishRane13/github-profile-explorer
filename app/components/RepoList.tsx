"use client";

import { useMemo, useState } from "react";
import type { GitHubRepo } from "@/types/github";
import RepoCard from "./RepoCard";
import SearchBar from "./SearchBar";

interface RepoListProps {
  repos: GitHubRepo[];
}

export default function RepoList({ repos }: RepoListProps) {
  const [query, setQuery] = useState("");

  const filteredRepos = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return repos;
    return repos.filter((repo) =>
      repo.name.toLowerCase().includes(normalized)
    );
  }, [repos, query]);

  return (
    <div className="space-y-4">
      <div className="border-b border-gh-border pb-4">
        <div className="mb-4 flex items-center gap-2">
          <svg
            className="h-4 w-4 text-gh-muted"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden
          >
            <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8v-4.5a2.5 2.5 0 015 0V5.5a.75.75 0 001.5 0V4.5a4 4 0 00-8 0v4.75a.75.75 0 01-1.5 0V4.5A2.5 2.5 0 014.5 2h7z" />
          </svg>
          <h2 className="text-sm font-semibold text-gh-text">Repositories</h2>
          <span className="rounded-full border border-gh-border px-2 py-0.5 text-xs text-gh-muted">
            {repos.length}
          </span>
        </div>
        <SearchBar
          value={query}
          onChange={setQuery}
          resultCount={filteredRepos.length}
          totalCount={repos.length}
        />
      </div>

      {filteredRepos.length === 0 ? (
        <div className="rounded-md border border-gh-border bg-gh-bg-secondary p-8 text-center">
          <p className="text-sm text-gh-muted">
            No repositories match &ldquo;{query}&rdquo;
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredRepos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </div>
  );
}
