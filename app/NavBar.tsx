import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];

  return (
    <nav className="flex items-center justify-evenly h-14 mb-5 px-5 select-none">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex items-center space-x-20">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={"text-zinc-500 hover:text-zinc-900"}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div></div>
    </nav>
  );
};

export default NavBar;
