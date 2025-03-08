import type { ElementType } from 'react';

import { ChevronDown } from 'lucide-react';

interface INavItemProps {
  title: string;
  icon: ElementType;
}

export function NavItem({ title, icon: Icon }: INavItemProps) {
  return (
    <a
      href='re'
      className='flex items-center gap-3 rounded group px-3 py-2 hover:bg-violet-50 dark:hover:bg-zinc-800'
    >
      <Icon className='w-5 h-5 text-zinc-500' />

      <span className='font-medium text-zinc-700 group-hover:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-300'>
        {title}
      </span>

      <ChevronDown className='w-5 h-5 text-zinc-400 group-hover:text-violet-300 ml-auto dark:text-zinc-600' />
    </a>
  );
}
