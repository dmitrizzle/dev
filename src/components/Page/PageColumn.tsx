import styled from "styled-components";

const PageColumn = styled.div`
  max-width: 40em;
  margin: 0 auto;
  padding: 0 1.5em;

  section {
    padding: 1.5em 0;
  }
  img {
    border-radius: 1.5em;
    height: auto;
    @media (max-width: 420px) {
      width: 100px;
      height: 100px;
    }
  }
`;

export const MarkdownFigure = styled.span`
  img {
    max-width: 100%;
    width: 100%;
    height: auto;
  }
  margin-top: 6em;
  
  text-align: center;
  > small {
    opacity: .5;
    font-size: .8em;
    display: block;
  }
`;

export const PageColumnHeader = styled.div`
  display: flex;
  margin-bottom: 1.5em;
`;

export default PageColumn;
