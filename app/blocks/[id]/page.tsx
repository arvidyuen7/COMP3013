import { deleteBlock } from "@/app/api";
import { prisma } from "@/database";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: {id: string} }
export default async function ShowBlock({params}: Props) {
    const {id} = await params;
    // Get one Block
    const block = await prisma.block.findUnique({
    where: {
        id : Number(id)
    }
    })

    if(!block) return notFound();
    return (
        <main className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-2xl mx-auto">
                <header className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-semibold text-gray-800">View Code Block</h1>
                    <Link className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition" href="/">Go back Home</Link>
                </header>
                <div className="max-w-2xl mx-auto">
                    <p>Title</p>
                    <p className="rounded my-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body">{block.title}</p>
                    <p>Code</p>
                    <p className="rounded my-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body">{block.code}</p>
                </div>
                <div className="my-5 flex items-center justify-between mb-8">
                    <Link className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition" href={`/blocks/${id}/edit`}>Edit Code Block</Link>
                    <form action={deleteBlock}>
                        <input name="id" type="hidden" value={block.id} />
                        <button className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">Delete Code Block</button>
                    </form>
                </div>
            </div>
        </main>
    );
}
