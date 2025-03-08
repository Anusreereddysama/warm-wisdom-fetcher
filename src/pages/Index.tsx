
import React, { useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FileUpload from "@/components/FileUpload";
import PDFViewer from "@/components/PDFViewer";
import AIChat from "@/components/AIChat";
import { Check, Search, MessageCircle, Sparkles } from "lucide-react";

const Index = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelected = (file: File) => {
    setSelectedFile(file);
  };

  return (
    <Layout>
      <Hero />
      
      <section className="py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Transform your PDF documents into interactive knowledge in just three simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel rounded-xl p-6 text-center hover-lift">
            <div className="w-12 h-12 rounded-full bg-secondary mx-auto flex items-center justify-center mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                1
              </div>
            </div>
            <h3 className="text-lg font-medium mb-2">Upload Your PDF</h3>
            <p className="text-sm text-muted-foreground">
              Simply drag and drop your PDF file or browse from your device to upload.
            </p>
          </div>
          
          <div className="glass-panel rounded-xl p-6 text-center hover-lift">
            <div className="w-12 h-12 rounded-full bg-secondary mx-auto flex items-center justify-center mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                2
              </div>
            </div>
            <h3 className="text-lg font-medium mb-2">AI Processing</h3>
            <p className="text-sm text-muted-foreground">
              Our AI assistant analyzes and extracts key information from your document.
            </p>
          </div>
          
          <div className="glass-panel rounded-xl p-6 text-center hover-lift">
            <div className="w-12 h-12 rounded-full bg-secondary mx-auto flex items-center justify-center mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                3
              </div>
            </div>
            <h3 className="text-lg font-medium mb-2">Ask Questions</h3>
            <p className="text-sm text-muted-foreground">
              Chat with our AI to get instant answers and insights from your document.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16" id="features">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Powerful tools to help you get the most out of your documents.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel rounded-xl p-6 flex items-start gap-4 hover-lift">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mt-1">
              <MessageCircle size={18} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">AI Q&A Assistant</h3>
              <p className="text-sm text-muted-foreground">
                Ask questions in natural language and get accurate answers extracted directly from your document.
              </p>
            </div>
          </div>
          
          <div className="glass-panel rounded-xl p-6 flex items-start gap-4 hover-lift">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mt-1">
              <Search size={18} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Smart Search</h3>
              <p className="text-sm text-muted-foreground">
                Find specific information quickly with our intelligent semantic search functionality.
              </p>
            </div>
          </div>
          
          <div className="glass-panel rounded-xl p-6 flex items-start gap-4 hover-lift">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mt-1">
              <Sparkles size={18} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Automatic Summarization</h3>
              <p className="text-sm text-muted-foreground">
                Get concise summaries of long documents to save time and improve comprehension.
              </p>
            </div>
          </div>
          
          <div className="glass-panel rounded-xl p-6 flex items-start gap-4 hover-lift">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mt-1">
              <Check size={18} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Key Insights Extraction</h3>
              <p className="text-sm text-muted-foreground">
                Automatically identify and extract the most important information from your documents.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16" id="try-it-now">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Try It Now</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Upload a PDF document and see the magic happen.
          </p>
        </div>
        
        <FileUpload onFileSelected={handleFileSelected} />
        
        {selectedFile && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <PDFViewer file={selectedFile} />
            <AIChat file={selectedFile} />
          </div>
        )}
      </section>
      
      <section className="py-16 text-center" id="pricing">
        <div className="glass-panel rounded-xl max-w-3xl mx-auto p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to unlock the knowledge in your PDFs?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Join thousands of professionals who are using PDFGenius to extract valuable insights from their documents.
          </p>
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-base font-medium text-primary-foreground shadow-sm hover-lift button-hover">
            Get Started Free
          </button>
          <p className="text-xs text-muted-foreground mt-4">
            No credit card required. 5 free documents per month.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
