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
      className='font-medium text-sm text-zinc-500 px-1 py-4 hover:text-violet-700 relative data-[state=active]:text-violet-700'
    >
      <span>{title}</span>

      {isSelected && (
        <motion.div
          layoutId='active-tab'
          className='h-0.5 absolute -bottom-px left-0 right-0 bg-violet-700'
        />
      )}
    </Tabs.Trigger>
  );
}
