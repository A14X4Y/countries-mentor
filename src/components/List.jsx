import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  width: 100%;
  padding: 2rem 0;

  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: 2.5rem 0;
  }
  @media (max-width 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
`;

const List = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default List;
