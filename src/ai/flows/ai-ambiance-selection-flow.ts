'use server';
/**
 * @fileOverview This file defines a Genkit flow for selecting an AI-generated ambient audio track
 * suitable for focused and calming learning within a 'Cyberpunk-Nature' themed environment.
 *
 * - aiAmbianceSelection - An exported function to trigger the ambiance selection process.
 * - AiAmbianceSelectionInput - The input type for the aiAmbianceSelection function.
 * - AiAmbianceSelectionOutput - The return type for the aiAmbianceSelection function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiAmbianceSelectionInputSchema = z
  .object({})
  .describe('Input schema for selecting an AI-generated ambiance track. Currently, no specific input is required as the context is predefined.');
export type AiAmbianceSelectionInput = z.infer<typeof AiAmbianceSelectionInputSchema>;

const AiAmbianceSelectionOutputSchema = z.object({
  mood: z
    .string()
    .describe('The overall mood or feeling the ambient track should evoke (e.g., calming, focused, inspiring, serene).'),
  theme: z
    .string()
    .describe(
      'The primary theme of the ambient track, blending cyberpunk and nature elements (e.g., neon forest, digital rainforest, bioluminescent urban garden).'
    ),
  description: z
    .string()
    .describe(
      'A detailed textual description of the ambient audio track, suitable for use by an AI music generator. It should cover elements like instrumentation (e.g., synth pads, nature sounds, subtle electronic beats), soundscape, tempo, and how it blends futuristic and natural sounds to promote focus and calm for learning.'
    ),
});
export type AiAmbianceSelectionOutput = z.infer<typeof AiAmbianceSelectionOutputSchema>;

export async function aiAmbianceSelection(
  input: AiAmbianceSelectionInput
): Promise<AiAmbianceSelectionOutput> {
  return aiAmbianceSelectionFlow(input);
}

const aiAmbianceSelectionPrompt = ai.definePrompt({
  name: 'aiAmbianceSelectionPrompt',
  input: { schema: AiAmbianceSelectionInputSchema },
  output: { schema: AiAmbianceSelectionOutputSchema },
  prompt: `You are an AI assistant specialized in creating optimal learning environments. Your task is to suggest a detailed description for an ambient audio track that will help students focus and feel calm while learning.

The context for this ambient track is a 'Cyberpunk-Nature' themed virtual learning ecosystem. The track should blend futuristic elements with serene natural sounds, fostering both concentration and tranquility.

Provide a detailed description of this ideal ambient track, including its mood, overarching theme, and specific elements that define its soundscape. This description will be used to generate the audio track.

Desired output format:
{{json schema=AiAmbianceSelectionOutputSchema}}`,
});

const aiAmbianceSelectionFlow = ai.defineFlow(
  {
    name: 'aiAmbianceSelectionFlow',
    inputSchema: AiAmbianceSelectionInputSchema,
    outputSchema: AiAmbianceSelectionOutputSchema,
  },
  async (input) => {
    const { output } = await aiAmbianceSelectionPrompt(input);
    if (!output) {
      throw new Error('Failed to generate ambiance selection output.');
    }
    return output;
  }
);
