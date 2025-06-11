"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export default function Hero() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png"
    ,
  },
  {
    title: "FUNKO",
    link: "https://cursor.so",
    thumbnail:
      "https://i.ibb.co/S4gxBbWS/Screenshot-2025-06-11-at-11-48-08-PM.png",
  },
  {
    title: "LEGO",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://i.ibb.co/NdMPsmjJ/Screenshot-2025-06-11-at-11-49-07-PM.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  
];
