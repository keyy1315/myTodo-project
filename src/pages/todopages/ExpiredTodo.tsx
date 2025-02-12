import { Todo } from "../../context/TodoContext";
import TodoListPage from "../TodoListPage";

const ExpiredTodo = () => {

  return (
    <TodoListPage 
      filterFn={(todo: Todo) => todo.isExpired} 
    />
  );
};

export default ExpiredTodo;
