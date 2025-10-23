import { GardenStage } from './types';

/**
 * A map of garden stages to their corresponding Unsplash search terms.
 * These terms are used to fetch a random, relevant image for each stage.
 */
export const GARDEN_SEARCH_TERMS: Record<GardenStage, string> = {
  [GardenStage.NEGLECTED]: 'neglected,garden,weeds,dry,barren,overgrown',
  [GardenStage.DEVELOPING]: 'garden,sprouts,seedling,new,growth,spring,planting',
  [GardenStage.THRIVING]: 'lush,garden,flowers,vibrant,green,thriving,summer,paradise',
  [GardenStage.SPECIAL]: 'magical,garden,glowing,fantasy,enchanted,dream,bioluminescent',
};
