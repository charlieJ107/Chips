import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

export interface Prompt {
    category: "data-shareing" | "default-content" | "permissions" | "update-inform" | "operating-data";
    prompt: ChatCompletionMessageParam[];
}