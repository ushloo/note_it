import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

export const TaskInput = ({ onAddTask }: TaskInputProps) => {
  const [newTaskText, setNewTaskText] = useState("");

  const handleAddTask = () => {
    if (newTaskText.trim()) {
      onAddTask(newTaskText);
      setNewTaskText("");
    }
  };

  return (
    <div className="mt-4 flex gap-2">
      <Input
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="Add a new task"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTask();
          }
        }}
      />
      <Button
        variant="secondary"
        size="sm"
        className="bg-[#FFC695] hover:bg-[#FFC695]/80"
        onClick={handleAddTask}
      >
        Add
      </Button>
    </div>
  );
};