import { createGlobalStyle } from "styled-components";
import Nav from "../../components/Nav";

import ReduxTodoHead from "./components/ReduxTodoHead";
import ReduxTodoTemplate from "./components/ReduxTodoTemplate";
import ReduxTodoList from "./components/ReduxTodoList";
import ReduxTodoCreate from "./components/ReduxTodoCreate";
import { useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import {
  incrementNextId,
  TodosReducer,
  toggleTodo,
  removeTodo,
  createTodo,
  Itodo,
} from "./ReduxTodoService";

export const rootReducer = combineReducers({
  TodosReducer,
});

type RootReducerType = ReturnType<typeof rootReducer>;

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const ReduxTodoContainer = () => {
  const dispatch = useDispatch();

  const todoState = useSelector(
    (state: RootReducerType) => state.TodosReducer.todos
  );
  const nextIdState = useSelector(
    (state: RootReducerType) => state.TodosReducer.nextId
  );
  const onIncrementNextId = () => dispatch(incrementNextId());
  const onToggleTodo = (id: number) => dispatch(toggleTodo(id));
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
