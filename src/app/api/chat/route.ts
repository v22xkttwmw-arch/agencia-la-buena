import { OpenAI } from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { 
          role: "system", 
          content: "Eres Alex, un vendedor experto de SparkOps. Tu objetivo es conseguir que el cliente agende una auditoría. Sé breve, profesional y persuasivo." 
        },
        ...messages
      ],
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    // 🚨 ESTA ES LA LÍNEA MÁGICA DE DIAGNÓSTICO 👇
    console.error("🔴 EL ERROR REAL DE OPENAI ES:", error);
    
    return NextResponse.json({ role: "assistant", content: "Error de conexión." }, { status: 500 });
  }
}