"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/registry/default/ui/button"
import {
  Menu,
  MenuButton,
  MenuContainer,
  MenuItem,
} from "@/registry/default/ui/menu"

export default function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <MenuContainer>
      <MenuButton>
      <span className="relative flex items-center justify-center">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
        </span>
      </MenuButton>
      <Menu align="end">
        <MenuItem onClick={() => setTheme("light")}>Light</MenuItem>
        <MenuItem onClick={() => setTheme("dark")}>Dark</MenuItem>
        <MenuItem onClick={() => setTheme("system")}>System</MenuItem>
      </Menu>
    </MenuContainer>
  )
}
