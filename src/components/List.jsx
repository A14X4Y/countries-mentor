import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  width: 100%;
  padding: 2rem 0;

  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

const List = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default List;
