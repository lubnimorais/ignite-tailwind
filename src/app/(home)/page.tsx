import { Mail } from 'lucide-react';

import { InputControl, InputPrefix, InputRoot } from '@/components/Input';
import { SettingsTabs } from '@/components/SettingsTabs';
import * as FileInput from '@/components/Form/FileInput';

export default function Home() {
  return (
    <>
      <h1 className='font-medium text-3xl text-zinc-900'>Settings</h1>

      <SettingsTabs />

      <div className='flex flex-col mt-6'>
        <div className='flex items-center justify-between pb-5 border-b border-zinc-200'>
          <div className='space-y-1'>
            <h2 className='font-medium text-lg text-zinc-900'>Personal Info</h2>

            <span className='text-sm text-zinc-500'>
              Update your photo and personal details here
            </span>
          </div>

          <div className='flex items-center gap-2'>
            <button
              type='button'
              className='font-semibold text-sm text-zinc-700 rounded-lg px-4 py-2 shadow-sm border border-zinc-300 hover:bg-zinc-50'
            >
              Cancel
            </button>

            {/* O BOTÃO DE SUBMIT ESTÁ RELACIONADO AO FORM ABAIXO */}
            <button
              className='font-semibold text-sm text-white rounded-lg px-4 py-2 shadow-sm bg-violet-600 hover:bg-violet-700'
              type='submit'
              form='settings'
            >
              Save
            </button>
          </div>
        </div>

        {/* W-FULL -> POR PADRÃO O FORM NÃO OCUPA 100% DO ESPAÇO */}
        <form
          className='w-full flex flex-col mt-6 gap-5 divide-y divide-zinc-200'
          action=''
          id='settings'
        >
          <div className='grid grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)] gap-3 pb-5'>
            <label
              htmlFor='firstName'
              className='font-medium text-sm text-zinc-700'
            >
              Name
            </label>

            <div className='grid grid-cols-2 gap-6'>
              <InputRoot>
                <InputControl id='firstName' defaultValue='John' />
              </InputRoot>

              <InputRoot>
                <InputControl defaultValue='Doe' />
              </InputRoot>
            </div>
          </div>

          <div className='grid grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)] gap-3 pb-5'>
            <label
              htmlFor='email'
              className='font-medium text-sm text-zinc-700'
            >
              E-mail address
            </label>

            <InputRoot>
              <InputPrefix>
                <Mail className='w-5 h-5 text-zinc-500' />
              </InputPrefix>

              <InputControl
                id='email'
                type='email'
                defaultValue='johndoe@test.com'
              />
            </InputRoot>
          </div>

          <div className='grid grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)] gap-3 pb-5'>
            <label
              htmlFor='photo'
              className='font-medium text-sm text-zinc-700'
            >
              Your photo
              <span className='font-normal text-sm text-zinc-500 block mt-0.5'>
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className='flex items-start gap-5'>
              <FileInput.ImagePreview />

              <FileInput.Trigger />

              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className='grid grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)] gap-3 pb-5'>
            <label htmlFor='role' className='font-medium text-sm text-zinc-700'>
              Role
            </label>

            <InputRoot>
              <InputControl id='role' defaultValue='CTO' />
            </InputRoot>
          </div>

          <div className='grid grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)] gap-3 pb-5'>
            <label
              htmlFor='country'
              className='font-medium text-sm text-zinc-700'
            >
              Country
            </label>

            <div />
          </div>

          <div className='grid grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)] gap-3 pb-5'>
            <label
              htmlFor='timezone'
              className='font-medium text-sm text-zinc-700'
            >
              Timezone
            </label>

            <div />
          </div>

          <div className='grid grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)] gap-3 pb-5'>
            <label htmlFor='bio' className='font-medium text-sm text-zinc-700'>
              Bio
              <span className='font-normal text-sm text-zinc-500 block mt-0.5'>
                Write a short introduction
              </span>
            </label>

            <div />
          </div>

          <div className='grid grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)] gap-3 pb-5'>
            <label
              htmlFor='projects'
              className='font-medium text-sm text-zinc-700'
            >
              Portfolio projects
              <span className='font-normal text-sm text-zinc-500 block mt-0.5'>
                Share a few snippets of your work
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />

              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className='flex items-center justify-end gap-2'>
            <button
              type='button'
              className='font-semibold text-sm text-zinc-700 rounded-lg px-4 py-2 shadow-sm border border-zinc-300 hover:bg-zinc-50'
            >
              Cancel
            </button>

            <button
              className='font-semibold text-sm text-white rounded-lg px-4 py-2 shadow-sm bg-violet-600 hover:bg-violet-700'
              type='submit'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
