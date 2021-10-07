import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { getContent, Page } from "../../lib/api";

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getContent("posts");

  return {
    props: {
      posts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getContent("posts");

  const paths = posts.map((post: any) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

const BlogPost: NextPage<{ posts: Page[] }> = ({ posts }) => {
  return (
    <div>
      Hello from BlogPost
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
            <article
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
