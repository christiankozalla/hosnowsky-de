import { ParsedUrlQuery } from "querystring";
export const API_BASE_URL = "https://hosnowsky.de/wp-json/wp/v2";

export type Page = {
  id: number;
  date: string;
  slug: string;
  status: string;
  title: string;
  content: string;
  exerpt: string;
};

export interface Params extends ParsedUrlQuery {
  page: Route;
  slug: string;
}

type Route =
  | "herbst"
  | "blogger"
  | "ueber-mich"
  | "gallerie"
  | "leistungen"
  | "home";

export type ContentCategory = "pages" | "posts" | "media";
export type PageRoutes = `pages?slug=${Route}`;

export const getContent = async (
  category: PageRoutes | ContentCategory | string
): Promise<Page[]> => {
  const response = await fetch(`${API_BASE_URL}/${category}`);
  const rawContent = await response.json();

  if (rawContent.slug === "blogger") {
    return [];
  }

  if (Array.isArray(rawContent)) {
    return rawContent.map<Page>((data: any) => ({
      id: data.id,
      date: data.date,
      slug: data.slug,
      status: data.status,
      title: data.title.rendered,
      content: data.content.rendered,
      exerpt: data.excerpt.rendered,
    }));
  } else {
    return [
      {
        id: rawContent.id,
        date: rawContent.date,
        slug: rawContent.slug,
        status: rawContent.status,
        title: rawContent.title.rendered,
        content: rawContent.content.rendered,
        exerpt: rawContent.exerpt.rendered,
      },
    ];
  }
};
