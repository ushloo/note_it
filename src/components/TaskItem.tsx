import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

interface TaskItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem = ({ id, text, completed, onToggle, onDelete }: TaskItemProps) => {
  return (
    <div className="flex items-center gap-2 group/task">
      <Checkbox
        checked={completed}
        onCheckedChange={() => onToggle(id)}
        className="data-[state=checked]:bg-[#FFD4B8] data-[state=checked]:border-[#FFD4B8]"
      />
      <span className={completed ? "line-through text-muted-foreground" : ""}>
        {text}
      </span>
      <Button
        variant="ghost"
        size="icon"
        className="ml-auto opacity-0 group-hover/task:opacity-100 h-6 w-6"
        onClick={() => onDelete(id)}
      >
        <Trash2 className="h-3 w-3" />
      </Button>
    </div>
  );
};