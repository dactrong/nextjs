import { LayoutProps } from "@/models/index";
import Link from "next/link";
import  React, { useEffect } from "react";

export interface IMainLayout {}

export function MainLayout({children}: LayoutProps) {
    useEffect(() =>{
       console.log('Main layout mounting');
        return   () =>     console.log('Main layout unmounting');

        
    },[])
  return (
    <div>
      <h1>Main layout</h1>
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
