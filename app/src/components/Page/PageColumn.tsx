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
  }
`;

export const PageColumnHeader = styled.div`
  display: flex;
  margin-bottom: 1.5em;
`;

export default PageColumn;
