
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Search, Bookmark, Maximize, Download } from "lucide-react";

interface PDFViewerProps {
  file: File | null;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ file }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(10); // Mock total pages
  const [scale, setScale] = useState(1);
  
  // Mock function to handle page change
  const changePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  
  // Mock function to zoom in/out
  const changeScale = (newScale: number) => {
    if (newScale >= 0.5 && newScale <= 2) {
      setScale(newScale);
    }
  };
  
  if (!file) return null;
  
  return (
    <div className="w-full rounded-xl overflow-hidden glass-panel animate-fade-in">
      {/* PDF Viewer Header */}
      <div className="bg-white border-b border-border flex items-center justify-between p-2">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:pointer-events-none"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center">
            <input 
              type="number" 
              value={currentPage}
              onChange={(e) => changePage(parseInt(e.target.value) || 1)}
              className="w-12 text-center border border-border rounded-md p-1 text-sm"
            />
            <span className="text-sm text-muted-foreground mx-1">of</span>
            <span className="text-sm">{totalPages}</span>
          </div>
          <button 
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:pointer-events-none"
          >
            <ChevronRight size={18} />
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground">
            <Search size={18} />
          </button>
          <button className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground">
            <Bookmark size={18} />
          </button>
          <div className="flex items-center border border-border rounded-md">
            <button 
              onClick={() => changeScale(scale - 0.1)}
              className="p-1.5 hover:bg-secondary text-muted-foreground hover:text-foreground"
            >
              -
            </button>
            <span className="text-sm px-2">{Math.round(scale * 100)}%</span>
            <button 
              onClick={() => changeScale(scale + 0.1)}
              className="p-1.5 hover:bg-secondary text-muted-foreground hover:text-foreground"
            >
              +
            </button>
          </div>
          <button className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground">
            <Maximize size={18} />
          </button>
          <button className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground">
            <Download size={18} />
          </button>
        </div>
      </div>
      
      {/* PDF Content Placeholder */}
      <div className="bg-gray-100 h-[600px] overflow-auto p-4 flex justify-center">
        <div 
          className="bg-white shadow-lg rounded-sm transition-transform"
          style={{ 
            width: `${8.5 * 96 * scale}px`, 
            height: `${11 * 96 * scale}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top center'
          }}
        >
          <div className="p-8 h-full">
            <div className="w-full flex justify-between mb-8">
              <div className="h-12 w-24 bg-gray-200 rounded"></div>
              <div className="h-8 w-16 bg-gray-200 rounded"></div>
            </div>
            <div className="h-8 w-3/4 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-full bg-gray-100 rounded mb-2"></div>
            <div className="h-4 w-full bg-gray-100 rounded mb-2"></div>
            <div className="h-4 w-2/3 bg-gray-100 rounded mb-6"></div>
            
            <div className="h-6 w-1/3 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-full bg-gray-100 rounded mb-2"></div>
            <div className="h-4 w-full bg-gray-100 rounded mb-2"></div>
            <div className="h-4 w-5/6 bg-gray-100 rounded mb-6"></div>
            
            <div className="h-64 w-full bg-gray-200 rounded mb-6"></div>
            
            <div className="h-4 w-full bg-gray-100 rounded mb-2"></div>
            <div className="h-4 w-full bg-gray-100 rounded mb-2"></div>
            <div className="h-4 w-4/5 bg-gray-100 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
