export default function Loading() {
  return (
    <div className="min-h-screen bg-gh-bg">
      <header className="border-b border-gh-border bg-gh-bg-secondary">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="skeleton-shimmer h-8 w-48 rounded" />
          <div className="flex items-center gap-3">
            <div className="skeleton-shimmer h-9 w-9 rounded-md" />
            <div className="skeleton-shimmer h-8 w-8 rounded-full" />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
          <aside className="w-full shrink-0 lg:w-72">
            <div className="flex flex-col items-center lg:items-start">
              <div className="skeleton-shimmer h-56 w-56 rounded-full lg:h-64 lg:w-64" />
              <div className="skeleton-shimmer mt-4 h-7 w-40 rounded" />
              <div className="skeleton-shimmer mt-2 h-5 w-28 rounded" />
              <div className="skeleton-shimmer mt-4 h-12 w-full rounded" />
              <div className="skeleton-shimmer mt-4 h-5 w-full rounded" />
              <div className="skeleton-shimmer mt-2 h-5 w-3/4 rounded" />
              <div className="mt-4 flex w-full gap-4">
                <div className="skeleton-shimmer h-4 w-20 rounded" />
                <div className="skeleton-shimmer h-4 w-20 rounded" />
                <div className="skeleton-shimmer h-4 w-24 rounded" />
              </div>
            </div>
          </aside>

          <section className="min-w-0 flex-1 space-y-4">
            <div className="border-b border-gh-border pb-4">
              <div className="skeleton-shimmer mb-4 h-5 w-32 rounded" />
              <div className="skeleton-shimmer h-10 w-full max-w-md rounded-md" />
              <div className="mt-3 flex gap-3">
                <div className="skeleton-shimmer h-10 w-40 rounded-md" />
                <div className="skeleton-shimmer h-10 w-40 rounded-md" />
              </div>
            </div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="rounded-md border border-gh-border bg-gh-bg-secondary p-4"
              >
                <div className="skeleton-shimmer h-5 w-48 rounded" />
                <div className="skeleton-shimmer mt-3 h-4 w-full rounded" />
                <div className="skeleton-shimmer mt-2 h-4 w-2/3 rounded" />
                <div className="mt-4 flex gap-4">
                  <div className="skeleton-shimmer h-4 w-16 rounded" />
                  <div className="skeleton-shimmer h-4 w-12 rounded" />
                  <div className="skeleton-shimmer h-4 w-12 rounded" />
                  <div className="skeleton-shimmer h-4 w-24 rounded" />
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
