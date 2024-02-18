import { MetaData } from "@/models";
import { postUtils } from "@/posts/postUtils";

const key = "the-lucky-days-sizing-guide-for-development-estimations";
export const metadata: MetaData = {
  key,
  title: "The Lucky Days Sizing Guide For Development Estimations",
  description: `The Lucky Days Sizing Guide offers a fresh perspective on the challenge sizing development work.`,
  createDate: "2024-02-18",
  lastModifiedDate: "2024-02-18",
  openGraph: { images: postUtils.cardImagePath(key)},
};
