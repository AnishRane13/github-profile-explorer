export default function Loading() {
  return (
    <div className="min-h-screen bg-gh-bg">
      <header className="border-b border-gh-border bg-gh-bg-secondary">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="h-8 w-48 animate-pulse rounded bg-gh-bg-tertiary" />
          <div className="h-9 w-9 animate-pulse rounded-md bg-gh-bg-tertiary" />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
          {/* Sidebar skeleton */}
          <aside className="w-full shrink-0 lg:w-72">
            <div className="flex flex-col items-center lg:items-start">
              <div className="h-56 w-56 animate-pulse rounded-full bg-gh-bg-tertiary lg:h-64 lg:w-64" />
              <div className="mt-4 h-7 w-40 animate-pulse rounded bg-gh-bg-tertiary" />
              <div className="mt-2 h-5 w-28 animate-pulse rounded bg-gh-bg-tertiary" />
              <div className="mt-4 h-12 w-full animate-pulse rounded bg-gh-bg-tertiary" />
              <div className="mt-4 h-5 w-full animate-pulse rounded bg-gh-bg-tertiary" />
              <div className="mt-2 h-5 w-3/4 animate-pulse rounded bg-gh-bg-tertiary" />
              <div className="mt-4 flex w-full gap-4">
                <div className="h-4 w-20 animate-pulse rounded bg-gh-bg-tertiary" />
                <div className="h-4 w-20 animate-pulse rounded bg-gh-bg-tertiary" />
                <div className="h-4 w-24 animate-pulse rounded bg-gh-bg-tertiary" />
              </div>
            </div>
          </aside>

          {/* Repos skeleton */}
          <section className="min-w-0 flex-1 space-y-4">
            <div className="border-b border-gh-border pb-4">
              <div className="mb-4 h-5 w-32 animate-pulse rounded bg-gh-bg-tertiary" />
              <div className="h-10 w-full max-w-md animate-pulse rounded-md bg-gh-bg-tertiary" />
            </div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse rounded-md border border-gh-border bg-gh-bg-secondary p-4"
              >
                <div className="h-5 w-48 rounded bg-gh-bg-tertiary" />
                <div className="mt-3 h-4 w-full rounded bg-gh-bg-tertiary" />
                <div className="mt-2 h-4 w-2/3 rounded bg-gh-bg-tertiary" />
                <div className="mt-4 flex gap-4">
                  <div className="h-4 w-16 rounded bg-gh-bg-tertiary" />
                  <div className="h-4 w-12 rounded bg-gh-bg-tertiary" />
                  <div className="h-4 w-24 rounded bg-gh-bg-tertiary" />
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
