import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";
import todoStore from "../MobxTodoService";
import MobxTodoItem from "./MobxTodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const MobxTodoList = observer(() => {
  const todos = todoStore.todoState;

  return (
    <TodoListBlock>
      {todos.map((todo: any) => (
        <MobxTodoItem key={todo.id} {...todo} />
      ))}
    </TodoListBlock>
  );
});

export default React.memo(MobxTodoList);
