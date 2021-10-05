import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { getPosts, Post } from "../../lib/api";

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://hosnowsky.de/wp-json/wp/v2/posts");
  const posts = await response.json();

  const paths = posts.map((post: any) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

const BlogPost: NextPage<{ posts: Post[] }> = ({ posts }) => {
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
