import { useState } from "react";
import { Card } from "./ui/card";
import { NoteHeader } from "./NoteHeader";
import { TaskItem } from "./TaskItem";
import { TaskInput } from "./TaskInput";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface NoteProps {
  id: string;
  title: string;
  onDelete: (id: string) => void;
  onTitleChange: (id: string, title: string) => void;
}

export const Note = ({ id, title, onDelete, onTitleChange }: NoteProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (taskId: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  return (
    <Card className="w-full max-w-md p-4 relative group">
      <NoteHeader
        title={title}
        id={id}
        onDelete={onDelete}
        onTitleChange={onTitleChange}
      />
      <div className="mt-4 space-y-2">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
      <TaskInput onAddTask={addTask} />
    </Card>
  );
};