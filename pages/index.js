import Head from "next/head";
import { Banner, Header, ProductFeed } from "../components";

export default function Home({ products }) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />
      <main className='max-w-screen-2xl mx-auto '>
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const products = await fetch("https://fakestoreapi.com/products").then(
    (response) => response.json()
  );

  return { props: { products } };
}
