import React from "react";

interface LoadingSpinnerProps {
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
}) => {
  return (
    <div className="flex items-center justify-center mx-auto mt-[9rem]">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-[#0F8B3A] animate-spin"></div>
      </div>
    </div>
  );
};
