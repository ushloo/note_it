import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface NoteHeaderProps {
  title: string;
  id: string;
  onDelete: (id: string) => void;
  onTitleChange: (id: string, title: string) => void;
}

export const NoteHeader = ({ title, id, onDelete, onTitleChange }: NoteHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <Input
        value={title}
        onChange={(e) => onTitleChange(id, e.target.value)}
        className="border-none text-xl font-medium pl-3 focus-visible:ring-0 bg-transparent"
        placeholder="Title of Note"
      />
      <Button
        variant="ghost"
        size="icon"
        className="opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => onDelete(id)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};