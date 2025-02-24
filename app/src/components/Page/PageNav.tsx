import styled from "styled-components";
import PageColumn from "./PageColumn";

const PageNavWrapper = styled.nav`
  font-size: 1.5em;
  padding: 1.5em 0;
`;

const PageNav = () => {
  return (
    <PageColumn>
      <PageNavWrapper>Hello,</PageNavWrapper>
    </PageColumn>
  );
};

export default PageNav;
