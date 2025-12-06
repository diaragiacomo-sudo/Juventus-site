import { GoogleGenAI } from "@google/genai";

export const getJuveInsights = async (): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "Chiave API mancante. Impossibile generare l'analisi.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Using flash model for speed and textual capability
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: "Scrivi un breve paragrafo emozionante e appassionato (massimo 80 parole) in italiano sulla storia gloriosa della Juventus, menzionando lo spirito 'Fino alla Fine' e l'ambizione di vincere sempre. Usa un tono epico da tifoso.",
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "La storia continua...";
  } catch (error) {
    console.error("Error generating insights:", error);
    return "Non siamo riusciti a contattare l'oracolo bianconero al momento.";
  }
};

export const getMatchPrediction = async (): Promise<string> => {
    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) return "Dati non disponibili.";
  
      const ai = new GoogleGenAI({ apiKey });
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: "Genera una breve analisi tattica fittizia (massimo 3 frasi) per la prossima partita della Juventus. Concentrati sulla solidità difensiva e sul contropiede.",
      });
  
      return response.text || "Analisi tattica in corso...";
    } catch (error) {
      console.error("Error generating prediction:", error);
      return "Analisi tattica non disponibile.";
    }
  };

export const generateArticleSummary = async (title: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) return "Sommario automatico non disponibile.";

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Sei un giornalista sportivo esperto della Juventus. Scrivi un breve sommario accattivante (massimo 25-30 parole) per una news intitolata: "${title}". Usa un tono professionale ma coinvolgente per i tifosi.`,
    });

    return response.text || "";
  } catch (error) {
    console.error("Error generating summary:", error);
    return "";
  }
};