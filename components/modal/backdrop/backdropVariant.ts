import { VariantProps, cva } from 'class-variance-authority';

export type BaseBackdropProps = VariantProps<typeof backdrop>;
export const backdrop = cva(['fixed inset-0 flex'], {
  variants: {
    color: {
      gray: 'bg-gray-500',
      black: 'bg-slate-950',
      zinc: 'bg-zinc-400',
      white: 'bg-white',
      none: '',
    },
    opacity: {
      0: 'opacity-0',
      5: 'opacity-5',
      10: 'opacity-10',
      15: 'opacity-15',
      20: 'opacity-20',
      25: 'opacity-25',
      30: 'opacity-30',
      35: 'opacity-35',
      40: 'opacity-40',
      45: 'opacity-45',
      50: 'opacity-50',
      55: 'opacity-55',
      60: 'opacity-60',
      65: 'opacity-65',
      70: 'opacity-70',
      75: 'opacity-75',
      80: 'opacity-80',
      85: 'opacity-85',
      90: 'opacity-90',
      95: 'opacity-95',
      100: 'opacity-100',
    },
    alignmentX: {
      center: 'justify-center',
      left: 'justify-start',
      right: 'justify-end',
    },
    alignmentY: {
      center: 'items-center',
      top: 'items-start',
      bottom: 'items-end',
    },
  },
  defaultVariants: {
    color: 'gray',
    opacity: 75,
    alignmentX: 'center',
    alignmentY: 'center',
  },
});
