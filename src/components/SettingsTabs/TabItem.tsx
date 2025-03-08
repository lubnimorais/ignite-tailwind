'use client'; // PARA INFORMAR OS NEXT QUE ELE É UM CLIENT COMPONENT

import * as Tabs from '@radix-ui/react-tabs';

import { motion } from 'framer-motion';

interface ITabItemProps {
  title: string;
  value: string;
  isSelected?: boolean;
}

export function TabItem({ value, title, isSelected = false }: ITabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className='group font-medium text-sm text-zinc-500 px-1 py-4 hover:text-violet-700 relative data-[state=active]:text-violet-700 outline-none dark:text-zinc-400 dark:data-[state=active]:text-violet-300 dark:hover:text-violet-300'
    >
      <span className='group-focus-visible:ring-2 group-focus-visible:ring-violet-400 rounded group-focus-visible:ring-offset-4 whitespace-nowrap'>
        {title}
      </span>

      {isSelected && (
        <motion.div
          layoutId='active-tab'
          className='h-0.5 absolute -bottom-px left-0 right-0 bg-violet-700 dark:bg-violet-300'
        />
      )}
    </Tabs.Trigger>
  );
}
