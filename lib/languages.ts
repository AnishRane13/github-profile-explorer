const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Ruby: "#701516",
  PHP: "#4F5D95",
  C: "#555555",
  "C++": "#f34b7d",
  "C#": "#178600",
  Shell: "#89e051",
  Vue: "#41b883",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  Scala: "#c22d40",
  R: "#198CE7",
  Elixir: "#6e4a7e",
  Haskell: "#5e5086",
  Lua: "#000080",
  Perl: "#0298c3",
  Objective: "#438eff",
  "Objective-C": "#438eff",
  Clojure: "#db5855",
  Jupyter: "#DA5B0B",
  Dockerfile: "#384d54",
  Makefile: "#427819",
};

export function getLanguageColor(language: string | null): string {
  if (!language) return "#8b949e";
  return LANGUAGE_COLORS[language] ?? "#8b949e";
}
