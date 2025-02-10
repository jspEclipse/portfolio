"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";

export function Nav() {
  return (
    <nav className="w-full px-8 py-4 bg-transparent z-50">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-8 justify-center items-center text-white">
          <Link href="/" className="text-lg font-medium hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/projects" className="text-lg font-medium hover:text-gray-300 transition">
            Projects
          </Link>
          <Link href="/contact" className="text-lg font-medium hover:text-gray-300 transition">
            Contacts
          </Link>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
