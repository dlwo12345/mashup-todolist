import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reduxTodosReducer } from "./pages/Redux/ReduxTodoService";
import { reduxToolkitTodosSlice } from "./pages/ReduxToolkit/ReduxToolkitTodoService";

export const rootReducer = combineReducers({
  reduxTodos: reduxTodosReducer,
  reduxToolkitTodos: reduxToolkitTodosSlice.reducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  devTools: true,
});
