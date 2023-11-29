'use server';

import { NotFound } from "@/components/404";
import { ResultBlock } from "@/components/resultBlock";
import { getRecord } from "@/lib/data/curd";
import { categories } from "@/lib/utils";

export default async function Result({ params }: { params: { id: string } }) {

    const tcRecord = await getRecord(params.id);
    if (!tcRecord) {
        return <NotFound />
    }

    return (
        <div className="container mx-auto p-4 h-full">
            <header className="bg-gray-100 p-4 flex justify-start items-center">
                <h1 className="text-2xl bold">Chips</h1>
                <nav className="ps-5">
                    <a href="/" className="text-blue-500 hover:text-blue-700 p-2">Home</a>
                    <a href="/results" className="text-blue-500 hover:text-blue-700 p-2">Results</a>
                    <a href="/info-list" className="text-blue-500 hover:text-blue-700 p-2">Information List</a>
                </nav>
            </header>
            <h2 className="text-2xl font-bold px-4 py-5">{tcRecord.name || "Unkown Terms and Conditionss"}</h2>
            <hr className="py-4 border-t" />
            <main className="flex flex-wrap -m-2 pt-5 px-3 mx-5">
                {categories.map((category) => (
                    <ResultBlock key={category.code} id={params.id} category={category} />
                ))}

            </main>

        </div>
    )


}