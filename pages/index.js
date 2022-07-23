import Head from "next/head";
import { Banner, Header } from "../components";

export default function Home() {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />
      <main className='max-w-screen-2xl mx-auto bg-red-300'>
        <Banner />
      </main>
    </div>
  );
}
