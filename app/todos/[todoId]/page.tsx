import React from "react";
import { pagesProps, Todo } from "../../../typing";
import { notFound } from "next/navigation";

export const dynamicParams = true;

const fetchSingleTodo = async (todoId: string) => {
  const url = "https://dummyjson.com/todos";
  const result = await fetch(`${url}/${todoId}`, { next: { revalidate: 60 } });
  const todo: Todo = await result.json();

  return todo;
};

async function MyTodoPage({ params: { todoId } }: pagesProps) {
  const singleTodo: Todo = await fetchSingleTodo(todoId);

  if (!singleTodo.id) return notFound();

  const { id, completed, todo, userId } = singleTodo;

  return (
    <div className="p-10 bg-yellow-200 border-2 border-black m-2 shadow-xl">
      <p>id:{id}</p>
      <p>completed:{completed ? "yes" : "no"}</p>
      <p>todo:{todo}</p>
      <p className="border-t border-black mt-5 text-right">userId:{userId}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const url = "https://dummyjson.com/todos";
  const result: Response = await fetch(`${url}/`);
  const todos = await result.json();

  const trimmedTodo: Todo[] = todos.todos.splice(0, 10);
  console.log(trimmedTodo);

  return trimmedTodo.map((todo: Todo) => ({ todoId: todo.id.toString() }));
}

export default MyTodoPage;
