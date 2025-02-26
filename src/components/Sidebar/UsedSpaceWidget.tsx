export function UsedSpaceWidget() {
  return (
    <div className='flex flex-col gap-4 bg-violet-50 rounded-lg px-4 py-5'>
      <div className='space-y-1'>
        <span className='font-medium text-sm/5 text-violet-700'>
          Used space
        </span>

        <p className='text-sm/5 text-violet-500'>
          Your team has used 80% of your available space. Need more?
        </p>
      </div>

      <div className='h-2 rounded-full bg-violet-100'>
        {/* DEFINE 80% */}
        <div className='w-4/5 h-2 bg-violet-600 rounded-full' />
      </div>

      <div className='space-x-3'>
        <button
          type='button'
          className='font-medium text-sm text-violet-500 hover:text-violet-700'
        >
          Dismiss
        </button>
        <button
          type='button'
          className='font-medium text-sm text-violet-700 hover:text-violet-900'
        >
          Upgrade
        </button>
      </div>
    </div>
  );
}
