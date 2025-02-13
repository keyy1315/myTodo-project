import TodoListPage from "../TodoListPage";
import { Todo } from "../../types/todo";

const TodayTodo = () => {
  return (
    <TodoListPage 
      filterFn={(todo: Todo) => todo.dueDate === new Date().toISOString().split('T')[0]} 
    />
  );
};

export default TodayTodo;
