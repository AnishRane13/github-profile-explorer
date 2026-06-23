import { getRepos, getUser } from "@/lib/github";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProfileSidebar from "./components/ProfileSidebar";
import RepoList from "./components/RepoList";

export default async function Home() {
  const [user, repos] = await Promise.all([getUser(), getRepos()]);

  return (
    <div className="flex min-h-screen flex-col bg-gh-bg text-gh-text">
      <Navbar user={user} />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
          <ProfileSidebar user={user} />
          <section className="min-w-0 flex-1">
            <RepoList repos={repos} totalRepoCount={user.public_repos} />
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
}
