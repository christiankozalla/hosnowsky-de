import type { GetStaticProps, NextPage } from "next";
import { API_BASE_URL } from "../lib/api";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const Home: NextPage = () => {
  return <div>Hello from Home</div>;
};

export default Home;
