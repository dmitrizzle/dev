import PageColumn, { PageColumnHeader } from "@/components/Page/PageColumn";
import PageHeader from "@/components/Page/PageNav";
import PageMain from "@/components/Page/PageMain";
import Card from "@/components/Blocks/Card";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
          <h3>Full-stack web developer.</h3>
          <h4>
            20+ years in startup and corporate environments (WebMD, Kobo).
          </h4>
          <section>
            <p>
              <strong>
                I specialize in building web front-end applications
              </strong>{" "}
              (Next.js/React.js/Node.js/Express) with production experience in
              MongoDB, Redis, Docker, AWS and more.
            </p>
            <p>
              <strong>TL;DR:</strong> I build custom websites that scale using
              modern technology from start to finish or as a part of a team.
            </p>
            <p>
              <Link href={"https://github.com/dmitrizzle/dev"} target={"_blank"}>
                See the code I used to build this page with on GitHub
              </Link>
              .
            </p>
          </section>
          <section>
            <h3>Experience.</h3>
            <h4>
              <strong>WebMD</strong> 2019-2024
            </h4>
            <p>
              <strong>Senior Software Engineer.</strong>
            </p>
            <p>
              After my exit with QxMD, I continued my role at WebMD with
              integration and compliance responsibilities on the same stack but
              with more diverse APIs, codebases, management software, and
              stakeholders.
            </p>
            <p>
              My side quest was a ChatGPT integration (complete with a front-end
              based on my own open-source project) that allowed visitors to
              perform conversational searches on a database of scientific paper
              abstracts.
            </p>
          </section>
        </PageColumn>
      </PageMain>
    </>
  );
};

export default Home;
