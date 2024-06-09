"use client"

import * as React from "react"
import { Index } from "@/__registry__"
import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { useConfig } from "@/hooks/use-config"
import { CopyButton, CopyWithClassNames } from "@/components/copy-button"
import { Icons } from "@/components/icons"
import { ThemeWrapper } from "@/components/theme-wrapper"
import { styles } from "@/registry/styles"

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  extractClassname?: boolean
  extractedClassNames?: string
  align?: "center" | "start" | "end"
}

export function ComponentPreview({
  name,
  children,
  className,
  extractClassname,
  extractedClassNames,
  align = "center",
  ...props
}: ComponentPreviewProps) {
  const [config] = useConfig()
  const index = styles.findIndex((style) => style.name === config.style)

  const Codes = React.Children.toArray(children) as React.ReactElement[]
  const Code = Codes[index]

  const Preview = React.useMemo(() => {
    const Component = Index[config.style][name]?.component

    if (!Component) {
      return (
        <p className="text-sm text-muted-foreground">
          Component{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>
      )
    }

    return <Component />
  }, [name, config.style])

  const codeString = React.useMemo(() => {
    if (
      typeof Code?.props["data-rehype-pretty-code-fragment"] !== "undefined"
    ) {
      const [, Button] = React.Children.toArray(
        Code.props.children
      ) as React.ReactElement[]
      return Button?.props?.value || Button?.props?.__rawString__ || null
    }
  }, [Code])

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-gray-alpha-400 bg-background-100",
        className
      )}
      {...props}
    >
      {extractedClassNames && codeString && (
        <div className="flex items-center justify-between p-4">
          {extractedClassNames ? (
            <CopyWithClassNames
              value={codeString}
              classNames={extractedClassNames}
            />
          ) : (
            codeString && <CopyButton value={codeString} />
          )}
        </div>
      )}
      <ThemeWrapper defaultTheme="zinc">
        <div
          className={cn("w-full p-6", {
            "items-center": align === "center",
            "items-start": align === "start",
            "items-end": align === "end",
          })}
        >
          <React.Suspense
            fallback={
              <div className="flex items-center text-sm text-muted-foreground">
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </div>
            }
          >
            {Preview}
          </React.Suspense>
        </div>
      </ThemeWrapper>

      <Accordion.Root type="single" collapsible>
        <Accordion.Item value="code">
          <Accordion.Header className="border-t border-t-gray-alpha-400 bg-background-200 px-4 text-sm text-gray-900">
            <Accordion.Trigger className="group flex h-12 items-center gap-3">
              <ChevronDown
                className="h-4 w-4 group-data-[state=open]:-rotate-90"
                aria-hidden
              />
              <p className="hidden group-data-[state=open]:block">Show code</p>
              <p className="group-data-[state=open]:hidden">Hide code</p>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <div className="border-flex-col flex space-y-4 border-t border-gray-alpha-400">
              <div className="w-full [&_pre]:my-0 [&_pre]:overflow-auto">
                {Code}
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
}
