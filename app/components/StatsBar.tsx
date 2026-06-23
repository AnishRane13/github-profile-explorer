interface StatsBarProps {
  followers: number;
  following: number;
  repos: number;
}

function formatCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  }
  return count.toString();
}

export default function StatsBar({
  followers,
  following,
  repos,
}: StatsBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-gh-muted">
      <span>
        <strong className="font-semibold text-gh-text">{formatCount(followers)}</strong>{" "}
        followers
      </span>
      <span>
        <strong className="font-semibold text-gh-text">{formatCount(following)}</strong>{" "}
        following
      </span>
      <span>
        <strong className="font-semibold text-gh-text">{repos}</strong> repositories
      </span>
    </div>
  );
}
