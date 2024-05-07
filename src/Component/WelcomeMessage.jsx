import { useContext } from "react";
import { TodoItemsContext } from "../store/Todo-Item-Store";
import styles from "./Welcome.module.css";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy your day</p>
  );
};

export default WelcomeMessage;
