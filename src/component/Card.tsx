import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, CheckIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTodo } from "../context/TodoContext";

interface CardProps {
  id: number;
}

const CardComponent: React.FC<CardProps> = ({ id }) => {
  const { todos, deleteTodo, completeTodo } = useTodo();
  const todo = todos.find(t => t.id === id);
  if (!todo) return null;

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    deleteTodo(id);
  };
  const handleComplete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    completeTodo(id);
  };

  const [daysLeft, setDaysLeft] = useState<string | null>(null);
  
  useEffect(() => {
    if (todo.dueDate) {
      const today = new Date();
      const deadlineDate = new Date(todo.dueDate);
      const timeDiff = deadlineDate.getTime() - today.getTime();
      const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

      if (daysLeft < 0) {
        setDaysLeft(" + " + daysLeft * -1);
      } else {
        setDaysLeft(" - " + daysLeft);
      }
    }
  }, [todo.dueDate]);

  return (
    <Card
      className={`shadow-md rounded-lg transition-colors duration-300 cursor-pointer h-48 flex flex-col justify-between
            ${
              todo.status === "Completed"
                ? "bg-gray-100"
                : "bg-white hover:bg-gray-100"
            }`}
    >
      <CardHeader className="p-3">
        <CardTitle className={`text-2xl font-bold line-clamp-3
            ${
              todo.status === "Completed"
                ? "line-through text-gray-500"
                : ""
            }`}>{todo.todo}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between mt-auto pb-3 pr-3">
        <p className="text-xl text-gray-500">D {daysLeft}</p>
        <div>
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-green-100 hover:text-green-600"
            onClick={handleComplete}
          >
            <CheckIcon className="h-10 w-10" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-red-100 hover:text-red-600"
            onClick={handleDelete}
          >
            <Trash2 className="h-10 w-10" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
