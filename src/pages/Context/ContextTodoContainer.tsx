import React from "react";
import { createGlobalStyle } from "styled-components";
import ContextTodoCreate from "./components/ContextTodoCreate";
import ContextTodoHead from "./components/ContextTodoHead";
import ContextTodoList from "./components/ContextTodoList";
import ContextTodoTemplate from "./components/ContextTodoTemplate";
import Nav from "../../components/Nav";
import { TodoProvider } from "./ContextTodoService";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const ContextTodoContainer = () => {
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

export default ContextTodoContainer;
