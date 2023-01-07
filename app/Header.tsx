import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex flex-start flex-5 space-x-5 p-5 bg-blue-500 text-center border-b-2 border-black">
      <Link
        href="/"
        className=" transition duration-1500 ease-in-out rounded-full  p-2  border-black border-2 hover:rounded-lg hover:bg-white"
      >
        Home
      </Link>
      <Link
        href="/todos"
        className=" transition duration-1500 ease-in-out rounded-full  p-2  border-black border-2 hover:rounded-lg hover:bg-white"
      >
        todos
      </Link>
      <Link
        href="/search"
        className=" transition duration-1500 ease-in-out rounded-full  p-2  border-black border-2 hover:rounded-lg hover:bg-white"
      >
        search
      </Link>
    </header>
  );
}

export default Header;
