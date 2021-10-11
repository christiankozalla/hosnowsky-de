import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getContent, Page, Params } from "../lib/api";
import { Layout } from "../components/Layout";

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getContent("pages");
  const paths = pages.map((page: Page) => ({ params: { page: page.slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { page } = context.params as Params; // page will be defined
  const [pageContent] = await getContent(`pages?slug=${page}`);

  return {
    props: {
      page: pageContent,
      currentPathname: page,
    },
  };
};

const PageRoot: NextPage<{ page: Page; currentPathname: string }> = ({
  page,
  currentPathname,
}) => {
  return (
    <Layout currentPathname={currentPathname}>
      <h1>Hello from Page {page.slug}</h1>
      <h2 dangerouslySetInnerHTML={{ __html: page.title }} />
      <div dangerouslySetInnerHTML={{ __html: page.exerpt }} />
      <article dangerouslySetInnerHTML={{ __html: page.content }}></article>
    </Layout>
  );
};

export default PageRoot;
