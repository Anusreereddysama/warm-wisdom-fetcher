
import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, BookOpen, Search, Download } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface AIChatProps {
  file: File | null;
}

const AIChat: React.FC<AIChatProps> = ({ file }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I've analyzed your PDF. Ask me anything about the content.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Simulate AI response after delay
    setTimeout(() => {
      // Mock AI responses based on questions
      let aiResponse = "";
      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes("summary") || lowerInput.includes("summarize")) {
        aiResponse = "This document discusses artificial intelligence applications in healthcare, focusing on diagnostic tools, treatment optimization, and administrative efficiencies. It highlights case studies from major hospitals and addresses ethical considerations regarding data privacy and algorithmic bias.";
      } else if (lowerInput.includes("conclusion") || lowerInput.includes("findings")) {
        aiResponse = "The document concludes that AI integration in healthcare shows promising results in improving patient outcomes and operational efficiency. However, it emphasizes the need for ongoing human oversight, rigorous validation protocols, and adaptive regulatory frameworks to ensure ethical implementation.";
      } else if (lowerInput.includes("author") || lowerInput.includes("wrote")) {
        aiResponse = "The document was authored by Dr. Sarah Johnson, Director of Medical AI Research at Stanford University Medical Center, in collaboration with a team of healthcare professionals and computer scientists.";
      } else if (lowerInput.includes("page")) {
        aiResponse = "The discussion about ethical considerations begins on page 24. There's a comprehensive table comparing different AI approaches on pages 15-17.";
      } else {
        aiResponse = "Based on the PDF content, I can tell you that this document covers various aspects of the topic including key methodologies, practical applications, and future directions. Would you like me to focus on a specific section?";
      }
      
      const assistantMessage: Message = {
        role: "assistant",
        content: aiResponse,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  if (!file) return null;
  
  return (
    <div className="w-full glass-panel rounded-xl overflow-hidden animate-fade-in">
      <div className="bg-white border-b border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Bot size={18} className="text-primary" />
            </div>
            <div>
              <h3 className="font-medium">PDF Assistant</h3>
              <p className="text-xs text-muted-foreground">Powered by AI</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground">
              <BookOpen size={16} />
            </button>
            <button className="p-2 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground">
              <Search size={16} />
            </button>
            <button className="p-2 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground">
              <Download size={16} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="h-[350px] overflow-y-auto bg-white/40 p-4 scroll-hidden">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex gap-3 mb-4 ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {message.role === "assistant" && (
              <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <Bot size={14} className="text-primary" />
              </div>
            )}
            
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground rounded-tr-none"
                  : "bg-white border border-border/60 rounded-tl-none"
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p className="text-[10px] mt-1 opacity-70 text-right">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
            
            {message.role === "user" && (
              <div className="w-8 h-8 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center">
                <User size={14} className="text-foreground" />
              </div>
            )}
          </div>
        ))}
        
        {isTyping && (
          <div className="flex gap-3 mb-4 justify-start">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
              <Bot size={14} className="text-primary" />
            </div>
            <div className="bg-white border border-border/60 p-3 rounded-2xl rounded-tl-none max-w-[80%]">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0s" }}></div>
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="bg-white border-t border-border p-3">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about the document..."
            className="flex-1 bg-secondary/50 border border-border/60 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground disabled:opacity-50 disabled:pointer-events-none"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIChat;
