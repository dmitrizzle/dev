import styled from "styled-components";
import { Reset } from "styled-reset";
import PageNav from "./PageNav";

// fonts
import "@fontsource/maple-mono";
import "@fontsource/permanent-marker";
import "@fontsource/zilla-slab-highlight/700.css";

const MainStyles = styled.div`
  font-size: 16px;
  line-height: 1.55em;
  font-family: "Maple Mono", monospace;

  @media(max-width: 500px){
    font-size: .8em;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: "Maple Mono", monospace;
    padding-bottom: 0.5em;
  }

  h1 {
    font-size: 2.5em;
    line-height: 1.15em;
    font-family: "Permanent Marker", cursive;
  }
  h2 {
    font-size: 1.25em;
    font-family: "Zilla Slab Highlight", serif;
  }
  h3,
  h4 {
    font-size: 1.5em;
        padding-top: 1.5em;

  }
  h3 {
    font-family: "Zilla Slab Highlight", serif;
  }


  a {
    color: #ed236e;
  }
  p {
    margin-bottom: 1.5em;
    strong {
      font-family: "Zilla Slab Highlight", serif;
    }
  }
`;

const PageMain = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <MainStyles>
      <Reset />
      <PageNav />
      {children}
    </MainStyles>
  );
};

export default PageMain;
