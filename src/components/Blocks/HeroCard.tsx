import Image from "next/image";
import { PageColumnHeader } from "../Page/PageColumn";
import Card from "./Card";
import Link from "next/link";

import dmitri from "@/images/dmitri.jpg"

const HeroCard = () => (
  <PageColumnHeader>
    <Image src={dmitri} alt="Dmitri" width={200} height={200} priority />
    <Card>
      <span>my name is</span>
      <h1>Dmitri Tcherbadji</h1>
      <h2>
        you can reach me at{" "}
        <Link href={"mailto:d@analog.cafe"}>d@analog.cafe</Link>
      </h2>
    </Card>
  </PageColumnHeader>
);

export default HeroCard;
