import AddToDo from "./Component/AddToDo";
import AppName from "./Component/AppName";
import "./App.css";
import TodoItems from "./Component/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./Component/WelcomeMessage";
import { TodoItemsContext } from "./store/Todo-Item-Store";
function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, dueDate) => {
    setTodoItems((curr) => [...curr, { name: itemName, dueDate: dueDate }]);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) => item.name != todoItemName);
    setTodoItems(newTodoItem);
  };

  const defaultTodoItems = [{ name: "awdwd", dueDate: "15.6.888" }];

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="container">
        <AppName />
        <AddToDo />
        <WelcomeMessage></WelcomeMessage>
        {/* <TodoItems todoItem={todoItems} onDeleteItem={handleDeleteItem} /> */}
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
