import { type VariantProps, cva } from 'class-variance-authority';

export const snackbarVariants = cva(['fixed', 'z-[999]','flex', 'flex-col', 'space-y-4',], {
  variants: {
    position: {
      top: 'top-0 left-1/2 transform -translate-x-1/2',
      bottom: 'bottom-0 left-1/2 transform -translate-x-1/2',
      topLeft: 'top-0 left-0',
      topRight: 'top-0 right-0 ',
      bottomLeft: 'bottom-0 left-0',
      bottomRight: 'bottom-0 right-0 ',
    },
    type: {
      info: 'bg-blue-500 text-white',
      success: 'bg-green-500 text-white',
      warning: 'bg-yellow-500 text-white',
      error: 'bg-red-500 text-white',
    },
  },
});

export type BaseSnackbarProps = VariantProps<typeof snackbarVariants>;
