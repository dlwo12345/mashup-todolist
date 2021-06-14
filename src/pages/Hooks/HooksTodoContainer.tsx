import { createGlobalStyle } from "styled-components";
import Nav from "../../components/Nav";

import HooksTodoHead from "./components/HooksTodoHead";
import HooksTodoTemplate from "./components/HooksTodoTemplate";
import HooksTodoList from "./components/HooksTodoList";
import HooksTodoCreate from "./components/HooksTodoCreate";
import { useTodo } from "./HooksTodoService";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const HooksTodoContainer = () => {
  const {
    todoState,
    nextIdState,
    incrementNextId,
    toggleTodo,
    removeTodo,
    createTodo,
  } = useTodo();
  return (
    <>
      <Nav />
      <GlobalStyle />
      <HooksTodoTemplate>
        <HooksTodoHead todos={todoState} />
        <HooksTodoList
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          todos={todoState}
        />
        <HooksTodoCreate
          nextId={nextIdState}
          createTodo={createTodo}
          incrementNextId={incrementNextId}
        />
      </HooksTodoTemplate>
    </>
  );
};

export default HooksTodoContainer;
