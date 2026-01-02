
import { GoogleGenAI, Type } from "@google/genai";
import { SongResponse, Subject, YearGroup } from "../types";

export const generateSong = async (
  subject: Subject,
  year: YearGroup,
  topic: string,
  genre: string
): Promise<SongResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `
    You are a world-class professional songwriter. Your goal is to write a radio-ready hit for 11-13 year olds (UK KS3) based on the topic: "${topic}" (Subject: ${subject}).

    CRITICAL INSTRUCTION: 
    - DO NOT write a song that teaches the whole topic. 
    - DO NOT include a list of facts or dates.
    - SELECT ONLY ONE OR TWO core curriculum points from this topic. 
    - USE THOSE 1-2 POINTS AS A METAPHOR for a relatable life experience (e.g., a friendship, a struggle, or a crush). 
    - The song should sound 90% like a real song you'd hear on Spotify and only 10% like it has a secret educational meaning. 

    Example: If the topic is 'Periodic Table', don't sing about elements. Sing about a "Chemical Reaction" between two people where "noble gases" represent being distant or "halogens" represent being reactive/angry.

    Rules:
    1. Structure: You MUST follow this exact sequence:
       - [Verse 1]
       - [Pre-Chorus]
       - [Chorus]
       - [Verse 2]
       - [Pre-Chorus]
       - [Chorus]
       - [Bridge] (include vocal cues in brackets like [low vocal register] or [crescendo])
       - [Chorus]
    2. Repeating Sections: The [Chorus] and [Pre-Chorus] must be identical in all occurrences.
    3. Style: Use the genre style "${genre}". 
    4. Language: British English only.
    5. Output: Provide a title, the lyrics, a specific AI music description for Suno/Udio, and a short "educationalFocus" explaining which 1-2 points you chose as metaphors.

    Output must be in JSON format.
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          lyrics: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                section: { type: Type.STRING },
                content: { type: Type.STRING }
              },
              required: ["section", "content"]
            }
          },
          aiStylePrompt: { type: Type.STRING },
          educationalFocus: { type: Type.STRING }
        },
        required: ["title", "lyrics", "aiStylePrompt", "educationalFocus"]
      }
    }
  });

  const text = response.text;
  if (!text) throw new Error("No response from AI");
  
  return JSON.parse(text) as SongResponse;
};
