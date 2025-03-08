'use client';

import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Menu,
  Search,
  SquareStack,
  Users,
} from 'lucide-react';

import * as Collapsible from '@radix-ui/react-collapsible';

import { Logo } from './Logo';

import { NavItem } from './NavItem';
import { UsedSpaceWidget } from './UsedSpaceWidget';
import { Profile } from './Profile';
import { InputControl, InputPrefix, InputRoot } from '../Form/Input';
import { Button } from '../Form/Button';

export function Sidebar() {
  return (
    <Collapsible.Root className='flex flex-col gap-6 p-4 border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 fixed left-0 top-0 right-0 data-[state=open]:bottom-0 z-20 lg:data-[state=closed]:bottom-0 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8'>
      <div className='flex items-center justify-between'>
        <Logo />

        <Collapsible.Trigger asChild className='lg:hidden'>
          <Button variant='ghost'>
            <Menu className='w-6 h-6 ' />
          </Button>
        </Collapsible.Trigger>
      </div>

      {/** FORCE-MOUNT FAZ COM QUE O CONTEÚDO JÁ ESTEJA VISÍVEL
       * E O lg:data-[state=closed]:flex FAZ COM QUE O CONTEÚDO
       * FIQUE VISÍVEL EM TELA MAIOR
       */}
      <Collapsible.Content
        forceMount
        className='flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex'
      >
        <InputRoot>
          <InputPrefix>
            <Search className='w-5 h-5 text-zinc-500' />
          </InputPrefix>

          <InputControl placeholder='Search' />
        </InputRoot>

        <nav className='space-y-0.5'>
          <NavItem title='Home' icon={Home} />
          <NavItem title='Dashboard' icon={BarChart} />
          <NavItem title='Projects' icon={SquareStack} />
          <NavItem title='Tasks' icon={CheckSquare} />
          <NavItem title='Reporting' icon={Flag} />
          <NavItem title='Users' icon={Users} />
        </nav>

        <div className='flex flex-col gap-6 mt-auto'>
          <nav className='space-y-0.5'>
            <NavItem title='Support' icon={LifeBuoy} />
            <NavItem title='Settings' icon={Cog} />
          </nav>

          <UsedSpaceWidget />

          <div className='h-px bg-zinc-200 dark:bg-zinc-700' />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
