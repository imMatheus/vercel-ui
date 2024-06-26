import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs"

// TODO fix some of the left over cases
export default function TabsDemo() {
  return (
    <Tabs defaultValue="apple">
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
