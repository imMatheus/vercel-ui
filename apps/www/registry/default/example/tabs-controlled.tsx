import { useState } from "react"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs"

export default function TabsControlled() {
  const [selected, setSelected] = useState("apple")

  return (
    <Tabs value={selected} onValueChange={setSelected}>
      <TabsList>
        <TabsTrigger value="apple">Apple</TabsTrigger>
        <TabsTrigger value="orange">Orange</TabsTrigger>
        <TabsTrigger value="mango">Mango</TabsTrigger>
      </TabsList>
      <TabsContent value="apple" className="py-4">
        Apple
      </TabsContent>
      <TabsContent value="orange" className="py-4">
        Orange
      </TabsContent>
      <TabsContent value="mango" className="py-4">
        Mango
      </TabsContent>
    </Tabs>
  )
}
