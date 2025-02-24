import styled from "styled-components";
import { Reset } from "styled-reset";
import PageHeader from "./PageHeader";

const PageMain = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <Reset />
      <PageHeader />
      {children}
    </>
  );
};

export default PageMain;
