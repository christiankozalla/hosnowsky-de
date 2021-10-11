import { NextPage } from "next";
import { getContent, Page } from "../../lib/api";
import { Layout } from "../../components/Layout";

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
    <Layout currentPathname={"blogger"}>
      Hello from BlogPost
      <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
      <article dangerouslySetInnerHTML={{ __html: page.content }}></article>
    </Layout>
  );
};

export default BlogIndex;
