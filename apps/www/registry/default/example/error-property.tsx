import { Error } from "@/registry/default/ui/error"

export default function ErrorProperty() {
  return (
    <Error
      error={{
        message: "The request failed.",
        action: "Contact Us",
        link: "https://vercel.com/contact",
      }}
    />
  )
}
