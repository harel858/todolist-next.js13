import Link from "next/link";
import React from "react";
import { Todo } from "../../typing";

async function fetchTodos() {
  const url = "https://dummyjson.com/todos";
  const res: Response = await fetch(url);
  const todosObj = await res.json();
  const todos: Todo[] = todosObj.todos;
  return todos;
}

function TodoList(): any {
  return fetchTodos()
    .then((res) => res)
    .then((todos) => (
      <div className="flex flex-col gap-8 justify-around content-center m-10">
        {todos.map((todo: any) => {
          return (
            <Link
              href={`/todos/${todo.id}`}
              className="p-5 text-2xl rounded-lg  transition duration-300 ease-out hover:rounded-full hover:bg-black hover:text-white border-2 border-black bg-green-500 text-center text-l text-bold"
            >
              todo:{todo.id}
            </Link>
          );
        })}
      </div>
    ));
}

export default TodoList;
