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

  return (
    <>
      <NewTodo onAddToDo={addToDoHandler} />
      <Todos items={todos} />
    </>
  );
}

export default App;
