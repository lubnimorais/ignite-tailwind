import { UploadCloud, Trash2, CheckCircle2 } from 'lucide-react';

import { tv, type VariantProps } from 'tailwind-variants';

import { formatBytes } from '@/utils/format-bytes';
import { Button } from '../Button';

const fileItem = tv({
  slots: {
    container:
      'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: 'rounded-full border-4 border-violet-100 text-violet-600 bg-violet-200 p-2 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500',
    deleteButton: '',
  },

  variants: {
    state: {
      progress: {
        container: 'dark:border-zinc-700',
      },
      complete: {
        container: 'border-violet-500 dark:border-violet-300/30',
      },
      error: {
        container:
          'bg-error-25 border-error-300 dark:bg-error-500/5 dark:border-error-500/30',
        icon: 'bg-error-100 border-error-50 text-error-600 dark:bg-error-500/5 dark:border-error-500/30 dark:text-error-400',
        deleteButton:
          'text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-#00',
      },
    },
  },

  defaultVariants: {
    state: 'progress',
  },
});

interface IFileItemProps extends VariantProps<typeof fileItem> {
  name: string;
  size: number;
}

export function FileItem({ name, size, state }: IFileItemProps) {
  const { container, icon, deleteButton } = fileItem({ state });

  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloud className='w-4 h-4' />
      </div>

      {state === 'error' ? (
        <div className='flex flex-col flex-1 items-start gap-1'>
          <div className='flex flex-col'>
            <span className='font-medium text-sm text-error-700 dark:text-error-400'>
              Upload failed, please try again
            </span>

            <span className='text-sm text-error-600 dark:text-error-500'>
              {name}
            </span>
          </div>

          <button
            type='button'
            className='font-semibold text-sm text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300'
          >
            Try again
          </button>
        </div>
      ) : (
        <div className='flex flex-col flex-1 items-start gap-1'>
          <div className='flex flex-col'>
            <span className='font-medium text-sm text-zinc-700 dark:text-zinc-100'>
              {name}
            </span>

            <span className='text-sm text-zinc-500 dark:text-zinc-400'>
              {formatBytes(size)}
            </span>
          </div>

          <div className='w-full flex items-center gap-3'>
            <div className='h-2 flex-1 rounded-full bg-zinc-100 dark:bg-zinc-600'>
              <div
                className='h-2 rounded-full bg-violet-600 dark:bg-zinc-400'
                style={{ width: state === 'complete' ? '100%' : '70%' }}
              />
            </div>

            <span className='font-medium text-sm text-zinc-700 dark:text-zinc-300'>
              {state === 'complete' ? '100%' : '70%'}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircle2 className='w-5 h-5 fill-violet-600 text-white' />
      ) : (
        <Button type='button' variant='ghost' className={deleteButton()}>
          <Trash2 className='w-5 h-5' />
        </Button>
      )}
    </div>
  );
}
