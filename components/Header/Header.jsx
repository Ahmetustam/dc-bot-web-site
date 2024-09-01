import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center h-[6rem] w-full">
        <div className="flex gap-10 items-center">
          <h1 className="text-3xl font-bold">
            <span className="text-blue-600">Plus</span>
            <span className="text-white">Bot</span>
          </h1>
          <div className="hidden md:flex">
            <ul className="flex gap-6 text-[15px] font-medium">
              <li>
                <Link
                  href={"/"}
                  className={
                    router.pathname === "/"
                      ? "text-white underline underline-offset-8 decoration-blue-600"
                      : "text-blue-500 hover:text-blue-600 transition duration-300"
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/Commands"}
                  className={
                    router.pathname === "/Commands"
                      ? "text-white underline underline-offset-8 decoration-blue-600"
                      : "text-blue-500 hover:text-blue-600 transition duration-300"
                  }
                >
                  Komutlar
                </Link>
              </li>
              <li>
                <Link
                  href={"/About"}
                  className={
                    router.pathname === "/About"
                      ? "text-white underline underline-offset-8 decoration-blue-600"
                      : "text-blue-500 hover:text-blue-600 transition duration-300"
                  }
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href={"/Vote"}
                  className={
                    router.pathname === "/Vote"
                      ? "text-white"
                      : "text-blue-500 hover:text-blue-600 transition duration-300"
                  }
                >
                  Vote
                </Link>
              </li>
              <li>
                <Link
                  href={"/addbot"}
                  className={
                    router.pathname === "/addbot"
                      ? "text-white"
                      : "text-blue-500 hover:text-blue-600 transition duration-300"
                  }
                >
                  Add Bot
                </Link>
              </li>
              <li>
                <Link
                  href={"/sponsor"}
                  className={
                    router.pathname === "/sponsor"
                      ? "text-white"
                      : "text-blue-500 hover:text-blue-600 transition duration-300"
                  }
                >
                  Sponsor
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="text-white flex md:hidden bg-blue-600/20 hover:bg-blue-600/40 rounded-lg p-2"
            onClick={() => setNav(!nav)}
          >
            {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
          <button className="text-white font-medium animate-bounce hidden md:block bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Add a Bot
          </button>
        </div>
      </div>
      {nav && (
        <div className="md:hidden bg-gray-800 w-full h-screen fixed top-0 left-0 z-50 flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setNav(false)}
          >
            <AiOutlineClose size={30} />
          </button>
          <ul className="flex flex-col gap-4 text-[15px] font-medium mt-10">
            <li>
              <Link
                href={"/"}
                className={
                  router.pathname === "/"
                    ? "text-white underline underline-offset-8 decoration-blue-600"
                    : "text-blue-500 hover:text-blue-600"
                }
                onClick={() => setNav(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/Commands"}
                className={
                  router.pathname === "/Commands"
                    ? "text-white underline underline-offset-8 decoration-blue-600"
                    : "text-blue-500 hover:text-blue-600"
                }
                onClick={() => setNav(false)}
              >
                Komutlar
              </Link>
            </li>
            <li>
              <Link
                href={"/About"}
                className={
                  router.pathname === "/About"
                    ? "text-white underline underline-offset-8 decoration-blue-600"
                    : "text-blue-500 hover:text-blue-600"
                }
                onClick={() => setNav(false)}
              >
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link
                href={"/Vote"}
                className={
                  router.pathname === "/Vote"
                    ? "text-white"
                    : "text-blue-500 hover:text-blue-600"
                }
                onClick={() => setNav(false)}
              >
                Vote
              </Link>
            </li>
            <li>
              <Link
                href={"/addbot"}
                className={
                  router.pathname === "/addbot"
                    ? "text-white"
                    : "text-blue-500 hover:text-blue-600"
                }
                onClick={() => setNav(false)}
              >
                Add Bot
              </Link>
            </li>
            <li>
              <Link
                href={"/sponsor"}
                className={
                  router.pathname === "/sponsor"
                    ? "text-white"
                    : "text-blue-500 hover:text-blue-600"
                }
                onClick={() => setNav(false)}
              >
                Sponsor
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
