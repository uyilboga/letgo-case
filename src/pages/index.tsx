import Head from 'next/head';
import Stock from '../components/views/home/stock';
function Home() {
  return (
    <>
      <Head>
        <title>Letgo Case</title>
        <meta name="description" content="Letgo Case Study" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Stock />
      </main>
    </>
  );
}

export default Home;
