'use client';
import { ChatCompletionChunk } from "openai/resources/index.mjs";
import { Suspense } from "react";

export async function Reader({ iter }: { iter: AsyncIterator<ChatCompletionChunk> }) {
    if (!iter) {
        return null;
    }
    const iterResult = await iter.next();
    if (iterResult.done) {
        {
            return null;
        }
    }
    const result = await iterResult.value;
    const text = result.choices[0].delta.content;
    return (
        <span>
            {text}
            <Suspense>
                <Reader iter={iter} />
            </Suspense>
        </span>
    );
}
