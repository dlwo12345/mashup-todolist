import React from 'react';
import {createGlobalStyle} from 'styled-components';
import ContextTodoCreate from '../components/context/ContextTodoCreate';
import ContextTodoHead from '../components/context/ContextTodoHead';
import ContextTodoList from '../components/context/ContextTodoList';
import ContextTodoTemplate from '../components/context/ContextTodoTemplate';
import Nav from '../components/Nav';
import {TodoProvider} from '../TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

export default () => {
  return (
    <>
      <Nav />
      <TodoProvider>
        <GlobalStyle />
        <ContextTodoTemplate>
          <ContextTodoHead />
          <ContextTodoList />
          <ContextTodoCreate />
        </ContextTodoTemplate>
      </TodoProvider>
    </>
  );
};
