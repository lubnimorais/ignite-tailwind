import type { ComponentProps } from 'react';

import { tv, type VariantProps } from 'tailwind-variants';

const button = tv({
  base: [
    'font-semibold text-sm rounded-lg px-4 py-2 outline-none shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violent-500',
    'active:opacity-80',
  ],

  variants: {
    variant: {
      primary: 'bg-violet-600 text-white hover:bg-violet-700',
      outline: 'border border-zinc-300 text-zinc-700 hover:bg-zinc-50',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});

interface IButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof button> {}

export function Button({ variant, ...rest }: IButtonProps) {
  return <button className={button({ variant })} {...rest} />;
}
