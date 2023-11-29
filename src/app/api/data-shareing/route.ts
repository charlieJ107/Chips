import { getRecord } from "@/lib/data/curd";
import { TcCategory } from "@/lib/data/schema";
import { writeAiStreamWithWriter } from "@/lib/utils";
import { NextResponse } from "next/server";
import "server-only";

export async function GET(request: Request) {
    const category = {
        code: "data-shareing",
        name: "Data Transfer and Sharing"
    } as TcCategory;
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    if (!id || id.length < 1) {
        return new Response('id is required', { status: 400 });
    }
    const tcRecord = await getRecord(id);
    if (!tcRecord) {
        return new Response('record not found', { status: 404 });
    }
    const transformStream = new TransformStream();

    const writer = transformStream.writable.getWriter();

    let hasResult = false;
    for (const result of tcRecord.tcRes) {
        if (result.category.code === category.code) {
            hasResult = true;
            const replacedMessage = result.content.replace(/\n/g, '==Never gonna give you up==');
            const encoder = new TextEncoder();
            writer.write(encoder.encode(`data: ${replacedMessage}\n\n`)).catch((err) => {
                console.error('write error', err);
            });
            writer.close();
            return new NextResponse(transformStream.readable, {
                headers: {
                    'Content-Type': 'text/event-stream;charset=utf-8',
                    'Cache-Control': 'no-cache no-transform',
                    'x-Accel-Buffering': 'no'
                },
            });
        }
    }
    writeAiStreamWithWriter({
        category: category,
        tcRecord: tcRecord,
        writer: writer
    });

    return new NextResponse(transformStream.readable, {
        headers: {
            'Content-Type': 'text/event-stream;charset=utf-8',
            'Cache-Control': 'no-cache no-transform',
            'x-Accel-Buffering': 'no'
        },
    });
}