import { generateTagIdFromText } from "@/utils/string";
import Link from "next/link";
import Markdown from "react-markdown";
import Image from "next/image";
import { MarkdownFigure } from "./PageColumn";

const MARKDOWN_COMPONENTS = {
  a(props: any) {
    // send all links from markdown files into a new tab
    const { href, children } = props;

    const isAnchorLink = href.startsWith("#");

    return (
      <Link
        href={href}
        target={isAnchorLink ? "_self" : "_blank"}
        className={isAnchorLink ? "anchor" : ""}
        onClick={(event) => {
          if (!isAnchorLink) return;
          event.preventDefault();

          // smooth scroll with anchor links
          const target = document.getElementById(href.replace("#", ""));
          if (target)
            target.scrollIntoView({
              behavior: "smooth",
              block: "start", // ensures that the heading we're scrolling to ends up at the top of the page, if possible
            });
        }}
      >
        {children}
      </Link>
    );
  },
  h3(props: any) {
    // generate ids for header tags for easy anchring
    const { children } = props;
    const id = generateTagIdFromText(children);

    return <h3 id={id}>{children}</h3>;
  },
  img(props: any) {
    const { alt, src, title } = props;

    // statically import image files so that Next.js can resize them for us
    const staticSrc = require(`../../images${src}`);

    return (
      <MarkdownFigure>
        {/* can not use figure or figcaption here because the Markdown tool inserts images into paragraphs */}
        <Image src={staticSrc} alt={alt} title={title} />
        <small>{title}</small>
      </MarkdownFigure>
    );
  },
};

// refactor
const MarkdownDigester = ({ md }: { md: string }) => (
  <Markdown components={MARKDOWN_COMPONENTS}>{md}</Markdown>
);

export default MarkdownDigester;
