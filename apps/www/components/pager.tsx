import Link from "next/link"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { Doc } from "contentlayer/generated"
import { NavItem, NavItemWithChildren } from "types/nav"

import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/default/ui/button"
import { Text } from "@/registry/default/ui/text"

interface DocsPagerProps {
  doc: Doc
}

export function DocsPager({ doc }: DocsPagerProps) {
  const pager = getPagerForDoc(doc)

  if (!pager) {
    return null
  }

  return (
    <div className="border-t border-gray-alpha-400 p-4 xl:px-12 xl:pb-8 xl:pt-0">
      {/* TODO add feedback here */}

      <div className="pt-8">
        <nav className="relative flex w-full items-start justify-between">
          {pager?.prev?.href && (
            <Link href={pager.prev.href} className="group py-1 pl-7 pr-2">
              <div className="">
                <Text
                  size="copy-13"
                  color="gray-900"
                  className="transition-colors group-hover:text-contrast"
                >
                  Previous
                </Text>
              </div>
              <div className="relative">
                <ChevronLeftIcon className="absolute left-[-26px] mt-0.5 h-5 w-5 text-gray-900 transition-colors group-hover:text-contrast" />
                {pager.prev.title}
              </div>
            </Link>
          )}

          {pager?.next?.href && (
            <Link href={pager.next.href} className="group py-1 pl-7 pr-2">
              <div className="">
                <Text
                  size="copy-13"
                  color="gray-900"
                  className="transition-colors group-hover:text-contrast"
                >
                  Next
                </Text>
              </div>
              <div className="relative">
                <ChevronRightIcon className="absolute right-[-26px] mt-0.5 h-5 w-5 text-gray-900 transition-colors group-hover:text-contrast" />
                {pager.next.title}
              </div>
            </Link>
          )}
        </nav>
      </div>
    </div>
  )
}

export function getPagerForDoc(doc: Doc) {
  const flattenedLinks = [null, ...flatten(docsConfig.sidebarNav), null]
  const activeIndex = flattenedLinks.findIndex(
    (link) => doc.slug === link?.href
  )
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null
  return {
    prev,
    next,
  }
}

export function flatten(links: NavItemWithChildren[]): NavItem[] {
  return links
    .reduce<NavItem[]>((flat, link) => {
      return flat.concat(link.items?.length ? flatten(link.items) : link)
    }, [])
    .filter((link) => !link?.disabled)
}
