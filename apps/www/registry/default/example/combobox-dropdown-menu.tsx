"use client"

import * as React from "react"
import { Calendar, MoreHorizontal, Trash, User } from "lucide-react"

import {
  DropdownMenuLabel,
  DropdownMenuShortcut,
  Menu,
  MenuButton,
  MenuContainer,
  MenuItem,
} from "@/registry/default/ui/menu"

const labels = [
  "feature",
  "bug",
  "enhancement",
  "documentation",
  "design",
  "question",
  "maintenance",
]

export default function ComboboxDropdownMenu() {
  const [label, setLabel] = React.useState("feature")

  return (
    <div className="flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center">
      <p className="text-sm font-medium leading-none">
        <span className="mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground">
          {label}
        </span>
        <span className="text-muted-foreground">Create a new project</span>
      </p>
      <MenuContainer>
        <MenuButton>
          <MoreHorizontal />
        </MenuButton>
        <Menu align="end" width={200}>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          <MenuItem>
            <User className="mr-2 h-4 w-4" />
            Assign to...
          </MenuItem>
          <MenuItem>
            <Calendar className="mr-2 h-4 w-4" />
            Set due date...
          </MenuItem>
          <MenuItem className="text-red-600">
            <Trash className="mr-2 h-4 w-4" />
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </MenuItem>
        </Menu>
      </MenuContainer>
    </div>
  )
}
