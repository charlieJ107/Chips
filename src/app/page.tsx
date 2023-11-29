import { redirect } from "next/navigation";
import { TcRecord } from "@/lib/data/schema";
import { createRecord } from "@/lib/data/curd";
import { randomUUID } from "crypto";

export default async function Home() {

  const lang = 'en-gb'; // TODO: get from user

  const handleSubmit = async (formData: FormData) => {
    'use server';
    const user_input = formData.get('ts') as string;
    const name = formData.get('name') as string;
    const tcRecord: TcRecord = {
      _id: randomUUID(),
      name: name,
      language: lang,
      created_at: new Date(),
      updated_at: new Date(),
      contents: [
        user_input
      ],
      tcRes: []
    }
    const created_id = await createRecord(tcRecord);
    if (created_id) {
      redirect(`/result/${created_id}`);
    }
  }

  return (
    <div className="container mx-auto p-4 h-full">
      <header className="bg-gray-100 p-4 flex justify-start items-center">
        <h1 className="text-2xl bold px-5">Chips</h1>
        <nav className="px-5">
          <a href="/results" className="text-blue-500 hover:text-blue-700 p-2">Results</a>
          <a href="/info-list" className="text-blue-500 hover:text-blue-700 p-2">Information List</a>
        </nav>
        <select defaultValue={'en-gb'} className="border border-gray-300 rounded px-4 py-2">
          <option value="en-gb" className="font-sans">English (GB)</option>
          {/* <option value="zh-cn">中文 (简体)</option> */}
        </select>
      </header>
      <main className="mt-8">
        <form action={handleSubmit}>
          <label className="block mb-4" htmlFor="name">Name</label>
          <input className="border border-gray-300 rounded px-4 py-2 w-full" type="text" name="name" placeholder="Name" />
          <label className="block mb-4 mt-8" htmlFor="ts">Terms and Conditions</label>
          <textarea className="w-full h-64 border border-gray-300 rounded p-4" name="ts" placeholder='Paste your T&S here' ></textarea>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8" type="submit">Submit</button>
        </form>
      </main>
    </div>
  )
}
