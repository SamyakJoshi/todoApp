import { VariantProps, cva } from "class-variance-authority";

export type BaseButtonProps = VariantProps<typeof button>;
export const button = cva(["font-semibold", "border"], {
  variants: {
    variant: {
      contained:
        " bg-button text-typography hover:bg-buttonHover focus:bg-buttonHover",
      outlined: "border-button text-button",
      text: "text-typography hover:bg-primary/50",
      // **or**
      // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
    },
    size: {
      small: "text-sm py-1 px-2",
      medium: "text-base py-2 px-4",
      large: "text-lg py-4 px-8",
    },
    color: {},
    type: {
      default:
        "bg-button text-white hover:bg-buttonHover focus:bg-buttonHover font-bold rounded-xl",
      icon:
        "rounded-full  p-2.5 text-center inline-flex items-center aspect-square justify-center ",
      text_icon:
        "bg-button text-white  hover:opacity-50  font-bold  rounded-xl  flex  items-center  gap-x-3  fill-white",
    },
  },

  compoundVariants: [
    {
      variant: "text",
      size: "medium",
    },
  ],
  defaultVariants: {
    variant: "contained",
    size: "medium",
    type: "default",
  },
});
