'use client';

import { User } from 'lucide-react';
import { useFileInput } from './Root';
import { useMemo } from 'react';
import { image, img } from 'framer-motion/client';

export function ImagePreview() {
  const { files } = useFileInput();

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null;
    }

    return URL.createObjectURL(files[0]);
  }, [files]);

  if (previewURL === null) {
    return (
      <div className='w-16 h-16 flex items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10'>
        <User className='w-8 h-8 text-violet-500 dark:text-violet-300' />
      </div>
    );
  }

  return (
    <img
      src={previewURL}
      alt=''
      className='w-16 h-16 rounded-full object-cover'
    />
  );
}
