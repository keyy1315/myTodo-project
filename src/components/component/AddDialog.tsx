import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Pencil, PlusIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { useEffect } from "react";
import { SaveIcon, CalendarIcon } from "lucide-react";
import { useTodo} from "../../hooks/useTodo";
import { Todo } from "../../types/todo";

const AddDialog = ({ isNew = true, id }: { isNew?: boolean; id?: number }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [daysLeft, setDaysLeft] = useState<string | null>(null);
  const { addTodo, updateTodo, todos } = useTodo();
  const [todo, setTodo] = useState<string>("");
  const [description, setDescription] = useState<string>("");


  useEffect(() => {
    if (id) {
      setTodo(todos.find((todo) => todo.id === id)?.todo || "");
      setDescription(todos.find((todo) => todo.id === id)?.description || "");
      setDate(
        todos.find((todo) => todo.id === id)?.dueDate
          ? new Date(todos.find((todo) => todo.id === id)!.dueDate)
          : new Date()
      );
    }
  }, [id, todos]);

  const handleAddTodo = (id: number | undefined) => {
    if (todo.trim() === "") {
      alert("Please write down what to do.");
      return;
    }

    const daysDiff = Math.ceil(
      (date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
    );

    if (!date) {
      alert("Please select a date.");
      return;
    }

    if (daysDiff < -1) {
      alert("You Can't Pick Past Date.");
      return;
    }
    const newTodo: Todo = {
      id: id || Math.random(),
      description: description,
      todo: todo,
      dueDate: date.toLocaleDateString('en-CA'), // Formats as YYYY-MM-DD
      status: "InProgress", 
      isExpired: false,
    };
    if (isNew && id === 0) {
      addTodo(newTodo);
    } else if (id) {
      updateTodo(id, newTodo);
    } else {
      throw new Error("invalid id");
    }
  };

  const handleSelect = (day: Date | undefined) => {
    if (day) setDate(day);
  };

  useEffect(() => {
    if (date) {
      const today = new Date();
      const deadlineDate = new Date(date);
      const timeDiff = deadlineDate.getTime() - today.getTime();
      const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

      if (daysLeft < 0) {
        setDaysLeft("EXPIRED");
      } else {
        setDaysLeft(" " + daysLeft);
      }
    }
  }, [date]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {isNew ? (
          <Button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            <PlusIcon size={40} />
            Add Todo
          </Button>
        ) : (
          <Button>
            <Pencil />
            Edit
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          {isNew ? (
            <>
              <DialogTitle>Add Todo!</DialogTitle>
              <DialogDescription>
                Please write down what to do.
              </DialogDescription>
            </>
          ) : (
            <>
              <DialogTitle>Edit Todo!</DialogTitle>
              <DialogDescription>
                Please write down what to do.
              </DialogDescription>
            </>
          )}
        </DialogHeader>
        <div className="grid gap-4">
          <div className="flex flex-col gap-4 w-full">
            <Input
              id="todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Is there anything you need to do?"
              className="text-2xl w-full h-12 px-4"
            />
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add description here..."
              className="text-lg w-full px-4 resize-none"
            />
          </div>
        </div>
        <div className="flex justify-between items-start w-full">
          <div className="grid gap-4 py-2 sm:max-w-[200px] h-[300px]">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleSelect}
              className="rounded-md border shadow"
            />
          </div>
          <div className="mr-10 px-5 mt-2">
            <div className="item-center">
              <h2 className="text-3xl font-bold flex items-center gap-2">
                <CalendarIcon size={20} />
                YOU PICKED
              </h2>
              <h2 className="text-2xl font-medium">
                {date.toLocaleDateString()}
              </h2>
            </div>
            <div className="py-15">
              <h2 className="text-2xl font-bold">
                {daysLeft === "EXPIRED" ? (
                  <>
                    YOU PICKED <br /> PAST DATE...
                  </>
                ) : (
                  `The ${daysLeft} days left..`
                )}
              </h2>
            </div>
          </div>
        </div>
        <DialogFooter>
          {daysLeft !== "EXPIRED" && todo.trim() !== "" //
          ? (
            <DialogClose asChild>
              <Button 
                type="submit" 
                onClick={() => isNew ? handleAddTodo(0) : handleAddTodo(id)}
              >
                <SaveIcon size={20} />
                Save changes
              </Button>
            </DialogClose>
          ) : (
            <Button type="submit">
              <SaveIcon size={20} />
              Save changes
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddDialog;
