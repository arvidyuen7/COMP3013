import Link from "next/link";
import { prisma } from "@/database";
import { redirect } from "next/navigation";
import { createBlock } from "@/app/api";
import { cookies } from "next/headers";

export default async function CreateBlock() {

  const cookieStore = await cookies();
  const userId = cookieStore.get("user_id")?.value;
  if (!userId) {
    redirect("/login");
  }
  
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <header className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-semibold text-gray-800">Create Code Block</h1>
            <Link className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition" href="/">Go back Home</Link>
        </header>
          <div className="max-w-2xl mx-auto">
            <div>
              <form action={ createBlock }>
                <div>
                  <input name="userId" type="hidden" value={userId} />
                  <input className="rounded my-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body" name="title" type="text" placeholder="Block Title" />
                </div>
                <textarea className="rounded my-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body" name="code" placeholder="your code goes here..."></textarea>
                <div>
                  <button className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">Create</button>
                </div>
              </form>
            </div>
          </div>
      </div>
    </main>
  );
}
