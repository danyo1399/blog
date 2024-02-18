import { MetaData } from "@/models";
const blogRootPath = "./(blog)";
async function getData(key: string) {
  const { metadata }: { metadata: MetaData } = await import(
    `${blogRootPath}/${key}/meta`
  );
  if (metadata.key !== key) {
    throw new Error(`key mismatch ${key} != ${metadata.key}`);
  }
  const cardImage = `/blog-assets/${key}/card.webp`;
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
    await getData("fixing-flaky-automation-tests"),
    await getData("the-lucky-days-sizing-guide-for-development-estimations"),
  ].reverse();
}
