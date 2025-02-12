import TodoListPage from "../TodoListPage";
import { Todo } from "../../context/TodoContext";

const AllTodo = () => {
  return (
    <TodoListPage
      filterFn={(todo: Todo) => true}  // 모든 todo 표시
    />
  );
};

export default AllTodo; 