"use server"
import { prisma } from "@/database";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createBlock(formData: FormData) {
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    const stringUserId = formData.get("userId") as string;
    const userId = Number(stringUserId);
    const block = await prisma.block.create({ data: { title, code, userId } });
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

export async function handleLogin(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const foundUser = await prisma.user.findUnique({
    where: { username, password },
  });
  if (!foundUser) {
    redirect("/login");
  } else {
    (await cookies()).set("user_id", String(foundUser.id));
    redirect("/");
  }
}


