import { action, makeAutoObservable, makeObservable, observable } from "mobx";

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

// class Todo {
//   todoState = initialTodos;
//   nextIdState = initialTodos.length + 1;

//   constructor() {
//     makeObservable(this, {
//       todoState: observable,
//       nextIdState: observable,
//       incrementNextId: action,
//       toggleTodo: action,
//       removeTodo: action,
//       createTodo: action,
//     });
//   }

//   incrementNextId() {
//     this.nextIdState++;
//   }

//   toggleTodo(id: number) {
//     this.todoState = this.todoState.map((todo: Itodo) =>
//       todo.id === id ? { ...todo, done: !todo.done } : todo
//     );
//   }

//   removeTodo(id: number) {
//     this.todoState = this.todoState.filter((todo: Itodo) => todo.id !== id);
//   }

//   createTodo(todo: Itodo) {
//     this.todoState.push({
//       ...todo,
//       id: this.todoState.length + 1,
//     });
//   }
// }

// const todoStore = new Todo();

const todoStore = observable({
  todoState: initialTodos,
  nextIdState: initialTodos.length + 1,
  incrementNextId() {
    this.nextIdState++;
  },
  toggleTodo(id: any) {
    this.todoState = this.todoState.map((todo: any) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
  },
  removeTodo(id: any) {
    this.todoState = this.todoState.filter((todo: any) => todo.id !== id);
  },

  createTodo(todo: any) {
    console.log("todo", todo, this.todoState);
    const nextId = this.todoState.length + 1;
    this.todoState = this.todoState.concat({
      ...todo,
      id: nextId,
    });
  },
});

export default todoStore;
