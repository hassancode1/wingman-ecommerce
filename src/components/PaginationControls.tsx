import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
  } from "../components/ui/pagination";
  import { ChevronLeft, ChevronRight } from "lucide-react";
  
  interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (v: number) => void;
  }
  
  const PaginationControls = ({
    currentPage,
    totalPages,
    onPageChange,
  }: PaginationProps) => {
    return (
      <Pagination>
        <PaginationContent className="gap-2 text-text">
          <PaginationItem>
            <button
              onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
              className={`h-10 w-10 flex items-center justify-center rounded border border-input hover:bg-green-600 hover:text-white
                ${currentPage <= 1 ? "pointer-events-none opacity-50" : ""}`}
            >
              <ChevronLeft className="h-4 w-4 text-text" />
            </button>
          </PaginationItem>
  
          <PaginationItem>
            <button
              onClick={() => onPageChange(1)}
              className={`h-10 w-10 flex items-center justify-center text-text rounded border border-input hover:bg-green-600 hover:text-white
                ${currentPage === 1 ? "bg-[#16A34A] text-text" : ""}`}
            >
              1
            </button>
          </PaginationItem>
  
          {currentPage > 3 && <PaginationEllipsis />}
  
          {currentPage > 2 && (
            <PaginationItem>
              <button
                onClick={() => onPageChange(currentPage - 1)}
                className="h-10 w-10 flex items-center justify-center text-text rounded border border-input hover:bg-green-600 hover:text-white"
              >
                {currentPage - 1}
              </button>
            </PaginationItem>
          )}
  
          {currentPage !== 1 && currentPage !== totalPages && (
            <PaginationItem>
              <button className="h-10 w-10 flex items-center justify-center rounded border border-input text-text bg-[#16A34A]">
                {currentPage}
              </button>
            </PaginationItem>
          )}
  
          {currentPage < totalPages - 1 && (
            <PaginationItem>
              <button
                onClick={() => onPageChange(currentPage + 1)}
                className="h-10 w-10 flex items-center text-text justify-center rounded border border-input hover:bg-green-600 hover:text-white"
              >
                {currentPage + 1}
              </button>
            </PaginationItem>
          )}
  
          {currentPage < totalPages - 2 && <PaginationEllipsis />}
  
          {totalPages > 1 && (
            <PaginationItem>
              <button
                onClick={() => onPageChange(totalPages)}
                className={`h-10 w-10 flex items-center justify-center rounded border border-input hover:bg-green-600 hover:text-white
                  ${currentPage === totalPages ? "bg-[#16A34A] text-text" : ""}`}
              >
                {totalPages}
              </button>
            </PaginationItem>
          )}
  
          <PaginationItem>
            <button
              onClick={() =>
                currentPage < totalPages && onPageChange(currentPage + 1)
              }
              className={`h-10 w-10 flex items-center justify-center text-text rounded border border-input hover:bg-green-600 hover:text-white
                ${
                  currentPage >= totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }`}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  };
  
  export default PaginationControls;
  