'use client';

import { useAutoAnimate } from '@formkit/auto-animate/react';

import { useFileInput } from './Root';

import { FileItem } from './FileItem';

export function FileList() {
  const [parent] = useAutoAnimate();

  const { files } = useFileInput();

  return (
    <div ref={parent} className='mt-4 space-y-3'>
      {files.map((file) => {
        return (
          <FileItem
            key={file.name}
            name={file.name}
            size={file.size}
            state='complete'
          />
        );
      })}
    </div>
  );
}
