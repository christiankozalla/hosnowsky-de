export type Page = {
  id: number;
  date: string;
  slug: string;
  status: string;
  title: string;
  content: string;
  exerpt: string;
};

export type ContentCategory = "pages" | "posts" | "media";

export const API_BASE_URL = "https://hosnowsky.de/wp-json/wp/v2";

export const getContent = async (
  category: ContentCategory
): Promise<Page[]> => {
  const response = await fetch(`${API_BASE_URL}/${category}`);
  const rawPosts = await response.json();

  const posts = rawPosts.map((post: any) => ({
    id: post.id,
    date: post.date,
    slug: post.slug,
    status: post.status,
    title: post.title.rendered,
    content: post.content.rendered,
    exerpt: post.excerpt.rendered,
  }));
  return posts;
};
