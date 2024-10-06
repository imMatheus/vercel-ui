"use client"

import * as React from "react"
import { LaptopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  // NOTE vercel seems to have a bug on there site where the switcher has "32x" in height
  return (
    <div className="flex w-fit rounded-full bg-background-100 shadow-border">
      <span className="h-full">
        <input
          className="peer sr-only"
          type="radio"
          id="theme-switch-system"
          value="system"
          checked={theme === "system"}
          onChange={(e) => setTheme(e.target.value)}
        />
        <label
          htmlFor="theme-switch-system"
          className="relative flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-full text-gray-700 peer-checked:text-gray-1000 peer-checked:shadow-border"
        >
          <LaptopIcon className="h-4 w-4" />
        </label>
      </span>
      <span className="h-full">
        <input
          className="peer sr-only"
          type="radio"
          id="theme-switch-light"
          value="light"
          checked={theme === "light"}
          onChange={(e) => setTheme(e.target.value)}
        />
        <label
          htmlFor="theme-switch-light"
          className="relative flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-full text-gray-700 peer-checked:text-gray-1000 peer-checked:shadow-border"
        >
          <SunIcon className="h-4 w-4" />
        </label>
      </span>
      <span className="h-full">
        <input
          className="peer sr-only"
          type="radio"
          id="theme-switch-dark"
          value="dark"
          checked={theme === "dark"}
          onChange={(e) => setTheme(e.target.value)}
        />
        <label
          htmlFor="theme-switch-dark"
          className="relative flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-full text-gray-700 peer-checked:text-gray-1000 peer-checked:shadow-border"
        >
          <MoonIcon className="h-4 w-4" />
        </label>
      </span>
    </div>
  )
}
