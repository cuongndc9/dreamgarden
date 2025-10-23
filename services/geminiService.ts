import { GoogleGenAI } from '@google/genai';
import { GardenStage } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

const prompts: Record<GardenStage, string> = {
    [GardenStage.NEGLECTED]: "Write a short, poetic description (2-3 sentences) for a digital garden that is in a 'Neglected' state. It should feel melancholic but hopeful, reflecting inconsistent sleep.",
    [GardenStage.DEVELOPING]: "Write a short, poetic description (2-3 sentences) for a digital garden that is in a 'Developing' state. It should feel like a hopeful new beginning, reflecting improving sleep habits.",
    [GardenStage.THRIVING]: "Write a short, poetic description (2-3 sentences) for a digital garden that is in a 'Thriving' state. It should feel vibrant, lush, and peaceful, reflecting excellent and consistent sleep.",
    [GardenStage.SPECIAL]: "Write a short, poetic description (2-3 sentences) for a digital garden that has reached a 'Special Achievement' state. It should feel magical, rare, and wondrous, reflecting a significant milestone in sleep consistency."
};

/**
 * Generates a garden description using the Gemini API based on the garden stage.
 * @param stage The current stage of the garden.
 * @returns A promise that resolves to the generated description string.
 */
export const generateGardenDescription = async (stage: GardenStage): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompts[stage],
        });
        return response.text;
    } catch (error) {
        console.error('Error generating description from Gemini:', error);
        throw new Error('Failed to communicate with the AI model.');
    }
};
