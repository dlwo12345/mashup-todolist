import React from "react";
import styled from "styled-components";
import MobxTodoItem from "./MobxTodoItem";
import { todoState } from "../MobxTodoService";
import { useRecoilValue } from "recoil";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function MobxTodoList() {
  const todos = useRecoilValue(todoState);

  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <MobxTodoItem key={todo.id} {...todo} />
      ))}
    </TodoListBlock>
  );
}

export default React.memo(MobxTodoList);
