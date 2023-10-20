import React from "react";
import { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addToDo: (text: string) => void;
  removeToDo: (id: string) => void;
};

const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addToDo: () => {},
  removeToDo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
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

  const contextValue: TodosContextObj = {
    items: todos,
    addToDo: addToDoHandler,
    removeToDo: removeToDoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
