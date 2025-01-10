import dotenv from "dotenv";
import { OpenAI } from "openai";
import fs from "fs";
dotenv.config();
let oai;
let messageHistory = [];
const systemPrompt = fs.readFileSync("system.md", "utf-8");
export default async function chat_agent(question) {
    if (!oai) {
        oai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }
    try {
        messageHistory.push({ role: 'user', content: question });
        messageHistory = messageHistory.slice(-10); // only keep last 10 messages, to prevent unbounded memory usage
        const response = await oai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: 'system', content: systemPrompt },
                ...messageHistory
            ],
        });
        const assistantMessage = response.choices[0].message.content;
        if (assistantMessage) {
            messageHistory.push({ role: 'assistant', content: assistantMessage });
        }
        return assistantMessage;
    }
    catch (error) {
        // on error, remove the last user message from history
        messageHistory.pop();
        throw error;
    }
}
