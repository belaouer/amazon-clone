import Head from "next/head";
import Image from "next/image";
import { Header } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />
    </div>
  );
}
