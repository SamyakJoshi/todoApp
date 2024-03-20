import { type VariantProps, cva } from 'class-variance-authority';

const snackbarVariants = cva([], {
    variants: {
        position: {
            top: 'fixed top-0 left-1/2 transform -translate-x-1/2',
            bottom: 'fixed bottom-0 left-1/2 transform -translate-x-1/2',
        },
        type: {
            info: 'bg-blue-500 text-white',
            success: 'bg-green-500 text-white',
            warning: 'bg-yellow-500 text-white',
            error: 'bg-red-500 text-white',
        },
    },
});

export type BaseModalProps = VariantProps<typeof snackbarVariants>;
