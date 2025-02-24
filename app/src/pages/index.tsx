import PageColumn, { PageColumnHeader } from "@/components/Page/PageColumn";
import PageMain from "@/components/Page/PageMain";
import Head from "next/head";
import DOC_INTRO from "@/docs/INTRO.md";
import DOC_EXPERIENCE from "@/docs/EXPERIENCE.md";
import HeroCard from "@/components/Blocks/HeroCard";
import MarkdownDigester from "@/components/Page/MarkdownDigester";

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
          {/* hard-coded in React */}
          <HeroCard />

          {/* static content in Markdown */}
          <section style={{ paddingTop: 0 }}>
            <MarkdownDigester md={DOC_INTRO} />
          </section>
          <section>
            <MarkdownDigester md={DOC_EXPERIENCE} />
          </section>

          {/* . */}
        </PageColumn>
      </PageMain>
    </>
  );
};

export default Home;
