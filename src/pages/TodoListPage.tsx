import { useTodo } from "../hooks/useTodo";
import { Todo } from "../types/todo";
import PopoverComponent from "../components/component/Popover";

interface TodoListPageProps {
  filterFn: (todo: Todo) => boolean;
}

const TodoListPage = ({ filterFn }: TodoListPageProps) => {
  const { todos } = useTodo();
  const filteredTodos = todos
    .filter(filterFn)
    .sort((a, b) => {
      const dateA = new Date(a.dueDate);
      const dateB = new Date(b.dueDate);
      const today = new Date();
      return Math.abs(dateA.getTime() - today.getTime()) - Math.abs(dateB.getTime() - today.getTime());
    });

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {filteredTodos.map((todo) => (
          <div key={todo.id} className="w-1/6 min-w-[250px]"> 
            <PopoverComponent 
              id={todo.id}
              todo={todo.todo}
              dueDate={todo.dueDate}
              description={todo.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoListPage;