"use client";

import React from "react";
import Link from "next/link";
import { links } from "@/others/NavLinks";
import style from "./navBar.module.css";
import DarkModeToggle from "../DarkMode/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

function NavBar() {
  const session = useSession();

  return (
    <div className={style.container}>
      <Link href="/" className={style.logo}>
        Kavi
      </Link>
      <div className={style.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={style.link}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={style.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
