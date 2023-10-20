import { useRef } from "react";

const NewTodo: React.FC<{ onAddToDo: (text: string) => void }> = (props) => {
  const toDoTextInput = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = toDoTextInput.current!.value;
    if (enteredText.trim().length === 0) {
      //throw error
      return;
    }

    props.onAddToDo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text"></label>
      <input type="text" id="text" ref={toDoTextInput} />
      <button>Submit</button>
    </form>
  );
};

export default NewTodo;
