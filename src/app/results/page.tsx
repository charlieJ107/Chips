'use server';
import { getAllRecords } from "@/lib/data/curd";
import Link from "next/link";

export default async function Results() {
    const tcRecords = await getAllRecords();
    return (
        <div className="container mx-auto p-4 h-full">
            <header className="bg-gray-100 p-4 flex justify-start items-center">
                <h1 className="text-2xl bold">Chips</h1>
                <nav className="ps-5">
                    <a href="/" className="text-blue-500 hover:text-blue-700 p-2">Home</a>
                </nav>
            </header>
            <main className="p-6">
                <div className="text-xl font-semibold mb-4">Results</div>
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2">Name</th>
                            <th className="p-2">Created At</th>
                            <th className="p-2">Results</th>
                            <th className="p-2">View</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {tcRecords.map((record) =>
                            <tr key={record._id} className="border-t border-gray-300">
                                <td className="p-2">{record.name}</td>
                                <td className="p-2">{record.created_at.toLocaleDateString()}</td>
                                <td>
                                    {record.tcRes?.length > 0 ? (
                                        <span className="text-green-500 font-semibold">
                                            {record.tcRes.length} Results
                                        </span>
                                    ) : (
                                        <span className="text-red-500 font-semibold">No Results</span>
                                    )}
                                </td>
                                <td className="p-2">
                                    <Link href={`/results/${record._id}`} className="text-blue-500 hover:underline">
                                        View Detail
                                    </Link>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </main>
        </div>
    );
}