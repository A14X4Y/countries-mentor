import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Container from "./Container";
import { BsMoonStars, BsMoonStarsFill } from "react-icons/bs";
import useTheme from "../hooks/useTheme";

// const Header

const HeaderElement = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
`;

const Title = styled.a.attrs({
  href: "/",
})`
  color: var(--colors-text);
  font-size: car(----fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div``;

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <HeaderElement>
        <Container>
          <Wrapper>
            <Title>Where is the world?</Title>
            <ModeSwitcher onClick={toggleTheme}>
              <BsMoonStars /> LightTheme
            </ModeSwitcher>
          </Wrapper>
        </Container>
      </HeaderElement>
    </div>
  );
};

export default Header;
