import { Card } from "./Card";
import { getPosts } from "./getPosts";
export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="space-y-10">
      <div className="flex gap-10 items-center flex-col md:flex-row">
        <img
          alt="avatar"
          className="rounded-full w-32"
          src="/avatar.webp"
        />
        <div className="space-y-5 dark:text-gray-400 text-gray-600 leading-8">
          <p>
            As a technology enthusist and experienced Engineering Lead /
            Architect, I enjoy designing and delivering frontend and backend
            solutions. My expertise lies in leveraging Single Page Applications
            (SPAs), Meta frameworks, and monorepo frontend technologies. For
            backend architectures, I focus on building scalable, event-driven
            microservices using event sourcing principles.
          </p>
        </div>
      </div>
      <div>
        <h2 className="mb-10 font-semibold text-xl">Recently Published</h2>

        <div className="grid max-sm:place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-center gap-8">
          {posts.map((post) => (
            <Card
              key={post.key}
              imageUrl={post.cardImage}
              title={post.title}
              url={post.url}
              description={post.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
