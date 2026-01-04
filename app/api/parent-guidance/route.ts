import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key missing" },
        { status: 500 }
      );
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // 1. UPDATED: Destructure "categories" as the array from the form
    const { childAge, categories, goal, description } = await req.json();

    // 2. NEW: Convert array to a string (e.g., "Emotion, Behavior")
    const situationString = Array.isArray(categories) 
      ? categories.join(", ") 
      : categories;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `
            You are Parent Copilot, a calm, supportive, and responsible parenting assistant.
            Rules:
            - Respond ONLY in JSON with the keys: summary, suggestions, whatToAvoid, exampleScript
            - Provide concise, actionable, and age-appropriate suggestions
            - WhatToAvoid should list common mistakes
            - ExampleScript gives a short dialogue parents can use
            - If a situation indicates danger or serious crisis, respond ONLY with:
              { "summary": "Seek professional help immediately.", "suggestions": [], "whatToAvoid": [], "exampleScript": "" }
            - Always prioritize safety and emotional support
          `,
        },
        {
          role: "user",
          content: `
            Child age: ${childAge}
            Situation Type: ${situationString} 
            Goal: ${goal}
            Description: ${description}

            Return valid JSON exactly matching:
            {
              "summary": "Short summary of guidance",
              "suggestions": ["List of actionable steps"],
              "whatToAvoid": ["List of mistakes to avoid"],
              "exampleScript": "Short example dialogue parents can use"
            }
          `,
        },
      ],
    });

    const raw = completion.choices[0].message.content;

    let guidance;
    try {
      guidance = JSON.parse(raw || "{}");
    } catch {
      guidance = {
        summary: "Could not generate guidance. Try again.",
        suggestions: [],
        whatToAvoid: [],
        exampleScript: "",
      };
    }

    return NextResponse.json({
      guidance,
      disclaimer: "This guidance is informational and does not replace professional advice.",
    });
  } catch (error: any) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { error: "Internal server error", message: error?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}