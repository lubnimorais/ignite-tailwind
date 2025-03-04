import type { ComponentProps } from 'react';

interface IInputRootProps extends ComponentProps<'div'> {}

export function InputRoot({ ...rest }: IInputRootProps) {
  return (
    <div
      className='
        w-full 
        flex 
        items-center 
        gap-2 
        rounded-lg 
        border 
        border-zinc-300
        mx-1
        px-3
        py-2
        shadow-sm
      '
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
      className='flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600'
      {...rest}
    />
  );
}
