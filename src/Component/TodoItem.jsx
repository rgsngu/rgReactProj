import { useContext } from "react";
import todoCss from "./ToDo.module.css";
import { AiTwotoneDelete } from "react-icons/ai";
import { TodoItemsContext } from "../store/Todo-Item-Store";

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className={`${todoCss["todo-items-containers"]}`}>
      <div className={`${todoCss["todo-rows"]}`}>
        <div className={`${todoCss["todo-column"]}`}>{todoName}</div>
        <div className={`${todoCss["todo-column"]}`}>{todoDate}</div>
        <div className={`${todoCss["todo-column"]}`}>
          <button
            type="button"
            className="btn btn-danger sub-button"
            onClick={() => deleteItem(todoName)}
          >
            <AiTwotoneDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
