import React from "react";
import { createGlobalStyle } from "styled-components";
import Nav from "../../components/Nav";

import { RecoilRoot } from "recoil";
import MobxTodoHead from "./components/MobxTodoHead";
import MobxTodoTemplate from "./components/MobxTodoTemplate";
import MobxTodoList from "./components/MobxTodoList";
import MobxTodoCreate from "./components/MobxTodoCreate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const MobxTodoContainer = () => {
  return (
    <RecoilRoot>
      <Nav />
      <GlobalStyle />
      <MobxTodoTemplate>
        <MobxTodoHead />
        <MobxTodoList />
        <MobxTodoCreate />
      </MobxTodoTemplate>
    </RecoilRoot>
  );
};

export default MobxTodoContainer;
