import { Header } from "@/lib/styled";
import Link from "next/link";
import StyledForm from "./form.styled";
import { prisma } from "@/db";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid todo title.");
  }

  await prisma.todo.create({
    data: {
      title,
    },
  });

  redirect("/");
}

export default function NewTodo() {
  return (
    <>
      <Header>
        <h1>New todo 📝</h1>
      </Header>
      <StyledForm action={createTodo}>
        <input type="text" name="title" id="title" placeholder="Your todo" />
        <div className="buttons">
          <button type="submit">Create</button>
          <Link href="..">Cancel</Link>
        </div>
      </StyledForm>
    </>
  );
}
