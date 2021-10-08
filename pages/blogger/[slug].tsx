import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { getContent, Page, Params } from "../../lib/api";

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Params;
  const [post] = await getContent(`posts?slug=${slug}`);

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getContent("posts");
  const paths = posts.map((post: Page) => ({ params: { slug: post.slug } }));

  return {
    paths,
    fallback: false,
  };
};

const BlogPost: NextPage<{ post: Page }> = ({ post }) => {
  return (
    <div>
      Hello from BlogPost
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
      <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
    </div>
  );
};

export default BlogPost;
