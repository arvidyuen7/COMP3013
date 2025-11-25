"use server"
import { prisma } from "@/database";
import { redirect } from "next/navigation";

export async function createBlock(formData: FormData) {
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    const block = await prisma.block.create({ data: { title, code } });
    redirect("/");
}

export async function updateBlock(formData: FormData) {
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    const id = formData.get("id") as string;
    const block = await prisma.block.update({
          where: {
    // ... provide filter here
    id: Number(id)
  },
  data: {
    // ... provide data here
    title, code
  }

    })
    redirect("/");
}

export async function deleteBlock(formData: FormData) {
  const id = formData.get("id") as string;
  const block = await prisma.block.delete({
    where: {id: Number(id)}
  })
  redirect("/");
}

