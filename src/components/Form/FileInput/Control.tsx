import type { ComponentProps } from 'react';

interface IControlProps extends ComponentProps<'input'> {}

export function Control({ ...rest }: IControlProps) {
  return <input type='file' className='sr-only' id='photo' {...rest} />;
}
