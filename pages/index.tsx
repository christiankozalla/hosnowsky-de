import type { GetStaticProps, NextPage } from "next";
import { getContent, Page } from "../lib/api";
import { Layout } from "../components/Layout";

export const getStaticProps: GetStaticProps = async () => {
  const [pageContent] = await getContent("pages?slug=home");

  return {
    props: {
      page: pageContent,
    },
  };
};

const Home: NextPage<{ page: Page }> = ({ page }) => {
  return (
    <Layout currentPathname={"/"}>
      <section
        role="main"
        dangerouslySetInnerHTML={{ __html: page.content }}
      ></section>
    </Layout>
  );
};

export default Home;
