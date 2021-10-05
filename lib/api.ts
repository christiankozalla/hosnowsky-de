export type Post = {
  id: number;
  date: string;
  slug: string;
  status: string;
  title: string;
  content: string;
  exerpt: string;
};

export const getPosts = async (): Promise<Post[]> => {
  const response = await fetch("https://hosnowsky.de/wp-json/wp/v2/posts");
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
