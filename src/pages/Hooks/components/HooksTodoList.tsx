import React from "react";
import styled from "styled-components";
import HooksTodoItem from "./HooksTodoItem";
import { Itodo } from "../HooksTodoService";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

interface HooksTodoListProps {
  todos: Itodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const HooksTodoList = ({
  toggleTodo,
  removeTodo,
  todos,
}: HooksTodoListProps) => {
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <HooksTodoItem
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          key={todo.id}
          todo={todo}
        />
      ))}
    </TodoListBlock>
  );
};

export default React.memo(HooksTodoList);
