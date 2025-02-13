import { Todo } from "../../types/todo";
import TodoListPage from "../TodoListPage";

const CompletedTodo = () => {

  return (
    <TodoListPage 
      filterFn={(todo: Todo) => todo.status === "Completed"} 
    />
  );
};

export default CompletedTodo;
