"use client";

import { styled } from "styled-components";

const StyledForm = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  input {
    background: transparent;
    outline: none;
    border: 1px solid #a5d7e8;
    padding: 1rem;
    border-radius: 10px;

    &:focus {
      border: 1px solid white;
    }
  }

  .buttons {
    display: flex;
    flex-direction: row-reverse;
    gap: 1rem;

    button {
      outline: none;
    }

    & > * {
      font-size: 1rem;
      cursor: pointer;
      padding: 0.75rem 1rem;
      border-radius: 5px;
      border: 1px solid #576cbc;
      background: transparent;
      transition: background 500ms;

      &:hover {
        background: #576cbc;
      }
    }
  }
`;

export default StyledForm;
