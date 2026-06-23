export default function ThemeScript() {
  const script = `
    (function () {
      try {
        var theme = localStorage.getItem("theme");
        var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        var isDark = theme === "dark" || (!theme && prefersDark);
        document.documentElement.classList.toggle("dark", isDark);
      } catch (e) {}
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
