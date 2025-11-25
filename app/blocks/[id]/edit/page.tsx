import { deleteBlock, updateBlock } from "@/app/api";
import { prisma } from "@/database";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: {id: string} }
export default async function EditBlock({params}: Props) {
      const {id} = await params;
      // Get one Block
      const block = await prisma.block.findUnique({
      where: {
          id : Number(id)
      }
      })
  
      if(!block) return notFound();

    return (
    <div>
      <Link href="/">Go back Home</Link>
      <form action={ updateBlock }>
        <div>
          <input name="id" type="hidden" value={block.id} />
          <input name="title" type="text" defaultValue={block.title} />
        </div>
        <textarea name="code" defaultValue={block.code}></textarea>
        <button>Save</button>
      </form>
      <form action={deleteBlock}>
      <input name="id" type="hidden" value={block.id} />
      <button>Delete</button>
      </form>
    </div>
  );
}