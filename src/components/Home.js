import React from "react";

import Header from "./Header";
import Content from "./Content";
import styled from "@emotion/styled";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

export const Home = () => {
  return (
    <Container>
      <Header />
      <Content />
    </Container>
  );
};
