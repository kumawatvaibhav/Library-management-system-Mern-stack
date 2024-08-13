'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const handle = () => {
    router.push("/Login");
  }

  const headerStyle = {
    backgroundColor: '#334155',
  };

  return (
    <div style={headerStyle} className="bg-red-400 fixed top-0 left-0 right-0 flex px-8 justify-between">
      <Link href="/">
        <div className="font-bold text-2xl flex items-center justify-center">
          Public-Library
        </div>
      </Link>
      <div className="flex px-2 pl-6 space-x-6 items-center justify-between py-2">
        <Link href="#about">
          <nav className="text-black text-bold flex justify-center items-center">
            About
          </nav>
        </Link>
        <Link href="/books">
          <nav className="text-black text-bold flex justify-center items-center">
            Books
          </nav>
        </Link>
        <button
          className="items-center relative inline-flex h-12 overflow-hidden rounded-full p-[1px] "
          onClick={handle}
        >
          <span className="inline-flex cursor-pointer items-center justify-center rounded-full">
            Login
          </span>
        </button>
      </div>
    </div>
  );
}

export default Header;