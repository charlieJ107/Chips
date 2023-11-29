'use client';
import { TcCategory } from "@/lib/data/schema";
import { useEffect, useRef, useState } from "react";

export function ResultBlock({ id, category }:
    {
        id: string,
        category: TcCategory
    }
) {
    const [text, setText] = useState('');
    const requested = useRef<boolean>(false);

    useEffect(() => {
        const onEventMessage = (event: MessageEvent) => {
            const message = event.data as string;
            const replacedMessage = message.replace(/==Never gonna give you up==/g, '\n');
            setText((prevText) => prevText.concat(replacedMessage));
        }
        if (!requested.current) {
            requested.current = true;
            const eventSource = new EventSource(`/api/${category.code}?id=${id}`);
            eventSource.onopen = () => {
                console.log('Connection to server opened.');
            }
            eventSource.onmessage = (event) => {
                onEventMessage(event);
            }
            eventSource.onerror = (error) => {
                console.error('Error occurred:', error);
                eventSource.close();
            }
        }
    }, [category, id]);
    return (
        <div className="p-4 border border-gray-300 shadow rounded mb-4 w-full md:w-5/12">
            <h3 className="font-bold mb-2">{category.name}</h3>
            <p style={{ whiteSpace: "pre-line" }}>{text}</p>
        </div>
    )
}