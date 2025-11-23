import Link from "next/link";
import { prisma } from "@/database";
import { redirect } from "next/navigation";
import { createBlock } from "@/app/api";

export default function CreateBlock() {


  return (
    <div>
      <Link href="/">Go back Home</Link>
      <form action={ createBlock }>
        <div>
          <input name="title" type="text" placeholder="Block Title" />
        </div>
        <textarea name="code" placeholder="your code goes here..."></textarea>
        <button>Create</button>
      </form>
    </div>
  );
}
