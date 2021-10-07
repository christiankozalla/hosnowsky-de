import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getContent, Page } from "../lib/api";

export const getStaticProps: GetStaticProps = async () => {
  const pages = await getContent("pages");

  return {
    props: {
      pages,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getContent("pages");

  const paths = pages.map((page: any) => ({ params: { page: page.slug } }));

  return {
    paths,
    fallback: false,
  };
};

const PageRoot: NextPage<{ pages: Page[] }> = ({ pages }) => {
  return (
    <div>
      Hello from Page
      <div>
        {pages.map((page) => (
          <div key={page.id}>
            <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
            <article
              dangerouslySetInnerHTML={{ __html: page.content }}
            ></article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageRoot;
