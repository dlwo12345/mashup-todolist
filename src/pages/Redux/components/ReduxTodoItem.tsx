import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { Itodo } from "../ReduxTodoService";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle: any = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props: any) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text: any = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props: any) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

interface ReduxTodoItemProps {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  todo: Itodo;
}

const ReduxTodoItem = ({
  toggleTodo,
  removeTodo,
  todo,
}: ReduxTodoItemProps) => {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleRemove = () => {
    removeTodo(todo.id);
  };

  return (
    <TodoItemBlock>
      <CheckCircle done={todo.done} onClick={handleToggle}>
        {todo.done && <MdDone />}
      </CheckCircle>
      <Text done={todo.done}>{todo.text}</Text>
      <Remove onClick={handleRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
};

export default React.memo(ReduxTodoItem);
