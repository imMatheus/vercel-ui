import { docsConfig } from "@/config/docs"
import { DocsSidebarNav } from "@/components/sidebar-nav"
import { ScrollArea } from "@/registry/default/ui/scroll-area"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="relative flex-1 items-start md:grid md:grid-cols-[260px_1fr]">
      <aside className="sticky border-r border-border h-[calc(100vh-64px)] min-h-0 top-16 bottom-0 hidden xl:flex flex-col z-100 w-full shrink-0">
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
