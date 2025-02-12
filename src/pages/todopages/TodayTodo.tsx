import { Todo } from "../../context/TodoContext";
import TodoListPage from "../TodoListPage";

const TodayTodo = () => {

  return (
    <TodoListPage 
      filterFn={(todo: Todo) => todo.dueDate === new Date().toISOString().split('T')[0]} 
    />
  );
};

export default TodayTodo;
