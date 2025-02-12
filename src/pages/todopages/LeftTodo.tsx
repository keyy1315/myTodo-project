import TodoListPage from "../TodoListPage";
import { Todo } from "../../context/TodoContext";

const LeftTodo = () => {
  return (
    <TodoListPage
      filterFn={(todo: Todo) => todo.status === "InProgress"}
    />
  );
};

export default LeftTodo;
