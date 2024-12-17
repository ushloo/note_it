import { Plus, User } from "lucide-react";
import { Button } from "./ui/button";
import { LoginDialog } from "./LoginDialog";
import { useState } from "react";

interface HeaderProps {
  onAddNote: () => void;
}

export const Header = ({ onAddNote }: HeaderProps) => {
  const [username, setUsername] = useState("User");
  const [showLoginButton, setShowLoginButton] = useState(true);

  const handleLogin = (newUsername: string) => {
    setUsername(newUsername);
    setShowLoginButton(false);
  };

  return (
    <header className="flex items-center justify-between py-[30px] px-4">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between pb-6 border-b border-black">
          <h1 className="text-2xl font-semibold">Note It</h1>
          <div className="absolute left-1/2 -translate-x-1/2">
            <Button
              onClick={onAddNote}
              variant="secondary"
              className="bg-[#FFD4B8] hover:bg-[#FFD4B8]/80"
            >
              <Plus className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            {showLoginButton ? (
              <LoginDialog onLogin={handleLogin} />
            ) : (
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium">Hello, {username}!</span>
                <User className="h-5 w-5" />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};