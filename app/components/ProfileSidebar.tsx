import Image from "next/image";
import type { GitHubUser } from "@/types/github";
import StatsBar from "./StatsBar";

interface ProfileSidebarProps {
  user: GitHubUser;
}

export default function ProfileSidebar({ user }: ProfileSidebarProps) {
  return (
    <aside className="w-full shrink-0 lg:w-72">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <Image
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          width={280}
          height={280}
          className="h-56 w-56 rounded-full border border-gh-border lg:h-64 lg:w-64"
          priority
        />

        <h1 className="mt-4 text-2xl font-semibold text-gh-text">
          {user.name ?? user.login}
        </h1>

        {user.name && (
          <p className="text-xl text-gh-muted">{user.login}</p>
        )}

        {user.bio && (
          <p className="mt-3 text-sm text-gh-text">{user.bio}</p>
        )}

        <div className="mt-4 w-full space-y-2 text-sm text-gh-muted">
          {user.company && (
            <p className="flex items-center justify-center gap-2 lg:justify-start">
              <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 16 16" aria-hidden>
                <path d="M1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.75.75 0 00-.111-.384l-2.25-3.5a.75.75 0 00-.633-.36H9.75V1.75A.25.25 0 009.5 1.5h-7a.25.25 0 00-.25.25v12.5a.25.25 0 00.25.25h2.268A1.768 1.768 0 011.75 16z" />
              </svg>
              {user.company}
            </p>
          )}

          {user.location && (
            <p className="flex items-center justify-center gap-2 lg:justify-start">
              <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 16 16" aria-hidden>
                <path d="m12.596 11.596l3.536 3.536-1.06 1.06-3.536-3.536A7.5 7.5 0 109.5 3.5a7.5 7.5 0 012.096 8.096zm-1.06-1.06A6 6 0 1110.5 4.5a6 6 0 01-1.06 6.04z" />
              </svg>
              {user.location}
            </p>
          )}

          {user.blog && (
            <p className="flex items-center justify-center gap-2 lg:justify-start">
              <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 16 16" aria-hidden>
                <path d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 000 4.95l1.25 1.25a.75.75 0 00-1.06-1.06l-1.25 1.25z" />
              </svg>
              <a
                href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`}
                target="_blank"
                rel="noopener noreferrer"
                className="truncate text-gh-link hover:underline"
              >
                {user.blog.replace(/^https?:\/\//, "")}
              </a>
            </p>
          )}
        </div>

        <div className="mt-4 w-full">
          <StatsBar
            followers={user.followers}
            following={user.following}
            repos={user.public_repos}
          />
        </div>

        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full rounded-md border border-gh-border bg-gh-bg-tertiary px-4 py-1.5 text-center text-sm font-medium text-gh-text transition-colors hover:bg-gh-border lg:w-auto"
        >
          View on GitHub
        </a>
      </div>
    </aside>
  );
}
