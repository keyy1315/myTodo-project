import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CardComponent from "./Card";
import AddDialog from "./AddDialog";

interface PopoverProps {
  id: number;
  todo: string;
  dueDate: string;
  description: string;
}

export default function PopoverComponent({
  id,
  todo,
  dueDate,
  description,
}: PopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {/* Card Component 안에 Button 태그 있어서 asChild 사용 */}
        <div className="w-1/5 min-w-[250px]">
          <CardComponent id={id} />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">{todo}</h2>
          <h2 className="text-2xl pb-3">{description}</h2>
          <h3 className="text-sm text-gray-500">Due Date: {dueDate}</h3>
          <AddDialog isNew={false} id={id} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
