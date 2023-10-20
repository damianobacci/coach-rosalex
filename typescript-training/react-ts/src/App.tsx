import Todos from "./components/Todos";
0;
import NewTodo from "./components/NewTodo";
import Todo from "./models/todo";

import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Learn React"),
    new Todo("Learn TS"),
  ]);

  const addToDoHandler = (toDoText: string) => {
    setTodos((prevToDos) => [...prevToDos, new Todo(toDoText)]);
  };

  const removeToDoHandler = (id: string) => {
    setTodos((prevToDos) => {
      return prevToDos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <NewTodo onAddToDo={addToDoHandler} />
      <Todos items={todos} onRemoveItem={removeToDoHandler} />
    </>
  );
}

export default App;
