import { MetaData } from "@/models";

const blogRootPath = "./(blog)";
async function getData(title: string) {
  const key = title.replaceAll(" ", "-").toLowerCase();

  const { metadata }: { metadata: MetaData } = await import(
    `${blogRootPath}/${key}/meta`
  );
  const cardImage = `/blog-assets/${key}/card.png`;
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
  return [await getData("Fixing Flaky Automation Tests")];
}
