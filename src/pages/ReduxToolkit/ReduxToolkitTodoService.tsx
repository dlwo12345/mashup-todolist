import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type Itodo = {
  id: number;
  text: string;
  done: boolean;
};

const initialTodos: Itodo[] = [
  {
    id: 1,
    text: "프로젝트 생성하기",
    done: true,
  },
  {
    id: 2,
    text: "컴포넌트 스타일링하기",
    done: true,
  },
  {
    id: 3,
    text: "Context 만들기",
    done: false,
  },
  {
    id: 4,
    text: "기능 구현하기",
    done: false,
  },
];

// 초기값
const initialState = {
  todos: initialTodos,
  nextId: initialTodos.length + 1,
};

const delay = (time: number, value: any) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

export const toggleTodo = createAsyncThunk(
  "reduxToolkitTodos/toogleTodo",
  async (data: number) => {
    const result = await delay(1000, data);
    return result;
  }
);

export const reduxToolkitTodosSlice = createSlice({
  name: "reduxToolkitTodos",
  initialState,
  reducers: {
    incrementNextId(state) {
      state.nextId = +1;
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    createTodo(state, action) {
      console.log("state", state, action);
      state.todos = state.todos.concat({
        ...action.payload,
        id: state.nextId,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(toggleTodo.pending, (state, action) => {})
      .addCase(toggleTodo.fulfilled, (state, action: any) => {
        state.todos = state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        );
      })
      .addCase(toggleTodo.rejected, (state, action) => {});
  },
});
