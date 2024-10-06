import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { buttonVariants } from "@/registry/default/ui/button"
import { ThemeSwitcher } from "@/registry/default/ui/theme-switcher"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 mx-auto w-full max-w-[1220px] border-border bg-background-100 sm:border-x sm:border-b">
      <div className="flex h-16 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 pr-4 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center gap-2">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="hidden md:block"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "tertiary",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="hidden md:block"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "tertiary",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.twitter className="h-3 w-3 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeSwitcher />
          </nav>
        </div>
      </div>
    </header>
  )
}
