import { MetaData } from "@/models";
import { postUtils } from "@/posts/postUtils";

const key = "fixing-flaky-automation-tests";
export const metadata: MetaData = {
  key,
  title: "Fixing Flaky Automation Tests",
  description: `Addressing intermittent automation test failures can be a complex problem to solve, lets explore a solution to the problem`,
  createDate: "2024-02-18",
  lastModifiedDate: "2024-02-18",
  openGraph: { images: postUtils.cardImagePath(key) },
};
