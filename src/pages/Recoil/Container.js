import React from 'react';
import {createGlobalStyle} from 'styled-components';
import Nav from '../../components/Nav';

import {RecoilRoot} from 'recoil';
import RecoilTodoHead from './components/RecoilTodoHead';
import RecoilTodoTemplate from './components/RecoilTodoTemplate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

export default () => {
  return (
    <RecoilRoot>
      <Nav />
      <GlobalStyle />
      <RecoilTodoTemplate>
        <RecoilTodoHead />
      </RecoilTodoTemplate>
    </RecoilRoot>
  );
};
