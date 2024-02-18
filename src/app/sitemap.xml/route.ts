import { constants } from "@/constants";
import { getPosts } from "@/posts/getPosts";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export async function GET() {
  const posts = await getPosts();
  const postLinks = posts.map((x) => ({
    url: x.url,
    changefreq: "weekly",
    lastmod: x.lastModifiedDate,
  }));
  // An array with your links
  const links = [
    { url: "/", changefreq: "daily", priority: 0.3 },
    ...postLinks,
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: constants.hostname });

  // Return a promise that resolves with your XML string
  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(
    (data) => data.toString(),
  );
  return new Response(xml, { headers: { "Content-Type": "text/xml" } });
}
