import React, { useState, useEffect, useCallback } from 'react';
import { GardenStage } from './types';
import { GARDEN_SEARCH_TERMS } from './constants';
import { GardenSelector } from './components/GardenSelector';
import { ImageDisplay } from './components/ImageDisplay';

const App: React.FC = () => {
  const [gardenStage, setGardenStage] = useState<GardenStage>(GardenStage.DEVELOPING);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Now we construct a URL to fetch a random image from Unsplash.
    setIsLoading(true);
    const terms = GARDEN_SEARCH_TERMS[gardenStage];
    // We add a random number to the URL to ensure we get a new image
    // every time the stage changes, bypassing browser cache for the same URL.
    const url = `https://source.unsplash.com/1024x768/?${terms}&sig=${Math.random()}`;
    setImageUrl(url);
  }, [gardenStage]);

  const handleSelectStage = (stage: GardenStage) => {
    if (stage !== gardenStage) {
      setGardenStage(stage);
    }
  };
  
  const handleImageLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

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
          isLoading={isLoading}
          onImageLoad={handleImageLoad}
        />
      </main>

      <footer className="text-center mt-auto pt-8 text-slate-500 text-sm">
        <p>Your personal sleep sanctuary visualized.</p>
        <p>Photos from <a href="https://unsplash.com?utm_source=dream_garden&utm_medium=referral" target="_blank" rel="noopener noreferrer" className="underline hover:text-sky-400">Unsplash</a>.</p>
      </footer>
    </div>
  );
};

export default App;
