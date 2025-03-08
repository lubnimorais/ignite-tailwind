'use client';

import type { ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

import * as SelectPrimitive from '@radix-ui/react-select';

import { ChevronDown } from 'lucide-react';

interface ISelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode;
  placeholder: string;
}

export function Select({ children, placeholder, ...rest }: ISelectProps) {
  return (
    <SelectPrimitive.Root {...rest}>
      <SelectPrimitive.Trigger
        className={twMerge(
          'w-full h-11 flex items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600 outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 dark:data-[placeholder]:text-zinc-400',
          'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20'
        )}
      >
        <SelectPrimitive.Value
          placeholder={placeholder}
          className='text-black'
        />

        <SelectPrimitive.Icon>
          <ChevronDown className='w-5 h-5 text-zinc-500' />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side='bottom'
          position='popper'
          sideOffset={8}
          className='w-(--radix-select-trigger-width) z-10 rounded-lg border border-zinc-200 bg-white overflow-hidden shadow-sm animate-slideDownAndFade dark:bg-zinc-800 dark:border-zinc-700'
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
