"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";


export default function NavbarDemo() {
  return (
    <div>
      <Navbar className="top-8"/>
    </div>
  );
}
 
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="LEGO"
              href="https://i.ibb.co/NdMPsmjJ/Screenshot-2025-06-11-at-11-49-07-PM.png"
              src="https://i.ibb.co/NdMPsmjJ/Screenshot-2025-06-11-at-11-49-07-PM.png"
              description="A reimagined UI for popular gamemaker LEGO shortlisted top 8 in Mock up 2025"
            />
            <ProductItem
              title="FUNKO"
              href="https://i.ibb.co/S4gxBbWS/Screenshot-2025-06-11-at-11-48-08-PM.png"
              src="https://i.ibb.co/S4gxBbWS/Screenshot-2025-06-11-at-11-48-08-PM.png"
              description="Collection of short games like Hangman and Tenzies"
            />
            <ProductItem
              title="Dear Scraps"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="An online Scrapbook making website made for Newbiethon 25"
            />
            <ProductItem
              title="Portfolio Website"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="A personal portfolio website to showcase various contributions made by me"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Resume</HoveredLink>
            <HoveredLink href="https://github.com/Kushsax">GitHub</HoveredLink>
            <HoveredLink href="https://www.linkedin.com/in/kushsax/">LinkedIn</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}