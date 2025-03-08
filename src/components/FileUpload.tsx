
import React, { useState, useCallback } from "react";
import { FileText, Upload, File, Check, X } from "lucide-react";

interface FileUploadProps {
  onFileSelected: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelected }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.type === "application/pdf") {
        handleFile(droppedFile);
      } else {
        // Show error for non-PDF files
        console.error("Please upload a PDF file");
      }
    }
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type === "application/pdf") {
        handleFile(selectedFile);
      } else {
        // Show error for non-PDF files
        console.error("Please upload a PDF file");
      }
    }
  }, []);

  const handleFile = useCallback((file: File) => {
    setFile(file);
    setIsUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      setUploadComplete(true);
      onFileSelected(file);
    }, 1500);
  }, [onFileSelected]);

  const resetUpload = useCallback(() => {
    setFile(null);
    setUploadComplete(false);
  }, []);

  return (
    <section className="w-full max-w-2xl mx-auto">
      {!file ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-xl p-8 transition-all duration-300 ease-in-out ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-border/70 hover:border-primary/50 hover:bg-primary/5"
          }`}
        >
          <input
            type="file"
            id="file-upload"
            className="sr-only"
            accept="application/pdf"
            onChange={handleFileInput}
          />
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center gap-4 cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center animate-pulse-soft">
              <Upload
                size={24}
                className="text-primary"
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-medium">
                Drag and drop your PDF here
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                or click to browse from your device
              </p>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Supports PDF files up to 10MB
            </p>
          </label>
        </div>
      ) : (
        <div className="glass-panel rounded-xl p-6 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center">
              <FileText
                size={20}
                className="text-primary"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{file.name}</p>
              <p className="text-sm text-muted-foreground">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            {isUploading ? (
              <div className="w-6 h-6 rounded-full border-2 border-primary/30 border-t-primary animate-spin"></div>
            ) : uploadComplete ? (
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Check size={14} className="text-green-600" />
                </div>
                <button
                  onClick={resetUpload}
                  className="text-sm text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            ) : null}
          </div>

          {isUploading && (
            <div className="mt-4">
              <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary animate-pulse w-2/3"></div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Uploading and processing...
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default FileUpload;
