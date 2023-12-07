"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();
  return (
    <div className="flex bg-slate-200 p-3 space-x-3">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
      {status === "authenticated" && (
        <span>
          {session.user!.name}
          <Link href="/api/auth/signout" className="ml-3">
            Sign out
          </Link>
        </span>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </div>
  );
};

export default NavBar;
