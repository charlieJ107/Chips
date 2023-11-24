import mongo from '@/lib/data/mongo';
import { TcRecord, TcResult } from '@/lib/data/schema';
import { randomUUID } from 'crypto';

export async function createRecord(record: TcRecord): Promise<string | null> {
    const collection = mongo.db("chips").collection<TcRecord>('tc');
    if (!record.created_at) {
        record.created_at = new Date();
    }
    if (!record.updated_at) {
        record.updated_at = new Date();
    }
    if (!record._id) {
        record._id = randomUUID();
    }
    const result = await collection.insertOne(record);
    if (result.acknowledged) {
        return result.insertedId;
    }
    return null;
}

export async function getRecord(id: string): Promise<TcRecord | null> {
    const collection = mongo.db("chips").collection<TcRecord>('tc');
    try {
        return await collection.findOne({ _id: id });
    } catch (e) {
        throw e;
    }
}


export async function getAllRecords(): Promise<TcRecord[]> {
    const collection = mongo.db("chips").collection<TcRecord>('tc');
    try {
        return await collection.find().toArray();
    } catch (e) {
        throw e;
    }
}

export async function addTcResult(id: string, tcRes: TcResult, chat_id?: string): Promise<boolean> {
    const collection = mongo.db("chips").collection<TcRecord>('tc');
    if (chat_id) {
        const updateResult = await collection.updateOne({ _id: id }, {
            $push: { tcRes },
            $set: {
                updated_at: new Date(),
                chat_id: chat_id
            }
        });
        return updateResult.modifiedCount === 1;
    } else {
        const updateResult = await collection.updateOne({ _id: id }, {
            $push: { tcRes },
            $set: {
                updated_at: new Date()
            }
        });
        return updateResult.modifiedCount === 1;
    }
}
