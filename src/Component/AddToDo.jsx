import { useContext, useRef } from "react";
import todoCss from "./ToDo.module.css";
import { IoBagAdd } from "react-icons/io5";
import { TodoItemsContext } from "../store/Todo-Item-Store";

function AddToDo() {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameRef = useRef();
  const dueDateRef = useRef();

  // const handleNameChange = (e) => {
  //   setTodoName(e.target.value);        we comment becoz we repaint the component using use state instead using the ref
  // };

  // const handleDateChange = (e) => {
  //   setDueDate(e.target.value);
  // };

  const handleAddButton = (e) => {
    e.preventDefault();
    const todoName = todoNameRef.current.value;
    const dueDate = dueDateRef.current.value;
    todoNameRef.current.value = "";
    dueDateRef.current.value = "";
    if (todoName.length > 0 && dueDate.length > 0) {
      addNewItem(todoName, dueDate);
    }
  };

  return (
    <div className={`${todoCss["todo-head-container"]}`}>
      <form className={`${todoCss["todo-rows"]}`} onSubmit={handleAddButton}>
        <div className={`${todoCss["todo-column"]}`}>
          <input type="text" ref={todoNameRef} placeholder="Enter todo here" />
        </div>
        <div className={`${todoCss["todo-column"]}`}>
          <input type="date" ref={dueDateRef} />
        </div>
        <div className={`${todoCss["todo-column"]}`}>
          <button type="submit" className="btn btn-success sub-button">
            <IoBagAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
