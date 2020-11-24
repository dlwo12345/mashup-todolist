import React from 'react';
import styled from 'styled-components';
import RecoilTodoItem from './RecoilTodoItem';
import {TodoState} from '../../TodoRecoil';
import {useRecoilValue} from 'recoil';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function RecoilTodoList() {
  const todos = useRecoilValue(TodoState);

  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <RecoilTodoItem key={todo.id} {...todo} />
      ))}
    </TodoListBlock>
  );
}

export default RecoilTodoList;
