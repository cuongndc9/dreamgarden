import React from 'react';

interface GardenDescriptionProps {
    isLoading: boolean;
    description: string;
}

export const GardenDescription: React.FC<GardenDescriptionProps> = ({ isLoading, description }) => {
    if (isLoading) {
        return (
            <div className="w-full max-w-2xl mx-auto animate-pulse mt-4" role="status" aria-label="Loading garden description">
                <div className="h-4 bg-slate-700 rounded-full w-full mb-3"></div>
                <div className="h-4 bg-slate-700 rounded-full w-10/12 mb-3"></div>
                <div className="h-4 bg-slate-700 rounded-full w-11/12"></div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto text-center mt-4">
            <p className="text-slate-300 italic text-opacity-90 transition-opacity duration-500">
                "{description}"
            </p>
        </div>
    );
};
