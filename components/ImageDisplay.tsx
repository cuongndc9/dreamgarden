import React from 'react';
import { GardenStage } from '../types';

interface ImageDisplayProps {
  // imageUrl will now always be a string, not null.
  imageUrl: string;
  stage: GardenStage;
  isLoading: boolean;
  onImageLoad: () => void;
}

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, stage, isLoading, onImageLoad }) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-slate-950/50 p-4 sm:p-6 rounded-3xl shadow-2xl border border-slate-800">
        <div className="relative w-full aspect-[4/3] bg-slate-800 rounded-2xl shadow-inner flex items-center justify-center">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <svg className="animate-spin h-10 w-10 text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            )}
            {/* The conditional wrapper is removed as imageUrl is never null. */}
            {/* The key is changed to imageUrl to ensure a re-render when the source changes. */}
            <img
                key={imageUrl}
                src={imageUrl}
                alt={`A visual representation of a ${stage} DreamGarden`}
                className={`w-full h-full object-cover rounded-2xl shadow-lg transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={onImageLoad}
            />
        </div>
    </div>
  );
};