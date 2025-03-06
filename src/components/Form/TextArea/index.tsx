import type { ComponentProps } from 'react';

interface ITextAreaProps extends ComponentProps<'textarea'> {}

export function TextArea({ ...rest }: ITextAreaProps) {
  return (
    <textarea
      className='w-full min-h-[120px] resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100'
      {...rest}
    />
  );
}
