import React from 'react';
import { GardenStage } from '../types';

interface ImageDisplayProps {
  imageUrl: string | null;
  stage: GardenStage;
}

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, stage }) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-slate-950/50 p-4 sm:p-6 rounded-3xl shadow-2xl border border-slate-800">
        <div className="relative w-full aspect-[4/3] bg-slate-800 rounded-2xl shadow-inner">
            {imageUrl && (
                <img
                    key={imageUrl}
                    src={imageUrl}
                    alt={`A visual representation of a ${stage} DreamGarden`}
                    className="w-full h-full object-cover rounded-2xl shadow-lg transition-opacity duration-700 opacity-0 animate-fade-in"
                    style={{ animationFillMode: 'forwards' }}
                />
            )}
        </div>
    </div>
  );
};

// Add keyframes for fade-in animation in a style tag, as we can't use external CSS files.
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.98); }
    to { opacity: 1; transform: scale(1); }
  }
  .animate-fade-in {
    animation: fadeIn 0.7s ease-out;
  }
`;
document.head.appendChild(style);
