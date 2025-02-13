import TodoListPage from "../TodoListPage";
import { Todo } from "../../types/todo";

const LeftTodo = () => {
  return (
    <TodoListPage
      filterFn={(todo: Todo) => todo.status === "InProgress"}
    />
  );
};

export default LeftTodo;
