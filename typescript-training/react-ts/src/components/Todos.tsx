import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[]; onRemoveItem: (id: string) => void }> = (
  props
) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveItem={props.onRemoveItem.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
