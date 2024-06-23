import Link from "next/link"
import { UserPlus } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Announcement } from "@/components/announcement"
import { Icons } from "@/components/icons"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Button, buttonVariants } from "@/registry/default/ui/button"
import { Input } from "@/registry/default/ui/input"
import { Snippet } from "@/registry/default/ui/snippet"
import { Text } from "@/registry/default/ui/text"

export default function IndexPage() {
  return (
    <div className="">
      <div className="container relative">
        <PageHeader>
          <Announcement />
          <PageHeaderHeading>Build your component library</PageHeaderHeading>
          <PageHeaderDescription>
            Beautifully designed components that you can copy and paste into
            your apps. Accessible. Customizable. Open Source.
          </PageHeaderDescription>
          <PageActions>
            <Link href="/docs" className={cn(buttonVariants())}>
              Get Started
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={cn(buttonVariants({ variant: "secondary" }))}
            >
              <Icons.gitHub className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </PageActions>
        </PageHeader>
      </div>
      <section className="grid grid-rows-[repeat(2,calc(fit-content/2))] gap-[1px] border-y border-y-gray-200 bg-gray-200 md:grid-cols-2">
        <LinkBox
          href="/docs/components"
          title="Components"
          description="Building blocks for React applications"
        >
          <div className="flex flex-wrap gap-4 [&>*]:!text-gray-700">
            <Snippet
              text="npm init next-app"
              className="w-[214px] md:w-[246px]"
            />
            <Button
              variant="secondary"
              prefix={<UserPlus className="h-4 w-4" />}
            >
              Collaborate
            </Button>
            <Input
              placeholder="Value"
              prefix="Label"
              className="w-[200px] md:w-[234px]"
            />
          </div>
        </LinkBox>

        <LinkBox
          href="/docs/colors"
          title="Colors"
          description="A high contrast, accessible color system."
        >
          <div className="flex justify-between">
            <div className="flex h-24 w-8 items-center justify-center rounded-full border bg-background-200">
              <div className="h-[72px] w-2 rounded-full bg-gray-800"></div>
            </div>
            <div className="flex h-24 w-8 items-center justify-center rounded-full border bg-background-200">
              <div className="h-[72px] w-2 rounded-full bg-blue-800"></div>
            </div>
            <div className="flex h-24 w-8 items-center justify-center rounded-full border bg-background-200">
              <div className="h-[72px] w-2 rounded-full bg-purple-800"></div>
            </div>
            <div className="flex h-24 w-8 items-center justify-center rounded-full border bg-background-200">
              <div className="h-[72px] w-2 rounded-full bg-pink-800"></div>
            </div>
            <div className="flex h-24 w-8 items-center justify-center rounded-full border bg-background-200">
              <div className="h-[72px] w-2 rounded-full bg-red-800"></div>
            </div>
            <div className="flex h-24 w-8 items-center justify-center rounded-full border bg-background-200">
              <div className="h-[72px] w-2 rounded-full bg-amber-800"></div>
            </div>
            <div className="flex h-24 w-8 items-center justify-center rounded-full border bg-background-200">
              <div className="h-[72px] w-2 rounded-full bg-green-800"></div>
            </div>
            <div className="flex h-24 w-8 items-center justify-center rounded-full border bg-background-200">
              <div className="h-[72px] w-2 rounded-full bg-teal-800"></div>
            </div>
          </div>
        </LinkBox>

        {/* <LinkBox
          href="/docs/grid"
          title="Grid"
          description="A huge part of the new Vercel aesthetic"
        >
          //  TODO update this once grid works 
          <div className="grid grid-cols-8 grid-rows-2 gap-[1px] border border-gray-400 bg-gray-400">
            {Array.from({ length: 16 }).map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-background-200 group-hover:bg-background-100"
              ></div>
            ))}
          </div>
        </LinkBox>

        <div className="relative flex h-full flex-col gap-6 bg-background-200 p-4 hover:bg-background-100">
          hej
        </div> */}
      </section>
    </div>
  )
}

interface LinkBoxProps {
  href: string
  title: string
  description: string
  children: React.ReactNode
}

const LinkBox: React.FC<LinkBoxProps> = ({
  href,
  title,
  description,
  children,
}) => {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col gap-6 bg-background-200 p-8 hover:bg-background-100"
    >
      <div className="pointer-events-none flex-1">{children}</div>
      <div>
        <Text size="heading-16">{title}</Text>
        <Text size={16} color="gray-900">
          {description}
        </Text>
      </div>
      <div className="z-100 pointer-events-none absolute inset-0 border border-blue-700 opacity-0 group-focus-visible:opacity-100"></div>
    </Link>
  )
}
