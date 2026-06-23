import type { GitHubRepo, GitHubUser } from "@/types/github";

export const GITHUB_USERNAME = "anishrane13";
const REVALIDATE_SECONDS = 3600;

async function githubFetch<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "github-profile-explorer",
    },
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    if (res.status === 403 || res.status === 429) {
      throw new Error(
        "GitHub API rate limit exceeded. Please try again in a few minutes."
      );
    }
    if (res.status === 404) {
      throw new Error("GitHub user not found.");
    }
    throw new Error(`Failed to fetch from GitHub (${res.status}).`);
  }

  return res.json() as Promise<T>;
}

export async function getUser(
  username: string = GITHUB_USERNAME
): Promise<GitHubUser> {
  return githubFetch<GitHubUser>(`https://api.github.com/users/${username}`);
}

export async function getRepos(
  username: string = GITHUB_USERNAME
): Promise<GitHubRepo[]> {
  return githubFetch<GitHubRepo[]>(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=20`
  );
}
