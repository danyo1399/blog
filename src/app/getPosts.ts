const blogRootPath = "./(blog)";
const cache: any = {};
async function getData(title: string) {
  const key = title.replaceAll(" ", "-").toLowerCase();
  if (cache[key] == null) {
    // const { meta }: any = await import(pagePath);
    const { meta }: any = await import(`${blogRootPath}/${key}/meta`);
    // const { meta }: any = await import(
    //   "./(blog)/fixing-flaky-automation-tests/meta"
    // );
    cache[key] = meta;
  }
  const meta = cache[key];
  const cardImage = `/blog-assets/${key}/card.png`;
  return {
    title: meta.title,
    description: meta.description,
    url: `/${key}`,
    cardImage,
    key,
  };
}

export async function getPosts() {
  return [await getData("Fixing Flaky Automation Tests")];
}
