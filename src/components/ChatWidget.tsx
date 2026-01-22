import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

// Place your AI API call here when user sends a message
function sendMessageToAI(message: string) {
  // Call your AI backend API
  console.log("Sending message to AI:", message);
  // Example: return fetch('/api/chat', { method: 'POST', body: JSON.stringify({ message }) });
}

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How can I help you today?", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    
    // Call AI backend here
    sendMessageToAI(inputValue);
    
    setInputValue("");

    // Simulate bot response (replace with actual AI response)
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: "Thank you for your message! Our team will get back to you shortly.",
        isUser: false,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-primary hover:bg-brand-dark text-primary-foreground rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full font-medium">
          Chat
        </span>
      </button>

      {/* Chat Box */}
      <div
        className={`fixed bottom-6 right-6 w-80 sm:w-96 bg-background rounded-2xl shadow-2xl z-50 overflow-hidden transition-all duration-300 ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-primary px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-primary-foreground font-medium">
              Assistance/Support
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-72 overflow-y-auto p-4 space-y-3 bg-muted/30">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                  message.isUser
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-background text-foreground shadow-sm rounded-bl-md"
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 bg-background border-t border-border">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Any question?"
              className="flex-1 px-4 py-2 bg-muted rounded-full text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button
              onClick={handleSend}
              size="icon"
              className="w-10 h-10 bg-primary hover:bg-brand-dark rounded-full flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
