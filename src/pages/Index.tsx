import { useState } from "react";
import { Header } from "@/components/Header";
import { Note } from "@/components/Note";
import { useToast } from "@/components/ui/use-toast";

interface NoteType {
  id: string;
  title: string;
}

const Index = () => {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const { toast } = useToast();

  const addNote = () => {
    const newNote = {
      id: crypto.randomUUID(),
      title: "",
    };
    setNotes((prev) => [...prev, newNote]);
    toast({
      title: "Note Created",
      description: "A new note has been created",
    });
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
    toast({
      title: "Note Deleted",
      description: "The note has been deleted",
    });
  };

  const updateNoteTitle = (id: string, title: string) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, title } : note))
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header onAddNote={addNote} />
      <main className="container mx-auto px-6 py-8 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              onDelete={deleteNote}
              onTitleChange={updateNoteTitle}
            />
          ))}
        </div>
        {notes.length === 0 && (
          <div className="text-center text-muted-foreground mt-12">
            Click the + button to create your first note
          </div>
        )}
      </main>
      <footer className="py-4 text-center text-sm text-muted-foreground border-t border-gray-200">
        © Note It by Ashley Bernal
      </footer>
    </div>
  );
};

export default Index;