import React from "react";
import { createGlobalStyle } from "styled-components";
import Nav from "../../components/Nav";

import { RecoilRoot } from "recoil";
import RecoilTodoHead from "./components/RecoilTodoHead";
import RecoilTodoTemplate from "./components/RecoilTodoTemplate";
import RecoilTodoList from "./components/RecoilTodoList";
import RecoilTodoCreate from "./components/RecoilTodoCreate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const RecoilTodoContainer = () => {
  return (
    <RecoilRoot>
      <Nav />
      <GlobalStyle />
      <RecoilTodoTemplate>
        <RecoilTodoHead />
        <RecoilTodoList />
        <RecoilTodoCreate />
      </RecoilTodoTemplate>
    </RecoilRoot>
  );
};

export default RecoilTodoContainer;
