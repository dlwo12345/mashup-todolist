import React, { useCallback } from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

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

interface HooksTodoItemProps {
  toggleTodo: any;
  removeTodo: any;
  id: any;
  done: any;
  text: any;
}

const HooksTodoItem = ({
  toggleTodo,
  removeTodo,
  id,
  done,
  text,
}: HooksTodoItemProps) => {
  const handleToggle = () => {
    toggleTodo(id);
  };

  const handleRemove = () => {
    removeTodo(id);
  };

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={handleToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={handleRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
};

export default React.memo(HooksTodoItem);
