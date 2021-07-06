import { Action, createAction, handleActions } from "redux-actions";

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

// 액션 타입
const INCREASE_NEXT_ID = "INCREASE_NEXT_ID";
const TOGGLE_TODO = "TOGGLE_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const CREATE_TODO = "CREATE_TODO";

// 액션 생성함수
export const incrementNextId = createAction(INCREASE_NEXT_ID);
export const toggleTodo = createAction(TOGGLE_TODO, (id: number) => ({ id }));
export const removeTodo = createAction(REMOVE_TODO, (id: number) => ({ id }));
export const createTodo = createAction(CREATE_TODO, (todo: Itodo) => ({
  todo,
}));

export const toggleTodoAsync = (id: number) => (dispatch: any) => {
  setTimeout(() => {
    dispatch(toggleTodo(id));
  }, 1000);
};

// 리듀서
export const TodosReducer = handleActions<typeof initialState, any>(
  {
    [INCREASE_NEXT_ID]: (state) => ({ ...state, nextId: state.nextId + 1 }),
    [TOGGLE_TODO]: (state, action: Action<{ id: number }>) => ({
      ...state,
      todos: state.todos.map((todo: any) =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      ),
    }),
    [REMOVE_TODO]: (state, action: Action<{ id: number }>) => ({
      ...state,
      todos: state.todos.filter((todo: any) => todo.id !== action.payload.id),
    }),
    [CREATE_TODO]: (state, action: Action<{ todo: Itodo }>) => ({
      ...state,
      todos: state.todos.concat({
        ...action.payload.todo,
        id: state.nextId,
      }),
    }),
  },
  initialState
);
