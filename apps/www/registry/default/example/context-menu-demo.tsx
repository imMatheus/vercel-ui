import * as ContextMenu from "@radix-ui/react-context-menu"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"

import { cn } from "@/lib/utils"
import { MenuItem } from "@/registry/default/ui/menu"

export default function ContextMenuDemo() {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div className="w-[300px] rounded-md border border-dashed border-gray-alpha-600 py-11 text-center text-sm">
          Right click here
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        {/* <DropdownMenuPrimitive.Content
          className={cn(
            "font-sm z-50 min-w-[150px] overflow-hidden rounded-xl bg-background-100 p-2 text-popover-foreground shadow-menu data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          )}
        >
          <MenuItem>Hej</MenuItem>
          <MenuItem>då</MenuItem>
        </DropdownMenuPrimitive.Content> */}
        <ContextMenu.Content
          className={cn(
            "font-sm z-50 min-w-[150px] overflow-hidden rounded-xl bg-background-100 p-2 text-popover-foreground shadow-menu data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          )}
        >
          <ContextMenu.Item>
            Back <div className="RightSlot">⌘+[</div>
          </ContextMenu.Item>
          <ContextMenu.Item disabled>
            Forward <div className="RightSlot">⌘+]</div>
          </ContextMenu.Item>
          <ContextMenu.Item>
            Reload <div className="RightSlot">⌘+R</div>
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  )
}
