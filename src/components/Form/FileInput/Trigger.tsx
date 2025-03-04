import { UploadCloud } from 'lucide-react';

export function Trigger() {
  return (
    <label
      htmlFor='photo'
      className='flex flex-col flex-1 items-center gap-3 group rounded-lg px-6 py-4 border border-zinc-300 text-center text-zinc-500 shadow-sm cursor-pointer hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500'
    >
      <div className='rounded-full border-[6px] border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100'>
        <UploadCloud className='w-5 h-5 text-zinc-600 group-hover:text-violet-600' />
      </div>

      <div className='flex flex-col items-center gap-1'>
        <span className='text-sm'>
          <span className='font-semibold text-violet-700'>Click to upload</span>{' '}
          or drag and drop
        </span>

        <span className='text-xs'>SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  );
}
