import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Head>
        <title>Vancouver Full-Stack Web Developer</title>
        <meta
          name="description"
          content="Dmitri builds quality, scalable web applications and interfaces in MERN."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Image src="/dmitri.jpg" alt="Dmitri" width={400} height={400} priority />
      </main>
    </>
  );
};

export default Home