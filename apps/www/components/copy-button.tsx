"use client"

import * as React from "react"
import { DropdownMenuTriggerProps } from "@radix-ui/react-dropdown-menu"
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons"
import { NpmCommands } from "types/unist"

import { Event, trackEvent } from "@/lib/events"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"
import {
  Menu,
  MenuButton,
  MenuContainer,
  MenuItem,
} from "@/registry/default/ui/menu"

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string
  src?: string
  event?: Event["name"]
}

export async function copyToClipboardWithMeta(value: string, event?: Event) {
  navigator.clipboard.writeText(value)
  if (event) {
    trackEvent(event)
  }
}

export function CopyButton({
  value,
  className,
  src,
  event,
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  // TODO change this to icon button
  return (
    <Button
      size="sm"
      variant="ghost"
      className={cn(
        "relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50",
        className
      )}
      onClick={() => {
        copyToClipboardWithMeta(
          value,
          event
            ? {
                name: event,
                properties: {
                  code: value,
                },
              }
            : undefined
        )
        setHasCopied(true)
      }}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? (
        <CheckIcon className="h-3 w-3" />
      ) : (
        <CopyIcon className="h-3 w-3" />
      )}
    </Button>
  )
}

interface CopyWithClassNamesProps extends DropdownMenuTriggerProps {
  value: string
  classNames: string
  className?: string
}

export function CopyWithClassNames({
  value,
  classNames,
  className,
  ...props
}: CopyWithClassNamesProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  const copyToClipboard = React.useCallback((value: string) => {
    copyToClipboardWithMeta(value)
    setHasCopied(true)
  }, [])

  // TODO change this to icon button
  return (
    <MenuContainer>
      <MenuButton asChild>
        {hasCopied ? (
          <CheckIcon className="h-3 w-3" />
        ) : (
          <CopyIcon className="h-3 w-3" />
        )}
        <span className="sr-only">Copy</span>
      </MenuButton>
      <Menu align="end">
        <MenuItem onClick={() => copyToClipboard(value)}>Component</MenuItem>
        <MenuItem onClick={() => copyToClipboard(classNames)}>
          Classname
        </MenuItem>
      </Menu>
    </MenuContainer>
  )
}

interface CopyNpmCommandButtonProps extends DropdownMenuTriggerProps {
  commands: Required<NpmCommands>
}

export function CopyNpmCommandButton({
  commands,
  className,
  ...props
}: CopyNpmCommandButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  const copyCommand = React.useCallback(
    (value: string, pm: "npm" | "pnpm" | "yarn" | "bun") => {
      copyToClipboardWithMeta(value, {
        name: "copy_npm_command",
        properties: {
          command: value,
          pm,
        },
      })
      setHasCopied(true)
    },
    []
  )

  // TODO change this to icon button
  return (
    <MenuContainer>
      <MenuButton>
        {hasCopied ? (
          <CheckIcon className="h-3 w-3" />
        ) : (
          <CopyIcon className="h-3 w-3" />
        )}
        <span className="sr-only">Copy</span>
      </MenuButton>
      <Menu align="end">
        <MenuItem onClick={() => copyCommand(commands.__npmCommand__, "npm")}>
          npm
        </MenuItem>
        <MenuItem onClick={() => copyCommand(commands.__yarnCommand__, "yarn")}>
          yarn
        </MenuItem>
        <MenuItem onClick={() => copyCommand(commands.__pnpmCommand__, "pnpm")}>
          pnpm
        </MenuItem>
        <MenuItem onClick={() => copyCommand(commands.__bunCommand__, "bun")}>
          bun
        </MenuItem>
      </Menu>
    </MenuContainer>
  )
}
