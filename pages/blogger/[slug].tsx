import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { getContent, Page, Params } from "../../lib/api";
import { Layout } from "../../components/Layout";

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Params;
  const [post] = await getContent(`posts?slug=${slug}`);

  return {
    props: {
      post,
      currentPathname: slug,
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

const BlogPost: NextPage<{ post: Page; currentPathname: string }> = ({
  post,
  currentPathname,
}) => {
  return (
    <Layout currentPathname={currentPathname}>
      Hello from BlogPost
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
      <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
    </Layout>
  );
};

export default BlogPost;
