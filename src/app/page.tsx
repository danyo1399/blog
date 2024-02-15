import { cookies } from "next/headers";
import { getSortedPostsData } from "../posts";
import { Card } from "./Card";

export default function Home() {
  const allPostsData = getSortedPostsData();
  return (
    <main className="space-y-10">
      <div className="flex gap-10 items-center flex-col md:flex-row">
        <img
          alt="avatar"
          className="rounded-full w-32"
          src="/android-chrome-192x192.png"
        />
        <div className="space-y-5 dark:text-gray-400 text-gray-600">
          <p>
            I&apos;m a technology enthusist with a passion for software
            development and architecture.
          </p>
          <p>
            In the frontend I use React with NextJS although i have architected
            frontend projects in Angular. I reach for tailwind for styling
            ,monorepos for code organisation, and headless components for the
            design systems I build.
          </p>
          <p>
            For the backend i focus on all things .net with a sprinkle of java
            and nodejs and a focus on event driven architectures using event
            sourcing with microservices hosted in K8s.
          </p>
        </div>
      </div>
      <div>
        <h2 className="mb-10 font-semibold text-xl">Recently Published</h2>

        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-center gap-8">
          <Card
            imageUrl="/blog-assets/fix-intermittent-tests/card.webp"
            title="Fixing Flaky Automation Tests"
            url="/fixing-flaky-automation-tests"
            description="How to identify and fix automation tests that do not pass or fail consistency"
          />
          <Card
            imageUrl="/blog-assets/fix-intermittent-tests/card.webp"
            title="Flaky Automation Tests"
            url="/fixing-flaky-automation-tests"
            description="How to identify and fix automation tests that do not pass or fail consistency"
          />
          <Card
            imageUrl="/blog-assets/fix-intermittent-tests/card.webp"
            title="Flaky Automation Tests"
            url="/fixing-flaky-automation-tests"
            description="How to identify and fix automation tests that do not pass or fail consistency"
          />
        </div>
      </div>
    </main>
  );
}
