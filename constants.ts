import { GardenStage } from './types';

/**
 * A map of garden stages to their corresponding fixed Unsplash image URLs.
 * These have been hand-picked and verified to ensure quality, relevance, and stability.
 */
export const GARDEN_IMAGE_URLS: Record<GardenStage, string> = {
  [GardenStage.NEGLECTED]: 'https://images.unsplash.com/photo-1445905595283-228f81d29330?q=80&w=1024&auto=format&fit=crop',
  [GardenStage.DEVELOPING]: 'https://images.unsplash.com/photo-1452814972248-c2811f5a6538?q=80&w=1024&auto=format&fit=crop',
  [GardenStage.THRIVING]: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1024&auto=format&fit=crop',
  [GardenStage.SPECIAL]: 'https://images.unsplash.com/photo-1516214124256-0d4da0834572?q=80&w=1024&auto=format&fit=crop',
};