import { createGlobalStyle } from "styled-components";
import Nav from "../../components/Nav";

import ReduxTodoHead from "./components/ReduxTodoHead";
import ReduxTodoTemplate from "./components/ReduxTodoTemplate";
import ReduxTodoList from "./components/ReduxTodoList";
import ReduxTodoCreate from "./components/ReduxTodoCreate";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "../../store";

import {
  incrementNextId,
  toggleTodoAsync,
  removeTodo,
  createTodo,
  Itodo,
} from "./ReduxTodoService";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const ReduxTodoContainer = () => {
  const dispatch = useDispatch();

  const todoState = useSelector(
    (state: RootReducerType) => state.reduxTodos.todos
  );
  const nextIdState = useSelector(
    (state: RootReducerType) => state.reduxTodos.nextId
  );
  const onIncrementNextId = () => dispatch(incrementNextId());

  // const onToggleTodo = (id: number) => dispatch(toggleTodo(id));
  const onToggleTodo = (id: number) => dispatch(toggleTodoAsync(id));

  const onRemoveTodo = (id: number) => dispatch(removeTodo(id));
  const onCreateTodo = (todo: Itodo) => dispatch(createTodo(todo));

  return (
    <>
      <Nav />
      <GlobalStyle />
      <ReduxTodoTemplate>
        <ReduxTodoHead todos={todoState} />
        <ReduxTodoList
          toggleTodo={onToggleTodo}
          removeTodo={onRemoveTodo}
          todos={todoState}
        />
        <ReduxTodoCreate
          nextId={nextIdState}
          createTodo={onCreateTodo}
          incrementNextId={onIncrementNextId}
        />
      </ReduxTodoTemplate>
    </>
  );
};

export default ReduxTodoContainer;
