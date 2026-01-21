// src/components/ui/accordion.tsx
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils"; // Assure-toi que le chemin vers cn() est correct

// Composant AccordionItem avec forwardRef
export const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
));

AccordionItem.displayName = "AccordionItem";

// Composant AccordionTrigger
export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof AccordionPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex w-full items-center justify-between py-2 px-4 font-medium text-left",
      className
    )}
    {...props}
  />
));

AccordionTrigger.displayName = "AccordionTrigger";

// Composant AccordionContent
export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof AccordionPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn("px-4 py-2 text-sm text-gray-700", className)}
    {...props}
  />
));

AccordionContent.displayName = "AccordionContent";

// Exemple d'utilisation
export const MyAccordion = () => (
  <AccordionPrimitive.Root type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Item 1</AccordionTrigger>
      <AccordionContent>Contenu 1</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Item 2</AccordionTrigger>
      <AccordionContent>Contenu 2</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Item 3</AccordionTrigger>
      <AccordionContent>Contenu 3</AccordionContent>
    </AccordionItem>
  </AccordionPrimitive.Root>
);
