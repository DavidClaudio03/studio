'use server';
/**
 * @fileOverview An AI learning assistant flow for basic education students.
 *
 * - aiLearningAssistant - A function that handles student questions about learning material.
 * - AiLearningAssistantInput - The input type for the aiLearningAssistant function.
 * - AiLearningAssistantOutput - The return type for the aiLearningAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiLearningAssistantInputSchema = z.object({
  question: z.string().describe('The student\'s question about the learning material.'),
});
export type AiLearningAssistantInput = z.infer<typeof AiLearningAssistantInputSchema>;

const AiLearningAssistantOutputSchema = z.object({
  answer: z.string().describe('A clear and concise explanation provided by the AI assistant.'),
});
export type AiLearningAssistantOutput = z.infer<typeof AiLearningAssistantOutputSchema>;

export async function aiLearningAssistant(input: AiLearningAssistantInput): Promise<AiLearningAssistantOutput> {
  return aiLearningAssistantFlow(input);
}

const aiLearningAssistantPrompt = ai.definePrompt({
  name: 'aiLearningAssistantPrompt',
  input: {schema: AiLearningAssistantInputSchema},
  output: {schema: AiLearningAssistantOutputSchema},
  prompt: `You are an AI learning assistant designed for basic education students.
Your primary role is to provide clear, simple, and helpful explanations to questions about learning material.
Focus on making complex topics easy to understand, using language appropriate for young learners.
Be concise and ensure your answers directly address the student's question, aiding their understanding and encouraging further exploration.

Student's Question: {{{question}}}`,
});

const aiLearningAssistantFlow = ai.defineFlow(
  {
    name: 'aiLearningAssistantFlow',
    inputSchema: AiLearningAssistantInputSchema,
    outputSchema: AiLearningAssistantOutputSchema,
  },
  async (input) => {
    const {output} = await aiLearningAssistantPrompt(input);
    return output!;
  }
);
