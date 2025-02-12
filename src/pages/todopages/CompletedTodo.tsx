import { Todo } from "../../context/TodoContext";
import TodoListPage from "../TodoListPage";

const CompletedTodo = () => {

  return (
    <TodoListPage 
      filterFn={(todo: Todo) => todo.status === "Completed"} 
    />
  );
};

export default CompletedTodo;
