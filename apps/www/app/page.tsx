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
import { Badge } from "@/registry/default/ui/badge"
import { Button, buttonVariants } from "@/registry/default/ui/button"
import { Gauge } from "@/registry/default/ui/gauge"
import { Input } from "@/registry/default/ui/input"
import { Snippet } from "@/registry/default/ui/snippet"
import { Text } from "@/registry/default/ui/text"

export default function IndexPage() {
  return (
    <div className="">
      <div className="">
        <div className="container relative">
          <PageHeader>
            <Announcement />
            <PageHeaderHeading>Build your component library</PageHeaderHeading>
            <PageHeaderDescription>
              Beautifully designed components that you can copy and paste into
              your apps. Accessible. Customizable. Open Source.
            </PageHeaderDescription>
            <PageActions className="md:pb-0">
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

        <div className="translate-y-4">
          <ComponentsPreview />
        </div>
      </div>
      <section className="relative grid grid-rows-[repeat(2,calc(fit-content/2))] gap-[1px] border-y border-y-gray-200 bg-gray-200 md:grid-cols-2">
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

const ComponentsPreview: React.FC = ({}) => {
  return (
    <div
      className="group w-full space-y-2 overflow-x-hidden [&>*>*]:pointer-events-none"
      style={{ "--offset": "75px" } as React.CSSProperties}
    >
      <div className="relative left-1/2 flex w-max translate-x-[calc(-50%_+_var(--offset))] gap-2 transition-transform duration-300 group-hover:translate-x-[calc(-50%_-_var(--offset))]">
        <Button shadow shape="rounded" variant="error" loading size="small">
          Saving
        </Button>
        <Button variant="default" shape="rounded" size="small">
          Long save button
        </Button>
        <Button disabled size="small">
          Save
        </Button>
        <Button variant="warning" size="small">
          Warning
        </Button>
        <Button variant="secondary" size="small">
          Action
        </Button>
        <Button variant="secondary" shadow shape="rounded" size="small">
          Super long button
        </Button>
        <Button variant="error" size="small">
          Delete
        </Button>
        <Button variant="default" size="small">
          Save
        </Button>
        <Button shadow shape="rounded" variant="error" size="small">
          Round delete
        </Button>
        <Button shadow shape="rounded" variant="secondary" size="small">
          Logout
        </Button>
        <Button shadow shape="rounded" variant="error" loading size="small">
          Saving
        </Button>
        <Button shadow shape="rounded" variant="error" size="small">
          Logout
        </Button>
        <Button loading size="small">
          Upload
        </Button>

        <Button shadow shape="rounded" variant="error" loading size="small">
          Saving
        </Button>
        <Button variant="default" shape="rounded" size="small">
          Long save button
        </Button>
        <Button disabled size="small">
          Save
        </Button>
        <Button variant="warning" size="small">
          Warning
        </Button>
        <Button variant="secondary" size="small">
          Action
        </Button>
        <Button variant="secondary" shadow shape="rounded" size="small">
          Super long button
        </Button>
        <Button variant="error" size="small">
          Delete
        </Button>
        <Button variant="default" size="small">
          Save
        </Button>
        <Button shadow shape="rounded" variant="error" size="small">
          Round delete
        </Button>
        <Button shadow shape="rounded" variant="secondary" size="small">
          Logout
        </Button>

        <Button variant="error" size="small">
          Delete
        </Button>
        <Button variant="default" size="small">
          Save
        </Button>
        <Button shadow shape="rounded" variant="error" size="small">
          Round delete
        </Button>
        <Button shadow shape="rounded" variant="secondary" size="small">
          Logout
        </Button>
        <Button shadow shape="rounded" variant="error" loading size="small">
          Saving
        </Button>
        <Button shadow shape="rounded" variant="error" size="small">
          Logout
        </Button>
        <Button loading size="small">
          Upload
        </Button>
      </div>

      <div className="delay-[50ms] relative left-1/2 mb-2 flex w-max translate-x-[calc(-50%_-_var(--offset))] gap-2 transition-transform duration-300 group-hover:translate-x-[calc(-50%_+_var(--offset))]">
        <Badge variant="gray">gray</Badge>
        <Badge variant="gray-subtle">gray-subtle</Badge>
        <Badge variant="blue">blue</Badge>

        <Badge variant="pink-subtle">pink-subtle</Badge>
        <Badge variant="green">green</Badge>
        <Badge variant="green-subtle">green-subtle</Badge>
        <Badge variant="teal">teal</Badge>
        <Badge variant="teal-subtle">teal-subtle</Badge>
        <Badge variant="blue-subtle">blue-subtle</Badge>
        <Badge variant="purple">purple</Badge>
        <Badge variant="purple-subtle">purple-subtle</Badge>

        <Badge variant="gray">gray</Badge>
        <Badge variant="gray-subtle">gray-subtle</Badge>
        <Badge variant="blue">blue</Badge>
        <Badge variant="blue-subtle">blue-subtle</Badge>
        <Badge variant="purple">purple</Badge>
        <Badge variant="purple-subtle">purple-subtle</Badge>
        <Badge variant="amber">amber</Badge>
        <Badge variant="amber-subtle">amber-subtle</Badge>
        <Badge variant="red">red</Badge>
        <Badge variant="red-subtle">red-subtle</Badge>
        <Badge variant="pink">pink</Badge>
        <Badge variant="amber">amber</Badge>
        <Badge variant="amber-subtle">amber-subtle</Badge>
        <Badge variant="red">red</Badge>
        <Badge variant="red-subtle">red-subtle</Badge>
        <Badge variant="pink">pink</Badge>
        <Badge variant="pink-subtle">pink-subtle</Badge>
        <Badge variant="green">green</Badge>
        <Badge variant="green-subtle">green-subtle</Badge>
        <Badge variant="teal">teal</Badge>
        <Badge variant="teal-subtle">teal-subtle</Badge>
      </div>

      <div className="relative left-1/2 flex w-max translate-x-[calc(-50%_+_var(--offset))] gap-2 transition-transform delay-100 duration-300 group-hover:translate-x-[calc(-50%_-_var(--offset))]">
        <Gauge size="small" value={50} />
        <Gauge size="small" value={80} />
        <Gauge size="small" value={10} />
        <Gauge size="small" value={15} />
        <Gauge size="small" value={95} />
        <Gauge size="small" value={35} />
        <Gauge size="small" value={100} />
        <Gauge size="small" value={5} />
        <Gauge size="small" value={67} />
        <Gauge size="small" value={76} />
        <Gauge size="small" value={46} />
        <Gauge size="small" value={52} />
        <Gauge size="small" value={38} />
        <Gauge size="small" value={81} />
        <Gauge size="small" value={50} />
        <Gauge size="small" value={80} />
        <Gauge size="small" value={10} />
        <Gauge size="small" value={15} />
        <Gauge size="small" value={95} />
        <Gauge size="small" value={35} />
        <Gauge size="small" value={100} />
        <Gauge size="small" value={5} />
        <Gauge size="small" value={67} />
        <Gauge size="small" value={76} />
        <Gauge size="small" value={46} />
        <Gauge size="small" value={52} />
        <Gauge size="small" value={38} />
        <Gauge size="small" value={81} />
        <Gauge size="small" value={50} />
        <Gauge size="small" value={80} />
        <Gauge size="small" value={10} />
        <Gauge size="small" value={15} />
        <Gauge size="small" value={95} />
        <Gauge size="small" value={35} />
        <Gauge size="small" value={100} />
        <Gauge size="small" value={5} />
        <Gauge size="small" value={67} />
        <Gauge size="small" value={76} />
        <Gauge size="small" value={46} />
        <Gauge size="small" value={52} />
        <Gauge size="small" value={38} />
        <Gauge size="small" value={81} />

        <Gauge size="small" value={67} />
        <Gauge size="small" value={76} />
        <Gauge size="small" value={46} />
        <Gauge size="small" value={52} />
        <Gauge size="small" value={38} />
        <Gauge size="small" value={81} />
        <Gauge size="small" value={50} />
        <Gauge size="small" value={80} />
        <Gauge size="small" value={10} />
        <Gauge size="small" value={15} />
        <Gauge size="small" value={95} />

        <Gauge size="small" value={67} />
        <Gauge size="small" value={76} />
        <Gauge size="small" value={46} />
        <Gauge size="small" value={52} />
        <Gauge size="small" value={38} />
        <Gauge size="small" value={81} />
        <Gauge size="small" value={50} />
        <Gauge size="small" value={80} />
        <Gauge size="small" value={10} />
        <Gauge size="small" value={15} />
        <Gauge size="small" value={95} />
      </div>

      <div className="relative left-1/2 flex w-max translate-x-[calc(-50%_-_var(--offset))] gap-2 transition-transform delay-150 duration-300 group-hover:translate-x-[calc(-50%_+_var(--offset))]">
        <Snippet text="npm init next-app" width="230px" />
        <Snippet text="Blue" prompt={false} type="success" width="120px" />
        <Snippet text="Matheus" width="200px" />
        <Snippet text="Is this red?" type="error" width="250px" />
        <Snippet text="Vaaarning" type="warning" width="250px" />
        <Snippet text="npm init next-app" width="230px" />

        <Snippet text="npm init next-app" width="230px" />
        <Snippet text="Blue" prompt={false} type="success" width="120px" />
        <Snippet text="Matheus" width="200px" />
        <Snippet text="Is this red?" type="error" width="250px" />
        <Snippet text="Vaaarning" type="warning" width="180px" />
        <Snippet text="npm init next-app" width="230px" />
        <Snippet text="npm init next-app" width="230px" />

        <Snippet text="Blue" prompt={false} type="success" width="120px" />
        <Snippet text="Matheus" width="200px" />
        <Snippet text="Is this red?" type="error" width="250px" />
        <Snippet text="Vaaarning" type="warning" width="250px" />
        <Snippet text="npm init next-app" width="230px" />
      </div>
    </div>
  )
}
