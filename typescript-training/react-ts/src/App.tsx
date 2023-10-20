import Todos from "./components/Todos";
0;
import NewTodo from "./components/NewTodo";
import Todo from "./models/todo";

import { useState } from "react";

function App() {
  return (
    <>
      <NewTodo onAddToDo={addToDoHandler} />
      <Todos items={todos} onRemoveItem={removeToDoHandler} />
    </>
  );
}

export default App;
