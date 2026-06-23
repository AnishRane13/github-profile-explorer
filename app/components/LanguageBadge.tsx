import { getLanguageColor } from "@/lib/languages";

interface LanguageBadgeProps {
  language: string | null;
}

export default function LanguageBadge({ language }: LanguageBadgeProps) {
  if (!language) return null;

  const color = getLanguageColor(language);

  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-gh-muted">
      <span
        className="inline-block h-3 w-3 rounded-full"
        style={{ backgroundColor: color }}
        aria-hidden
      />
      {language}
    </span>
  );
}
