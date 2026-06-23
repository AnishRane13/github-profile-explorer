"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { GitHubRepo } from "@/types/github";
import Pagination from "./Pagination";
import RepoCard from "./RepoCard";
import SearchBar from "./SearchBar";

type SortOption = "updated" | "name" | "stars";
type TypeOption = "all" | "public" | "private" | "forks" | "archived";

interface RepoListProps {
  repos: GitHubRepo[];
  totalRepoCount: number;
}

const REPOS_PER_PAGE = 10;

const selectClassName =
  "rounded-md border border-gh-border bg-gh-bg-secondary px-3 py-2 text-sm text-gh-text focus:border-gh-link focus:outline-none focus:ring-1 focus:ring-gh-link";

export default function RepoList({ repos, totalRepoCount }: RepoListProps) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortOption>("updated");
  const [language, setLanguage] = useState("all");
  const [type, setType] = useState<TypeOption>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const listRef = useRef<HTMLDivElement>(null);

  const languages = useMemo(() => {
    const langs = new Set(
      repos.map((repo) => repo.language).filter((lang): lang is string => !!lang)
    );
    return Array.from(langs).sort();
  }, [repos]);

  const filteredRepos = useMemo(() => {
    let result = repos;

    const normalized = query.trim().toLowerCase();
    if (normalized) {
      result = result.filter((repo) =>
        repo.name.toLowerCase().includes(normalized)
      );
    }

    if (language !== "all") {
      result = result.filter((repo) => repo.language === language);
    }

    switch (type) {
      case "forks":
        result = result.filter((repo) => repo.fork);
        break;
      case "archived":
        result = result.filter((repo) => repo.archived);
        break;
      case "public":
        result = result.filter((repo) => !repo.private);
        break;
      case "private":
        result = result.filter((repo) => repo.private);
        break;
      case "all":
      default:
        break;
    }

    return [...result].sort((a, b) => {
      switch (sort) {
        case "name":
          return a.name.localeCompare(b.name);
        case "stars":
          return b.stargazers_count - a.stargazers_count;
        case "updated":
        default:
          return (
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          );
      }
    });
  }, [repos, query, language, type, sort]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredRepos.length / REPOS_PER_PAGE)
  );

  const paginatedRepos = useMemo(() => {
    const start = (currentPage - 1) * REPOS_PER_PAGE;
    return filteredRepos.slice(start, start + REPOS_PER_PAGE);
  }, [filteredRepos, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [query, sort, language, type]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  function handlePageChange(page: number) {
    setCurrentPage(page);
    listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const hasActiveFilters =
    query.trim() !== "" || language !== "all" || type !== "all";

  return (
    <div ref={listRef} className="space-y-4">
      <nav
        className="border-b border-gh-border"
        aria-label="Profile sections"
      >
        <div className="inline-flex items-center gap-2 border-b-2 border-[#fd8c73] px-1 pb-3 text-sm font-semibold text-gh-text">
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden
          >
            <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8v-4.5a2.5 2.5 0 015 0V5.5a.75.75 0 001.5 0V4.5a4 4 0 00-8 0v4.75a.75.75 0 01-1.5 0V4.5A2.5 2.5 0 014.5 2h7z" />
          </svg>
          Repositories
          <span className="rounded-full border border-gh-border bg-gh-bg px-2 py-0.5 text-xs font-normal text-gh-muted">
            {totalRepoCount}
          </span>
        </div>
      </nav>

      <div className="pb-4">
        <SearchBar
          value={query}
          onChange={setQuery}
          resultCount={filteredRepos.length}
          totalCount={repos.length}
        />

        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <label className="flex items-center gap-2 text-sm text-gh-muted">
            <span className="shrink-0">Type:</span>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as TypeOption)}
              className={selectClassName}
              aria-label="Filter by repository type"
            >
              <option value="all">All</option>
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="forks">Forks</option>
              <option value="archived">Archived</option>
            </select>
          </label>

          <label className="flex items-center gap-2 text-sm text-gh-muted">
            <span className="shrink-0">Sort by:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className={selectClassName}
              aria-label="Sort repositories"
            >
              <option value="updated">Last updated</option>
              <option value="name">Name</option>
              <option value="stars">Stars</option>
            </select>
          </label>

          <label className="flex items-center gap-2 text-sm text-gh-muted">
            <span className="shrink-0">Language:</span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className={selectClassName}
              aria-label="Filter by language"
            >
              <option value="all">All languages</option>
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {filteredRepos.length === 0 ? (
        <div className="rounded-md border border-gh-border bg-gh-bg-secondary p-8 text-center">
          <svg
            className="mx-auto h-10 w-10 text-gh-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <p className="mt-3 text-sm font-medium text-gh-text">
            {query.trim()
              ? "No repositories match your search"
              : type === "private"
                ? "No private repositories to show"
                : type === "archived"
                  ? "No archived repositories found"
                  : type === "forks"
                    ? "No forked repositories found"
                    : language !== "all"
                      ? `No repositories found for ${language}`
                      : "No repositories found"}
          </p>
          {hasActiveFilters && (
            <p className="mt-1 text-sm text-gh-muted">
              Try adjusting your search or filters
            </p>
          )}
        </div>
      ) : (
        <>
          <div className="grid gap-4">
            {paginatedRepos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredRepos.length}
            pageSize={REPOS_PER_PAGE}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}
