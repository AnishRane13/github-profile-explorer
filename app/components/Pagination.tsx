"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

function getPageNumbers(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | "ellipsis")[] = [1];

  if (current > 3) pages.push("ellipsis");

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (current < total - 2) pages.push("ellipsis");

  pages.push(total);
  return pages;
}

const buttonBase =
  "inline-flex h-8 min-w-8 items-center justify-center rounded-md border px-2 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50";

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalItems);
  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <nav
      className="flex flex-col items-center gap-4 border-t border-gh-border pt-4 sm:flex-row sm:justify-between"
      aria-label="Repository pagination"
    >
      <p className="text-sm text-gh-muted">
        Showing{" "}
        <span className="font-medium text-gh-text">
          {start}–{end}
        </span>{" "}
        of{" "}
        <span className="font-medium text-gh-text">{totalItems}</span>{" "}
        repositories
      </p>

      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${buttonBase} border-gh-border bg-gh-bg-secondary text-gh-text hover:bg-gh-bg-tertiary`}
          aria-label="Previous page"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 16 16" aria-hidden>
            <path d="M9.78 12.78a.75.75 0 01-1.06 0L4.47 8.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 1.06L6.06 7.5h6.19a.75.75 0 010 1.5H6.06l2.72 2.72a.75.75 0 010 1.06z" />
          </svg>
        </button>

        {pages.map((page, index) =>
          page === "ellipsis" ? (
            <span
              key={`ellipsis-${index}`}
              className="px-1 text-sm text-gh-muted"
              aria-hidden
            >
              …
            </span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              aria-label={`Page ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
              className={`${buttonBase} ${
                page === currentPage
                  ? "border-gh-link bg-gh-link font-medium text-white"
                  : "border-gh-border bg-gh-bg-secondary text-gh-text hover:bg-gh-bg-tertiary"
              }`}
            >
              {page}
            </button>
          )
        )}

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${buttonBase} border-gh-border bg-gh-bg-secondary text-gh-text hover:bg-gh-bg-tertiary`}
          aria-label="Next page"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 16 16" aria-hidden>
            <path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8.5H3.75a.75.75 0 010-1.5h6.19L6.22 4.28a.75.75 0 010-1.06z" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
