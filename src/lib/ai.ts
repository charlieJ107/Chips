/**
 * @file ai.ts
 * @description This file is used to communicate with OpenAI API.
 */
import 'server-only';
import OpenAI from "openai";
import { ChatCompletionChunk, ChatCompletionMessageParam } from 'openai/resources/index.mjs';
import { Stream } from 'openai/streaming.mjs';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function getAiResult(input_text: string, prompt: ChatCompletionMessageParam[]) {
    prompt.push({
        "role": "user",
        "content": input_text
    });
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-16k",
        messages: prompt,
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stream: true,
    });
    return response;
}

export async function getAiStream(input_text: string, prompt: ChatCompletionMessageParam[]) {
    prompt.push({
        "role": "user",
        "content": input_text
    });
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-16k",
        messages: prompt,
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stream: true,
    });
    return response;
}

export default openai;
