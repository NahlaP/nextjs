"use client";

import { usePathname } from "next/navigation";
import Hero from "./Hero";

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" && <Hero />}
      {children}
    </>
  );
}
