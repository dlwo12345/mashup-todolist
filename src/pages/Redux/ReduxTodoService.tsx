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
  nextId: initialTodos.length + 1
};

// 액션 타입
const INCREASE_NEXT_ID = "INCREASE_NEXT_ID";
const TOGGLE_TODO = "TOGGLE_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const CREATE_TODO = "CREATE_TODO";

// 액션 생성함수
export const incrementNextId = () => ({ type: INCREASE_NEXT_ID });
export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id
});
export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id
});

export const createTodo = (todo: Itodo) => ({
  type: CREATE_TODO,
  payload: todo
});

// 리듀서
export const TodosReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREASE_NEXT_ID:
      return {
        ...state,
        nextId: state.nextId + 1
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo: any) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        )
      }
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo: any) => todo.id !== action.payload)
      }
    case CREATE_TODO:
      return {
        ...state,
        todos: state.todos.concat({
          ...action.payload,
          id: state.nextId,
        })
      }
    default:
      return state;
  }
}

