"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/default/ui/button"

const ModalBase = AlertDialogPrimitive.Root

const Trigger = AlertDialogPrimitive.Trigger

const Content = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AlertDialogPrimitive.Portal>
    <AlertDialogPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/75 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
    />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "group fixed left-1/2 top-1/2 z-50 w-full max-w-[540px] -translate-x-1/2 -translate-y-1/2",

        className
      )}
      {...props}
    >
      <div
        className={cn(
          "rounded-xl bg-background-100 shadow-modal transition-all ![animation-duration:350ms] group-data-[state=open]:animate-in group-data-[state=closed]:animate-out group-data-[state=closed]:fade-out-0 group-data-[state=open]:fade-in-0 group-data-[state=closed]:slide-out-to-top-10 group-data-[state=open]:slide-in-from-top-10"
        )}
      >
        {children}
      </div>
    </AlertDialogPrimitive.Content>
  </AlertDialogPrimitive.Portal>
))
Content.displayName = AlertDialogPrimitive.Content.displayName

const Body = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("space-y-6 p-6", className)} {...props} />
)
Body.displayName = "ModalHeader"

const Header = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("text-center sm:text-left", className)} {...props} />
)
Header.displayName = "ModalHeader"

const Title = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn(
      "mb-6 text-left text-2xl font-semibold text-gray-1000",
      className
    )}
    {...props}
  />
))
Title.displayName = AlertDialogPrimitive.Title.displayName

const Description = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-base font-normal text-gray-1000", className)}
    {...props}
  />
))
Description.displayName = AlertDialogPrimitive.Description.displayName

const Actions = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "sticky bottom-0 flex justify-between rounded-b-xl bg-background-200 p-4 [box-shadow:0_-1px_0_0_var(--ds-gray-alpha-400)]",
      className
    )}
    {...props}
  />
)
Actions.displayName = "ModalActions"

const Action = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
))
Action.displayName = AlertDialogPrimitive.Action.displayName

const Cancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: "secondary" }), className)}
    {...props}
  />
))
Cancel.displayName = AlertDialogPrimitive.Cancel.displayName

const Modal = {
  Modal: ModalBase,
  Trigger,
  Content,
  Body,
  Header,
  Title,
  Description,
  Actions,
  Action,
  Cancel,
} as const

export { Modal }
