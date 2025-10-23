import React from 'react';
import { GardenStage } from '../types';

interface GardenSelectorProps {
  selectedStage: GardenStage;
  onSelectStage: (stage: GardenStage) => void;
}

const stageDetails = {
    [GardenStage.NEGLECTED]: { icon: '🌙', color: 'bg-indigo-600', hoverColor: 'hover:bg-indigo-500',ringColor: 'ring-indigo-400' },
    [GardenStage.DEVELOPING]: { icon: '🌱', color: 'bg-sky-600', hoverColor: 'hover:bg-sky-500', ringColor: 'ring-sky-400' },
    [GardenStage.THRIVING]: { icon: '🌳', color: 'bg-emerald-600', hoverColor: 'hover:bg-emerald-500', ringColor: 'ring-emerald-400' },
    [GardenStage.SPECIAL]: { icon: '✨', color: 'bg-purple-600', hoverColor: 'hover:bg-purple-500', ringColor: 'ring-purple-400' },
};


export const GardenSelector: React.FC<GardenSelectorProps> = ({ selectedStage, onSelectStage }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 p-4">
      {Object.values(GardenStage).map((stage) => {
        const details = stageDetails[stage];
        const isSelected = stage === selectedStage;
        return (
          <button
            key={stage}
            onClick={() => onSelectStage(stage)}
            className={`
              flex items-center justify-center gap-2 px-4 py-2 text-sm sm:text-base font-semibold rounded-full shadow-lg transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900
              ${isSelected 
                ? `${details.color} text-white ${details.ringColor} ring-2 scale-105` 
                : `bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white transform hover:scale-105`}
            `}
          >
            <span className="text-lg">{details.icon}</span>
            <span>{stage}</span>
          </button>
        );
      })}
    </div>
  );
};
