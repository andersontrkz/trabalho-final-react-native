const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.EXPO_PUBLIC_GROQ_KEY });

type TModelMessage = { role: string, content: string };

async function getModelResponse(modelMessages: TModelMessage[]): Promise<string> {
    const chatCompletion = await groq.chat.completions.create({
    "messages": modelMessages,
    "model": "llama3-8b-8192",
    "temperature": 1,
    "max_tokens": 1024,
    "top_p": 1,
    "stream": false,
    "stop": null
  });

   return chatCompletion.choices[0].message.content;
}

export const getMotivational = async (content: string) => {
    const modelTrainning = { role: "user", content: "Considere que você é uma API de respostas motivacionais. Receba um tema ou situação e retorne uma frase de motivação simples e objetiva. Retorne somente a frase em português. Me motive e mostre o quanto este tema ou situação é boa." };
    return getModelResponse([modelTrainning, { role: "user", content }]);
}

export const getDesmotivational = async (content: string) => {
    const modelTrainning = { role: "user", content: "Considere que você é uma API de respostas desmotivacionais. Receba um tema ou situação e retorne uma frase de desmotivação simples e objetiva. Retorne somente a frase em português. Me desmotive e mostre o quanto este tema ou situação é ruim." };
    return getModelResponse([modelTrainning, { role: "user", content }]);
}
