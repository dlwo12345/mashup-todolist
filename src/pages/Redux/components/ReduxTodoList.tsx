import React from "react";
import styled from "styled-components";
import ReduxTodoItem from "./ReduxTodoItem";
import { Itodo } from "../ReduxTodoService";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

interface ReduxTodoListProps {
  todos: Itodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const ReduxTodoList = ({
  toggleTodo,
  removeTodo,
  todos,
}: ReduxTodoListProps) => {
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <ReduxTodoItem
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          key={todo.id}
          todo={todo}
        />
      ))}
    </TodoListBlock>
  );
};

export default React.memo(ReduxTodoList);
