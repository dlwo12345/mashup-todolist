import {atom, selector, useRecoilState} from 'recoil';

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true,
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true,
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false,
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false,
  },
];

export const TodoState = atom({
  key: 'TodoState',
  default: initialTodos,
});

export const ChangeTodoState = selector({
  key: 'ChangeTodoState',
  set: ({get, set}, action) => {
    switch (action.type) {
      case 'TOGGLE':
        set(
          TodoState,
          get(TodoState).map((todo) => (todo.id === action.id ? {...todo, done: !todo.done} : todo)),
        );
        break;
      case 'REMOVE':
        set(
          TodoState,
          get(TodoState).filter((todo) => todo.id !== action.id),
        );
        break;
      case 'CREATE':
        const todos = get(TodoState);
        set(
          TodoState,
          todos.concat({
            id: todos.length + 1,
            ...action.todo,
          }),
        );
        break;

      default:
        throw new Error(`Unhandled type: ${action.type}`);
    }
  },
});
