import { LayoutProps } from "@/models/index";
import Link from "next/link";
import * as React from "react";

export interface IMainLayout {}

export function AdminLayout({children}: LayoutProps) {
  return (
    <div>
      <h1>Admin layout layout</h1>
      <div>Sidebar</div>
      <Link href="/">
        
        <a>Hoame</a>
      </Link>
      <Link href="/about">
        
        <a>About</a>
      </Link>
      <div>
        {children}
      </div>
    </div>
  );
}
