import type { GitHubRepo } from "@/types/github";
import LanguageBadge from "./LanguageBadge";

interface RepoCardProps {
  repo: GitHubRepo;
}

function formatUpdatedDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function RepoCard({ repo }: RepoCardProps) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-md border border-gh-border bg-gh-bg-secondary p-4 transition-colors hover:border-gh-muted hover:bg-gh-bg-tertiary"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-gh-link group-hover:underline">
          {repo.name}
        </h3>
        {repo.fork && (
          <span className="shrink-0 rounded-full border border-gh-border px-2 py-0.5 text-xs text-gh-muted">
            Fork
          </span>
        )}
      </div>

      {repo.description && (
        <p className="mt-2 line-clamp-2 text-sm text-gh-muted">
          {repo.description}
        </p>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <LanguageBadge language={repo.language} />

        <span className="inline-flex items-center gap-1 text-xs text-gh-muted">
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden
          >
            <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
          </svg>
          {repo.stargazers_count}
        </span>

        <span className="inline-flex items-center gap-1 text-xs text-gh-muted">
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden
          >
            <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-.878a2.25 2.25 0 111.5 0v.878a2.25 2.25 0 01-2.25 2.25h-1.5v2.128a2.986 2.986 0 01-.624.746l-3.75 3.75a1.5 1.5 0 01-2.122 0l-3.75-3.75a2.986 2.986 0 01-.624-.746V9.372a2.25 2.25 0 111.5 0v.878a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75v-.878a2.25 2.25 0 11-1.5 0z" />
          </svg>
          {repo.forks_count}
        </span>

        <span className="text-xs text-gh-muted">
          Updated {formatUpdatedDate(repo.updated_at)}
        </span>
      </div>
    </a>
  );
}
