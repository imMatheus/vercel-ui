"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden pl-6 md:flex">
      <Link
        href="/"
        className="mr-6 flex h-16 items-center space-x-2 xl:w-[236px] xl:border-r xl:pr-4"
      >
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link
          href="/docs"
          className={cn(
            "transition-colors",
            pathname === "/docs"
              ? "text-gray-1000"
              : "text-gray-700 hover:text-gray-900"
          )}
        >
          Docs
        </Link>
        <Link
          href="/docs/components"
          className={cn(
            "transition-colors",
            pathname?.startsWith("/docs/components")
              ? "text-gray-1000"
              : "text-gray-700 hover:text-gray-900"
          )}
        >
          Components
        </Link>

        {/* <Link
          href="/examples"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/examples")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Examples
        </Link> */}
      </nav>
    </div>
  )
}
