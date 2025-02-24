import PageColumn, { PageColumnHeader } from "@/components/Page/PageColumn";
import PageMain from "@/components/Page/PageMain";
import Card from "@/components/Blocks/Card";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import DOC_INTRO from "@/docs/INTRO.md";
import DOC_EXPERIENCE from "@/docs/EXPERIENCE.md";

const MARKDOWN_COMPONENTS = {
  a(props: any) {
    const { href, children, ...rest } = props;
    return (
      <Link href={href} target="_blank">
        {children}
      </Link>
    );
  },
};

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
            <Card>
              <span>my name is</span>
              <h1>Dmitri Tcherbadji</h1>
              <h2>
                you can reach me at{" "}
                <Link href={"mailto:d@analog.cafe"}>d@analog.cafe</Link>
              </h2>
            </Card>
          </PageColumnHeader>
          <section style={{ paddingTop: 0 }}>
            <Markdown components={MARKDOWN_COMPONENTS}>{DOC_INTRO}</Markdown>
          </section>
          <section>
            <Markdown>{DOC_EXPERIENCE}</Markdown>
          </section>
        </PageColumn>
      </PageMain>
    </>
  );
};

export default Home;
