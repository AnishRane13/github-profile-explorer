export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gh-border py-6">
      <p className="text-center text-sm text-gh-muted">
        Built with{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gh-link hover:underline"
        >
          Next.js
        </a>
        {" · "}
        Data from{" "}
        <a
          href="https://docs.github.com/en/rest"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gh-link hover:underline"
        >
          GitHub API
        </a>
      </p>
    </footer>
  );
}
