import React from "react";
import styled from "styled-components";
import HooksTodoItem from "./HooksTodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

interface HooksTodoListProps {
  todos: any;
  toggleTodo: any;
  removeTodo: any;
}

const HooksTodoList = ({
  toggleTodo,
  removeTodo,
  todos,
}: HooksTodoListProps) => {
  return (
    <TodoListBlock>
      {todos.map((todo: any) => (
        <HooksTodoItem
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          key={todo.id}
          {...todo}
        />
      ))}
    </TodoListBlock>
  );
};

export default React.memo(HooksTodoList);
