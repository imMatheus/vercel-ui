import { Button } from "@/registry/default/ui/button"
import { Modal } from "@/registry/default/ui/modal"
import { Text } from "@/registry/default/ui/text"

export default function AlertDialogDemo() {
  return (
    <Modal.Modal>
      <Modal.Trigger asChild>
        <Button size="sm">Open modal</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Body>
          <Modal.Header>
            <Modal.Title>Create Token</Modal.Title>
            <Modal.Description>
              Enter a unique name for your token to differentiate it from other
              tokens and then select the scope.
            </Modal.Description>
          </Modal.Header>

          <Text>Some content contained within the modal.</Text>
        </Modal.Body>
        <Modal.Actions>
          <Modal.Cancel>Cancel</Modal.Cancel>
          <Modal.Action>Continue</Modal.Action>
        </Modal.Actions>
      </Modal.Content>
    </Modal.Modal>

    // <Modal.Modal >
    //   <Modal.Body>
    //     <Modal.Header>
    //       <Modal.Title>Create Token</Modal.Title>
    //       <Modal.Subtitle>
    //         Enter a unique name for your token to differentiate it from other
    //         tokens and then select the scope.
    //       </Modal.Subtitle>
    //     </Modal.Header>

    //     <Text>Some content contained within the modal.</Text>
    //   </Modal.Body>

    //   <Modal.Actions>
    //     <Modal.Action onClick={() => setOpen(false)} type="secondary">
    //       Cancel
    //     </Modal.Action>

    //     <Modal.Action onClick={() => setOpen(false)}>Submit</Modal.Action>
    //   </Modal.Actions>
    // </Modal.Modal>
  )
}
