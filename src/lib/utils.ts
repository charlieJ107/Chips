import { ChatCompletionChunk } from "openai/resources/chat/index.mjs";
import { Stream } from "openai/streaming.mjs";
import { addTcResult } from "@/lib/data/curd";
import { TcCategory, TcRecord, TcResult } from "@/lib/data/schema";
import { Prompt } from "@/lib/prompts/schema";
import { getAiResult } from "@/lib/ai";


export async function stroageStreamToTcResult(id: string, category: string, stream: Stream<ChatCompletionChunk>): Promise<boolean> {
    let text = "";
    let finish_reason: string | null = "";
    let chat_id = "";
    for await (const chunk of stream) {
        const choice = chunk.choices[0];
        text += chunk.choices[0].delta.content;
        finish_reason = choice.finish_reason;
        chat_id = chunk.id;
    }
    const tcRes = {
        finish_reason: finish_reason,
        category: category,
        content: text
    } as TcResult;

    return await addTcResult(id, tcRes, chat_id);

}

export async function writeAiStreamWithWriter({
    category,
    tcRecord,
    writer
}: {
    category: TcCategory,
    tcRecord: TcRecord,
    writer: WritableStreamDefaultWriter
}) {
    const prompts: Prompt = await import(`@/lib/prompts/${tcRecord.language}/${category}.json`);
    const aiResult = await getAiResult(tcRecord.contents[0], prompts.prompt);
    const encoder = new TextEncoder();
    let completeMessage = '';
    let lastChunk = null;
    for await (const chunk of aiResult) {
        const content = chunk.choices[0].delta.content || '';
        completeMessage += content;
        const replacedMessage = content.replace(/\n/g, '==Never gonna give you up==');
        writer.write(encoder.encode(`data: ${replacedMessage}\n\n`)).catch((err) => {
            console.error('write error', err);
        });
        lastChunk = chunk;
    }
    writer.close();
    const tcRes = {
        finish_reason: lastChunk?.choices[0].finish_reason,
        category: category,
        content: completeMessage
    } as TcResult;

    await addTcResult(tcRecord._id, tcRes, lastChunk?.id);
}


export const categories: TcCategory[] = [
    "data-shareing",
    "default-content",
    "operating-data",
    "permissions",
    "update-inform"
];
