'use client';

import type { ChangeEvent, ComponentProps } from 'react';

import { useFileInput } from './Root';

interface IControlProps extends ComponentProps<'input'> {}

export function Control({ multiple = false, ...rest }: IControlProps) {
  const { id, onFilesSelected } = useFileInput();

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    if (!event.target.files?.length) {
      return;
    }

    const files = Array.from(event.target.files);

    onFilesSelected(files, multiple);
  }

  return (
    <input
      type='file'
      className='sr-only'
      id={id}
      multiple={multiple}
      onChange={handleFilesSelected}
      {...rest}
    />
  );
}
