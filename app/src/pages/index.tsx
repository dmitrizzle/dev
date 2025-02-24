import PageColumn, { PageColumnHeader } from "@/components/Page/PageColumn";
import PageHeader from "@/components/Page/PageHeader";
import PageMain from "@/components/Page/PageMain";
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
      <PageMain>
        <PageColumn>
          <PageColumnHeader>
            <Image
              src="/dmitri.jpg"
              alt="Dmitri"
              width={200}
              height={200}
              priority
            />
            <div>
              <h1>Dmitri Tcherbadji</h1>
              <h2>d@analog.cafe</h2>
            </div>
          </PageColumnHeader>
        </PageColumn>
      </PageMain>
    </>
  );
};

export default Home;
