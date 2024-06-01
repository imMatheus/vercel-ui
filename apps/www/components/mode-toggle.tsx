"use client"

import * as React from "react"
import { LaptopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  // NOTE vercel seems to have a bug on there site where the switcher has "32x" in height
  return (
    <div className="flex rounded-full bg-background-100 shadow-border w-fit">
      <span className="h-full">
        <input
          className="sr-only peer"
          type="radio"
          id="theme-switch-system"
          value="system"
          checked={theme === "system"}
          onChange={(e) => setTheme(e.target.value)}
        />
        <label
          htmlFor="theme-switch-system"
          className="peer-checked:shadow-border peer-checked:text-gray-1000 w-[28px] h-[28px] relative text-gray-700 rounded-full flex justify-center items-center"
        >
          <LaptopIcon className="w-4 h-4" />
        </label>
      </span>
      <span className="h-full">
        <input
          className="sr-only peer"
          type="radio"
          id="theme-switch-light"
          value="light"
          checked={theme === "light"}
          onChange={(e) => setTheme(e.target.value)}
        />
        <label
          htmlFor="theme-switch-light"
          className="peer-checked:shadow-border peer-checked:text-gray-1000 w-[28px] h-[28px] relative text-gray-700 rounded-full flex justify-center items-center"
        >
          <SunIcon className="w-4 h-4" />
        </label>
      </span>
      <span className="h-full">
        <input
          className="sr-only peer"
          type="radio"
          id="theme-switch-dark"
          value="dark"
          checked={theme === "dark"}
          onChange={(e) => setTheme(e.target.value)}
        />
        <label
          htmlFor="theme-switch-dark"
          className="peer-checked:shadow-border peer-checked:text-gray-1000 w-[28px] h-[28px] relative text-gray-700 rounded-full flex justify-center items-center"
        >
          <MoonIcon className="w-4 h-4" />
        </label>
      </span>
    </div>
  )
}
