import { LogOut } from 'lucide-react';

export function Profile() {
  return (
    <div className='grid grid-cols-[max-content_1fr_min-content] items-center gap-3'>
      <img
        src='https://github.com/lubnimorais.png'
        alt=''
        className='w-10 h-10 rounded-full'
      />

      <div className='flex flex-col truncate'>
        <span className='font-semibold text-sm text-zinc-700'>
          Deven Gerhold
        </span>

        <span className='text-sm text-zinc-500 truncate'>
          Nico_Hermiston81@yahoo.com
        </span>
      </div>

      <button
        type='button'
        className='cursor-pointer ml-auto rounded-md p-2 hover:bg-zinc-50'
      >
        <LogOut className='w-5 h-5 text-zinc-500' />
      </button>
    </div>
  );
}
