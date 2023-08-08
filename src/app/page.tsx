import { prisma } from "@/db";
import Link from "next/link";
import { TodoItem } from "@/components";
import { Header, List } from "@/lib/styled";

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";

  await prisma.todo.update({
    where: { id },
    data: {
      complete,
    },
  });
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <Header>
        <h1>Todos ✨</h1>
        <Link href="/new">New</Link>
      </Header>
      <List>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </List>
    </>
  );
}
