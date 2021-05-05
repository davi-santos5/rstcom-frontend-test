import React, { ReactNode, useState } from "react";
import styled from "styled-components";

type ItemProps = {
  done: boolean;
};

const ListItem = styled.li<ItemProps>`
  min-width: 10rem;
  margin-bottom: 1.125rem;
  padding-left: 0.5rem;

  display: flex;
  align-items: center;

  color: var(--gray-200);
  font-size: 1rem;
  vertical-align: middle;

  position: relative;

  ::after {
    content: "";
    height: 1px;
    width: 10rem;
    background-color: var(--gray-100);
    position: absolute;
    left: 0;
    display: ${(props) => (props.done ? "block" : "none")};
  }
`;

const Square = styled.div<ItemProps>`
  min-width: 1rem;
  height: 1rem;
  margin-right: 0.875rem;
  background-color: ${(props) => (props.done ? "var(--green)" : "white")};
  border: 1px solid var(--gray-200);
  cursor: pointer;
`;

const RemoveButton = styled.button`
  margin-left: 0.875rem;
  align-self: bottom;

  background: transparent;
  color: var(--red);

  border: 0;
  outline: 0;

  font-size: 0.75rem;
  text-decoration: underline;
`;

type TodoItemProps = {
  key: string;
  children: ReactNode;
};

export const TodoItem = ({ key, children }: TodoItemProps) => {
  const [isDone, setIsDone] = useState(false);

  const handleRemoveItem = () => {
    setIsDone(!isDone);
  };

  return (
    <ListItem key={key} done={isDone} onClick={handleRemoveItem}>
      <Square done={isDone} />
      {children}
      {!isDone && (
        <RemoveButton onClick={handleRemoveItem}>remover</RemoveButton>
      )}
    </ListItem>
  );
};
