"use client";

import styled from "styled-components";

const StyledItem = styled.li`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 1.25rem;
  user-select: none;

  label {
    cursor: pointer;
  }

  input {
    width: 18px;
    aspect-ratio: 1;
  }

  input:checked + label {
    color: #576cbc;
    text-decoration: line-through;
  }
`;

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};

export default function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
}: TodoItemProps) {
  return (
    <StyledItem>
      <input
        type="checkbox"
        id={id}
        defaultChecked={complete}
        onChange={() => toggleTodo(id, complete)}
      />
      <label htmlFor={id}>{title}</label>
    </StyledItem>
  );
}
