import { createGlobalStyle } from "styled-components";
import Nav from "../../components/Nav";

import ReduxTodoHead from "./components/ReduxToolkitTodoHead";
import ReduxTodoTemplate from "./components/ReduxToolkitTodoTemplate";
import ReduxTodoList from "./components/ReduxToolkitTodoList";
import ReduxTodoCreate from "./components/ReduxToolkitTodoCreate";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "../../store";
import { reduxToolkitTodosSlice } from "./ReduxToolkitTodoService";
import { toggleTodo, Itodo } from "./ReduxToolkitTodoService";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const ReduxToolkitTodoContainer = () => {
  const dispatch = useDispatch();

  const todoState = useSelector(
    (state: RootReducerType) => state.reduxToolkitTodos.todos
  );
  const nextIdState = useSelector(
    (state: RootReducerType) => state.reduxToolkitTodos.nextId
  );
  const onIncrementNextId = () =>
    dispatch(reduxToolkitTodosSlice.actions.incrementNextId());

  const onToggleTodo = (id: number) => dispatch(toggleTodo(id));

  const onRemoveTodo = (id: number) =>
    dispatch(reduxToolkitTodosSlice.actions.removeTodo(id));
  const onCreateTodo = (todo: Itodo) =>
    dispatch(reduxToolkitTodosSlice.actions.createTodo(todo));

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

export default ReduxToolkitTodoContainer;
