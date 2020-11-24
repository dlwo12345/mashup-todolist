import React from 'react';
import styled from 'styled-components';
import ContextTodoItem from './ContextTodoItem';
import {useTodoState} from '../state';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function ContextTodoList() {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <ContextTodoItem key={todo.id} {...todo} />
      ))}
    </TodoListBlock>
  );
}

export default ContextTodoList;
