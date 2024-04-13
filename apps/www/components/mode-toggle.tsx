"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenuContent,
  MenuButton,
  MenuContainer,
  MenuItem,
} from "@/registry/default/ui/menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <MenuContainer>
      <MenuButton>
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </MenuButton>
      <DropdownMenuContent align="end">
        <MenuItem onClick={() => setTheme("light")}>Light</MenuItem>
        <MenuItem onClick={() => setTheme("dark")}>Dark</MenuItem>
        <MenuItem onClick={() => setTheme("system")}>System</MenuItem>
      </DropdownMenuContent>
    </MenuContainer>
  )
}
