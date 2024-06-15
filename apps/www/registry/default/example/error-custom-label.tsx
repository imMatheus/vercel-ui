import { Error } from "@/registry/default/ui/error"

export default function ErrorLabel() {
  return (
    <Error label="Email Error">This email address is already in use.</Error>
  )
}
