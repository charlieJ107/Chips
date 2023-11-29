export interface TcRecord {
    _id: string;
    chat_id?: string;
    name?: string;
    created_at: Date;
    updated_at: Date;
    language: "en-gb" | "zh-cn";
    contents: string[];
    tcRes: TcResult[];
}

export interface TcResult {
    finish_reason: "stop" | "length" | "tool_calls" | "content_filter" | "function_call" | null | undefined;
    category: TcCategory;
    content: string;
}

export type TcCategory = "Data Transfer and Sharing" | "Users' Rights to Manage Data" | "Data Storage and Processing" | "Permissions and Collected Data" | "Changes";