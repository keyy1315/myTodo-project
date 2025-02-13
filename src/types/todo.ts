export interface Todo {
    id: number;
    todo: string;
    description: string;
    dueDate: string;
    status: "InProgress" | "Completed" | "Deleted";
    isExpired: boolean;
} 