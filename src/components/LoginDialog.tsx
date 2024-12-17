import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import { User } from "lucide-react";

interface LoginDialogProps {
  onLogin: (username: string) => void;
}

export const LoginDialog = ({ onLogin }: LoginDialogProps) => {
  const [username, setUsername] = useState("");
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleLogin = () => {
    if (username.trim()) {
      onLogin(username);
      setOpen(false);
      toast({
        title: "Logged in successfully",
        description: `Welcome, ${username}!`,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
      <Button variant="ghost" className="gap-2 text-black">
          Login
          <User className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
        <DialogTitle className="text-3xl font-bold">Login</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
            className="border-2 border-gray-300 rounded-md"
          />
          <Button 
            onClick={handleLogin} 
            className="bg-[#FFD4B8] text-black hover:bg-[#FFD4B8]/80"
          >
            Login
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};