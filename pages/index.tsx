import type { GetStaticProps, NextPage } from "next";
import { getContent, Page } from "../lib/api";
import { Layout } from "../components/Layout";

import SectionText, { Text } from "../components/SectionText";
import CallToAction from "../components/CallToAction";
import Jumbotron from "../components/Jumbotron";

export const getStaticProps: GetStaticProps = async () => {
  const page = {
    jumbotron: {
      image: {
        url: "https://i2.wp.com/www.hosnowsky.de/wordpress/wp-content/uploads/2021/10/Im-Sommer-Bearbeitet-2-scaled.jpg?fit=2560%2C1316&amp;ssl=1",
        alt: "Ein Kind pflückt Blumen",
      },
      decorator: {
        url: "https://i1.wp.com/www.hosnowsky.de/wordpress/wp-content/uploads/2021/01/cropped-Logo.png?fit=300%2C300&amp;ssl=1",
      },
    },
    text: {
      h1: "Echte Menschen",
      h2: "Paar- und Familienfotografie für Aue und Umgebung",
      paragraphs: [
        "Mein persönliches Ziel beim Fotografieren ist das Festhalten von Erinnerungen",
        "Daher fotografiere ich die Menschen am Liebsten, wie sie sind: natürlich mit ihren Familien, glücklich an besonderen Tagen oder begeistert bei ihrem Hobby - die dokumentarische Fotografie.",
        "Ich mache auch klassische Bilder von Paaren, die einander Vertrauen, von deren Hochzeit, von der Vorfreude eines Babybauchs über die Geburt und das maßlose Glück über ein Neugeborenes.",
      ],
    },
    callToAction: {
      text: "Mehr über mich",
      url: "/ueber-mich",
    },
  };
  return {
    props: {
      page,
    },
  };
};

const Home: NextPage<{
  page: {
    jumbotron: {
      image: { url: string; alt: string };
      decorator?: { url: string };
    };
    text: Text;
    callToAction: { text: string; url: string };
  };
}> = ({ page }) => {
  return (
    <Layout currentPathname={"/"}>
      <section role="main" style={{ marginTop: "70px" }}>
        <Jumbotron
          image={page.jumbotron.image}
          decorator={page.jumbotron.decorator}
        />
        <SectionText text={page.text} />
        <CallToAction callToAction={page.callToAction} />
      </section>
    </Layout>
  );
};

export default Home;
