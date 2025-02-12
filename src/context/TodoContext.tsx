import {createContext, useContext, useState, type ReactNode} from "react";
import  dummyTodo  from "../data/dummyTodo";

export interface Todo {
    id: number;
    todo: string;
    description: string;
    dueDate: string;
    status: "InProgress" | "Completed" | "Deleted";
    isExpired: boolean;
}

interface TodoContextType {
    todos: Todo[];
    deleteTodo: (id: number) => void;
    addTodo: (todo: Todo) => void;
    updateTodo: (id: number, todo: Todo) => void;
    completeTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>(dummyTodo);

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    // filter : 새로운 배열을 만들어서 반환!!!
    // map : 기존 배열을 수정하여 반환
    // reduce : 배열의 요소를 하나의 값으로 줄이는 것
    // filter : 조건에 맞는 요소만 추려서 반환

    const addTodo = (todo:Todo) => {
        setTodos([...todos, todo]);
    }

    const updateTodo = (id:number, todo:Todo) => {
        setTodos(todos.map((t) => (t.id === id ? todo : t)));
    }

    const completeTodo = (id: number) => {
        setTodos(todos.map((t) => (t.id === id ? {...t, status: t.status === "Completed" ? "InProgress" : "Completed"} : t)));
    }

    return (
        <TodoContext.Provider value={{ todos, deleteTodo, addTodo, updateTodo, completeTodo }}>
            {children}
        </TodoContext.Provider>
    );
} 

export const useTodo = () => {
    const context = useContext(TodoContext);
    if (!context) throw new Error("useTodo must be used within a TodoProvider");
    return context;
}