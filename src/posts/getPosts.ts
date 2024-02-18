import { MetaData } from "@/models";
import { postUtils } from "./postUtils";
import { metadata as fixingFlakyAutomationTests } from "../app/(blog)/fixing-flaky-automation-tests/meta";
import { metadata as luckyDays } from "../app/(blog)/the-lucky-days-sizing-guide-for-development-estimations/meta";

async function getData(metadata: MetaData) {
  const key = metadata.key;
  const cardImage = postUtils.cardImagePath(key);
  return {
    title: metadata.title,
    description: metadata.description,
    url: `/${key}`,
    cardImage,
    key,
    createDate: metadata.createDate,
    lastModifiedDate: metadata.lastModifiedDate,
  };
}

export async function getPosts() {
  return [
    await getData(fixingFlakyAutomationTests),
    await getData(luckyDays),
  ].reverse();
}
