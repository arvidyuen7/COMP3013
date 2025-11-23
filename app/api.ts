"use server"
import { prisma } from "@/database";
import { redirect } from "next/navigation";

export async function createBlock(formData: FormData) {
    "use server"
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    const block = await prisma.block.create({ data: { title, code } });
    redirect("/");
}

export async function updateBlock() {

}

export async function deleteBlock() {

}

