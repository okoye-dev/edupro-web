import { Button } from "@/shared/components/ui";
import { Link } from "react-router";

export const ChatPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button asChild>
        <Link to="/">Back</Link>
      </Button>

      <div className="flex flex-col items-center justify-center">
        <h1>Chat with our AI</h1>
      </div>
    </div>
  );
};
