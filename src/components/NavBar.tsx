
import React from "react";
import { FileText, Search, MessageCircle } from "lucide-react";

const NavBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/40">
      <div className="main-container">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-md bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center text-white font-medium">
                <FileText size={18} className="absolute" />
              </div>
              <span className="font-semibold text-xl">PDFGenius</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-lift">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-lift">
              How it works
            </a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-lift">
              Pricing
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center justify-center rounded-full h-9 px-4 py-2 text-sm font-medium shadow-sm border border-border/60 hover-lift button-hover">
              Sign in
            </button>
            <button className="flex items-center justify-center rounded-full h-9 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground shadow-sm hover-lift button-hover">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
