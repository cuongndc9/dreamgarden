import React, { useState, useEffect } from 'react';
import { GardenStage } from './types';
import { GARDEN_IMAGES } from './constants';
import { GardenSelector } from './components/GardenSelector';
import { ImageDisplay } from './components/ImageDisplay';

const App: React.FC = () => {
  const [gardenStage, setGardenStage] = useState<GardenStage>(GardenStage.DEVELOPING);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    // Set the image from our pre-loaded constants when the stage changes.
    setImageUrl(GARDEN_IMAGES[gardenStage]);
  }, [gardenStage]);

  const handleSelectStage = (stage: GardenStage) => {
    if (stage !== gardenStage) {
      setGardenStage(stage);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-indigo-950/70 p-4 sm:p-8 flex flex-col items-center">
      <header className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-3xl">🌿</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400">
              DreamGarden
            </h1>
          </div>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Cultivate a serene garden that reflects the quality of your sleep. Select a stage to visualize how consistent rest can transform your digital sanctuary.
        </p>
      </header>
      
      <main className="w-full flex flex-col items-center gap-6 sm:gap-8">
        <GardenSelector 
          selectedStage={gardenStage}
          onSelectStage={handleSelectStage}
        />
        <ImageDisplay 
          imageUrl={imageUrl}
          stage={gardenStage}
        />
      </main>

      <footer className="text-center mt-auto pt-8 text-slate-500 text-sm">
        <p>Your personal sleep sanctuary visualized.</p>
      </footer>
    </div>
  );
};

export default App;
