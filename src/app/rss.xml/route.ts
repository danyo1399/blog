import { constants } from "@/constants";
import { getPosts } from "@/posts/getPosts";
import rss from "rss";

export async function GET() {
  const posts = await getPosts();
  const feed = new rss({
    title: "Danyo's Blog Posts | RSS Feed",
    description: "Danyo's Blog",
    site_url: constants.hostname,
    feed_url: `${constants.hostname}/rss.xml`,
    image_url: `${constants.hostname}/ogimage.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, danyo`,
  });

  posts.forEach((x) => {
    feed.item({
      title: x.title,
      description: x.description,
      url: `${constants.hostname}/${x.url}`,
      date: x.createDate,
    });
  });
  const xml = feed.xml();
  return new Response(xml, { headers: { "Content-Type": "text/xml" } });
}
