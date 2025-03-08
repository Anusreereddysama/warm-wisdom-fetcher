
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-20">
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full border border-border/60 bg-secondary/50 px-3 py-1 text-sm text-muted-foreground mb-6 animate-fade-down">
          <span className="font-medium">Introducing PDFGenius</span>
          <div className="mx-2 h-1 w-1 rounded-full bg-muted-foreground/40"></div>
          <span>AI-powered PDF assistant</span>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl max-w-3xl animate-fade-up">
          Turn your <span className="gradient-text">PDFs</span> into <span className="gradient-text">knowledge</span> in seconds
        </h1>
        
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Upload your PDF documents and let our AI assistant extract key information, 
          answer your questions, and help you understand complex documents with ease.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-base font-medium text-primary-foreground shadow-sm hover-lift button-hover">
            Upload PDF
            <ArrowRight size={16} />
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center rounded-full border border-border/60 bg-white/50 backdrop-blur-sm px-5 py-3 text-base font-medium shadow-sm hover-lift button-hover">
            See how it works
          </button>
        </div>
        
        <div className="mt-16 w-full max-w-4xl aspect-[16/9] rounded-2xl bg-white/50 backdrop-blur-sm border border-border/40 shadow-xl overflow-hidden animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="w-full h-full bg-gradient-to-br from-blue-50 to-white p-8 flex items-center justify-center">
            <div className="relative w-24 h-24 rounded-full bg-blue-100 animate-pulse-soft">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center animate-float">
                  <FileText size={32} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
