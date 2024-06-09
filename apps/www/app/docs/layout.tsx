import { docsConfig } from "@/config/docs"
import { DocsSidebarNav } from "@/components/sidebar-nav"
import { ScrollArea } from "@/registry/default/ui/scroll-area"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="relative flex-1 items-start md:grid xl:grid-cols-[260px_1fr]">
      <aside className="z-100 sticky bottom-0 top-16 hidden h-[calc(100vh-64px)] min-h-0 w-full shrink-0 flex-col border-r border-border xl:flex">
        <div className="relative overflow-y-auto">
          <ScrollArea className="h-full px-6 pt-4">
            <DocsSidebarNav items={docsConfig.sidebarNav} />
          </ScrollArea>
        </div>
      </aside>
      {children}
    </div>
  )
}
