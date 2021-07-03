import { createGlobalStyle } from "styled-components";
import Nav from "../../components/Nav";

import ReduxTodoHead from "./components/ReduxTodoHead";
import ReduxTodoTemplate from "./components/ReduxTodoTemplate";
import ReduxTodoList from "./components/ReduxTodoList";
import ReduxTodoCreate from "./components/ReduxTodoCreate";
import { useTodo } from "./ReduxTodoService";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const ReduxTodoContainer = () => {
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
      <ReduxTodoTemplate>
        <ReduxTodoHead todos={todoState} />
        <ReduxTodoList
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          todos={todoState}
        />
        <ReduxTodoCreate
          nextId={nextIdState}
          createTodo={createTodo}
          incrementNextId={incrementNextId}
        />
      </ReduxTodoTemplate>
    </>
  );
};

export default ReduxTodoContainer;
