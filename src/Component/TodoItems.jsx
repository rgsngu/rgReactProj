import TodoItem from "./TodoItem";
import todoCss from "./ToDo.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/Todo-Item-Store";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className={todoCss["todo - container"]}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        />
      ))}
    </div>
  );
};

export default TodoItems;
