import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  // just for mock the huge content
  const repeats = new Array(100).fill(0);
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      {repeats.map((x) => (
        <>
          <div className="text-3xl font-bold underline">Hello world! Test</div>
        </>
      ))}
    </Layout>
  );
};

export default Home;
