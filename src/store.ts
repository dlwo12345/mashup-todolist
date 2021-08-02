import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { reduxTodosReducer } from "./pages/Redux/ReduxTodoService";
import { reduxToolkitTodosSlice } from "./pages/ReduxToolkit/ReduxToolkitTodoService";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import persistStore from "redux-persist/lib/persistStore";

export const rootReducer = combineReducers({
  reduxTodos: reduxTodosReducer,
  reduxToolkitTodos: reduxToolkitTodosSlice.reducer,
});

const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  // whitelist: ["auth"],
  // blacklist -> 그것만 제외합니다
};

export type RootReducerType = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  devTools: true,
});

export const persistor = persistStore(store);
