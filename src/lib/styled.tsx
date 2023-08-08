"use client";

import styled, { keyframes } from "styled-components";

const appears = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px);
  } to {
    opacity: 1;
    transform: translateX(10px);
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  text-shadow: 2px 5px 5px #ffffff73;

  h1 {
    font-size: 2.5rem;
    animation: ${appears} 750ms both;
  }

  a {
    border: 1px solid white;
    padding: 0.75rem 1.5rem;
    border-radius: 10px;
    background: transparent;
    transition: background 500ms;

    &:hover {
      background: #24569d;
    }
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 1rem 0 0;
  padding: unset;

  & > * {
    margin-bottom: 1rem;
  }
`;

export { Header, List };
