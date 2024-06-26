"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useMDXComponent } from "next-contentlayer/hooks"
import { NpmCommands } from "types/unist"

import { Event } from "@/lib/events"
import { cn } from "@/lib/utils"
import { useConfig } from "@/hooks/use-config"
import { Callout } from "@/components/callout"
import { CodeBlockWrapper } from "@/components/code-block-wrapper"
import { ComponentExample } from "@/components/component-example"
import { ComponentPreview } from "@/components/component-preview"
import { ComponentSource } from "@/components/component-source"
import { CopyButton, CopyNpmCommandButton } from "@/components/copy-button"
import { FrameworkDocs } from "@/components/framework-docs"
import { PaddingBox } from "@/components/padding-box"
import { StyleWrapper } from "@/components/style-wrapper"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/default/ui/alert"
import { AspectRatio } from "@/registry/default/ui/aspect-ratio"
import { Collapse, CollapseGroup } from "@/registry/default/ui/collapse"
import { Note } from "@/registry/default/ui/note"
import { Snippet } from "@/registry/default/ui/snippet"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs"
import { Tooltip } from "@/registry/default/ui/tooltip"
import { Style } from "@/registry/styles"

const components = {
  CollapseGroup,
  Collapse,
  Alert,
  AlertTitle,
  AlertDescription,
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "font-heading mt-2 scroll-m-20 text-4xl font-bold",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({
    className,
    __rawString__,
    __npmCommand__,
    __yarnCommand__,
    __pnpmCommand__,
    __bunCommand__,
    __withMeta__,
    __src__,
    __event__,
    __style__,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    __style__?: Style["name"]
    __rawString__?: string
    __withMeta__?: boolean
    __src__?: string
    __event__?: Event["name"]
  } & NpmCommands) => {
    return (
      <StyleWrapper styleName={__style__}>
        {!__npmCommand__ && (
          <pre
            className={cn(
              "mb-4 mt-6 overflow-x-auto bg-background-100 py-4",
              className
            )}
            {...props}
          />
        )}
        {__rawString__ && !__npmCommand__ && (
          <CopyButton
            value={__rawString__}
            src={__src__}
            event={__event__}
            className={cn("absolute right-4 top-4", __withMeta__ && "top-16")}
          />
        )}

        {/* TODO maybe rethink this */}
        {/* {__npmCommand__ &&
          __yarnCommand__ &&
          __pnpmCommand__ &&
          __bunCommand__ && (
            <CopyNpmCommandButton
              commands={{
                __npmCommand__,
                __yarnCommand__,
                __pnpmCommand__,
                __bunCommand__,
              }}
              className={cn("absolute right-4 top-4", __withMeta__ && "top-16")}
            />
          )} */}
        {/* TODO add back the tracking on click */}
        <div className="space-y-2">
          {__npmCommand__ && <Snippet text={__npmCommand__} />}
          {/* {__yarnCommand__ && <Snippet text={__yarnCommand__} />}
          {__pnpmCommand__ && <Snippet text={__pnpmCommand__} />}
          {__bunCommand__ && <Snippet text={__bunCommand__} />} */}
        </div>
      </StyleWrapper>
    )
  },
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded bg-background-100 px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
  Image,
  Callout,
  ComponentPreview,
  PaddingBox,
  Note,
  ComponentExample,
  ComponentSource,
  AspectRatio,
  CodeBlockWrapper: ({ ...props }) => (
    <CodeBlockWrapper className="rounded-md border" {...props} />
  ),
  Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className={cn(
        "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  Steps: ({ ...props }) => (
    <div
      className="[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]"
      {...props}
    />
  ),
  Tabs: (props: React.ComponentProps<typeof Tabs>) => <Tabs {...props} />,
  TabsList: (props: React.ComponentProps<typeof TabsList>) => (
    <TabsList {...props} />
  ),
  TabsTrigger: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsTrigger>) => (
    <TabsTrigger className={cn("min-w-14", className)} {...props} />
  ),
  TabsContent: (props: React.ComponentProps<typeof TabsContent>) => (
    <div className="mt-4">
      <TabsContent {...props} />
    </div>
  ),
  FrameworkDocs: ({
    className,
    ...props
  }: React.ComponentProps<typeof FrameworkDocs>) => (
    <FrameworkDocs className={cn(className)} {...props} />
  ),
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  LinkedCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn(
        "flex w-full flex-col items-center bg-background-200 p-6 text-card-foreground shadow transition-colors hover:bg-background-100 sm:p-10",
        className
      )}
      {...props}
    />
  ),
  ColorSteps: () => {
    const colors = [
      { label: "Gray", key: "gray" },
      { label: "Gray alpha", key: "gray-alpha", skipHslDisplay: true },
      { label: "Blue", key: "blue" },
      { label: "Red", key: "red" },
      { label: "Amber", key: "amber" },
      { label: "Green", key: "green" },
      { label: "Teal", key: "teal" },
      { label: "Purple", key: "purple" },
      { label: "Pink", key: "pink" },
    ]

    return (
      <div className="mt-6">
        <div className="space-y-6">
          <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
            <div className="w-[100px] shrink-0">Backgrounds</div>

            <div className="flex w-full gap-1 md:gap-2">
              <div className="w-[68px]">
                <Tooltip text="bg-background-100">
                  <button className="h-10 w-full rounded bg-background-100 shadow-inner"></button>
                </Tooltip>
              </div>
              <div className="w-[68px]">
                <Tooltip text="bg-background-200">
                  <button className="h-10 w-full rounded bg-background-200 shadow-inner"></button>
                </Tooltip>
              </div>
            </div>
          </div>

          {colors.map((color) => (
            <div
              key={color.key}
              className="flex flex-col items-start gap-2 md:flex-row md:items-center"
            >
              <div className="w-[100px] shrink-0">{color.label}</div>

              <div className="flex w-full gap-1 md:gap-2">
                {Array(10)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className="w-full">
                      <Tooltip
                        text={`var(--ds-${color.key}-${(index + 1) * 100})`}
                      >
                        <button
                          className="h-10 w-full rounded shadow-inner"
                          style={{
                            background: color.skipHslDisplay
                              ? `var(--ds-${color.key}-${(index + 1) * 100})`
                              : `hsl(var(--ds-${color.key}-${
                                  (index + 1) * 100
                                }))`,
                          }}
                        />
                      </Tooltip>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const [config] = useConfig()
  const Component = useMDXComponent(code, {
    style: config.style,
  })

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  )
}
