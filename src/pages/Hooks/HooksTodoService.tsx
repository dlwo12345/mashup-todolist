import { useState } from "react";

type Itodo = {
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

export const useTodo = () => {
  const [todoState, setTodoState] = useState(initialTodos);
  const [nextIdState, setNextIdState] = useState(initialTodos.length + 1);

  const incrementNextId = () => {
    setNextIdState(nextIdState + 1);
  };

  const toggleTodo = (id: any) => {
    setTodoState((prevState) =>
      prevState.map((todo: any) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const removeTodo = (id: any) => {
    setTodoState((prevState) =>
      prevState.filter((todo: any) => todo.id !== id)
    );
  };

  const createTodo = (todo: any) => {
    const nextId = todoState.length + 1;
    setTodoState((prevState) =>
      prevState.concat({
        ...todo,
        id: nextId,
      })
    );
  };

  return {
    todoState,
    nextIdState,
    incrementNextId,
    toggleTodo,
    removeTodo,
    createTodo,
  };
};
