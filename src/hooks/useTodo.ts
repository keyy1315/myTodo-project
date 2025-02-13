import { useAtom } from 'jotai';
import { todosAtom } from '../store/todoState';
import { Todo } from '../types/todo';

export const useTodo = () => {
    const [todos, setTodos] = useAtom(todosAtom);
    
    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const addTodo = (todo: Todo) => {
        setTodos([...todos, todo]);
    };

    const updateTodo = (id: number, todo: Todo) => {
        setTodos(todos.map((t) => (t.id === id ? todo : t)));
    };

    const completeTodo = (id: number) => {
        setTodos(todos.map((t) => (t.id === id ? {...t, status: t.status === "Completed" ? "InProgress" : "Completed"} : t)));
    };

    return { todos, deleteTodo, addTodo, updateTodo, completeTodo };
}; 