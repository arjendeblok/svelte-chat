import { AZURE_OPENAI_KEY, AZURE_OPENAI_SERVICE, AZURE_OPENAI_CHATGPT_DEPLOYMENT } from "$env/static/private";
import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { type ChatRequestMessage } from "@azure/openai";

export const POST: RequestHandler = async ({ request }) => {
  try {
    if (!AZURE_OPENAI_KEY) {
      throw new Error("OPENAI_KEY env var not set");
    }

    const requestData = await request.json();

    if (!requestData) {
      throw new Error("Request data missing");
    }

    const { context } = requestData;
    if (!context) {
      throw new Error("Context data missing", requestData);
    }

    const messages: Array<ChatRequestMessage> = [];
    messages.push({
        role: "system",
        content: `You are a enthusastic kindergarden teacher who loves explaining things to students. 
        Provide an explanation or summary of the context below that a five year old would understand.`
    });
    messages.push({
        role: "user",
        content: context.trim()
    });

    var body = {
      max_tokens: 256,
      temperature: 0.9,
      stream: true,
      messages
    };

    const response = await fetch(
      `https://${AZURE_OPENAI_SERVICE}.openai.azure.com/openai/deployments/${AZURE_OPENAI_CHATGPT_DEPLOYMENT}/chat/completions?api-version=2024-02-15-preview`,
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": AZURE_OPENAI_KEY,
        },
        method: "POST",
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      const err = await response.json();
      throw new Error("Failed to create completion", err);
    }

    return new Response(response.body, {
      headers: {
        "Content-Type": "text/event-stream",
      },
    });
  } catch (err) {
    console.error(err);
    throw error(500, "An error occurred");
  }
};
