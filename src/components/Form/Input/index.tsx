import type { ComponentProps } from 'react';

import { twMerge } from 'tailwind-merge';

interface IInputRootProps extends ComponentProps<'div'> {}

export function InputRoot({ className, ...rest }: IInputRootProps) {
  return (
    <div
      className={twMerge(
        'w-full flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm',
        'focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100',
        'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20',
        className
      )}
      {...rest}
    />
  );
}

interface IInputPrefixProps extends ComponentProps<'div'> {}

export function InputPrefix({ ...rest }: IInputPrefixProps) {
  return <div {...rest} />;
}

interface IInputControlProps extends ComponentProps<'input'> {}

export function InputControl({ ...rest }: IInputControlProps) {
  return (
    <input
      className='flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:placeholder-zinc-400 dark:text-zinc-400'
      {...rest}
    />
  );
}
