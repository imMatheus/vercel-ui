import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export function Announcement() {
  return (
    <Link
      href="/docs/changelog"
      className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
    >
      <span className="sm:hidden">New components and more.</span>
      <span className="hidden sm:inline">
        New components, breadcrumb and input otp.
      </span>
      <ArrowRightIcon className="ml-1 h-4 w-4" />
    </Link>
  )
}
