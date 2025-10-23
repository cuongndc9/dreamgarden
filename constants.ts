import { GardenStage } from './types';

/**
 * A map of garden stages to their corresponding fixed Unsplash image URLs.
 * These have been hand-picked to ensure quality and relevance for each stage.
 */
export const GARDEN_IMAGE_URLS: Record<GardenStage, string> = {
  [GardenStage.NEGLECTED]: 'https://images.unsplash.com/photo-1563815984293-2c422c54df15?q=80&w=1024&auto=format&fit=crop',
  [GardenStage.DEVELOPING]: 'https://images.unsplash.com/photo-1445855743215-296f71d4a349?q=80&w=1024&auto=format&fit=crop',
  [GardenStage.THRIVING]: 'https://images.unsplash.com/photo-1421832321932-34a0d9233f57?q=80&w=1024&auto=format&fit=crop',
  [GardenStage.SPECIAL]: 'https://images.unsplash.com/photo-1618063230379-e5473e6d8a7c?q=80&w=1024&auto=format&fit=crop',
};