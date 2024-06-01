import * as React from "react"

import { cn } from "@/lib/utils"

interface SnippetProps {
  text: string | string[]
}

const Snippet: React.FC<SnippetProps> = ({ text }) => {
  return <div className="flex items-center bg-red-200 p-3">{text}</div>
}

export { Snippet }
