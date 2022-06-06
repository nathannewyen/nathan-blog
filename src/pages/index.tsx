import * as React from "react";
import styled from "styled-components";
import { Layout } from "@components";

const StyledMainContainer = styled.main`
  padding: 80px;
`;

const IndexPage = () => {
  return (
    <StyledMainContainer>
      <Layout />
    </StyledMainContainer>
  );
};

export default IndexPage;
