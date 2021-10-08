import { NextPage } from "next";
import { getContent, Page } from "../../lib/api";

export const getStaticProps = async () => {
  const [page] = await getContent("pages?slug=blogger");

  return {
    props: {
      page,
    },
  };
};

const BlogIndex: NextPage<{ page: Page }> = ({ page }) => {
  return (
    <div>
      Hello from BlogPost
      <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
      <article dangerouslySetInnerHTML={{ __html: page.content }}></article>
    </div>
  );
};

export default BlogIndex;
