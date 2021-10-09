import type { GetStaticProps, NextPage } from "next";
import { getContent, Page, Params } from "../lib/api";

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
    <div>
      <h1>Hello from Page {page.slug}</h1>
      <h2 dangerouslySetInnerHTML={{ __html: page.title }} />
      <div dangerouslySetInnerHTML={{ __html: page.exerpt }} />
      <article dangerouslySetInnerHTML={{ __html: page.content }}></article>
    </div>
  );
};

export default Home;
