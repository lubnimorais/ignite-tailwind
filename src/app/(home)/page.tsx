import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react';

import { InputControl, InputPrefix, InputRoot } from '@/components/Form/Input';
import { SettingsTabs } from '@/components/SettingsTabs';
import * as FileInput from '@/components/Form/FileInput';
import { Select } from '@/components/Form/Select';
import { SelectItem } from '@/components/Form/Select/SelectItem';
import { TextArea } from '@/components/Form/TextArea';
import { Button } from '@/components/Form/Button';

export default function Home() {
  return (
    <>
      <h1 className='font-medium text-3xl text-zinc-900 dark:text-zinc-100'>
        Settings
      </h1>

      <SettingsTabs />

      <div className='flex flex-col mt-6'>
        <div className='flex flex-col justify-between gap-4 pb-5 border-b border-zinc-200 lg:flex-row lg:items-center dark:border-zinc-700'>
          <div className='space-y-1'>
            <h2 className='font-medium text-lg text-zinc-900 dark:text-zinc-100'>
              Personal Info
            </h2>

            <span className='text-sm text-zinc-500 dark:text-zinc-400'>
              Update your photo and personal details here
            </span>
          </div>

          <div className='flex items-center gap-2'>
            <Button variant='outline' type='button'>
              Cancel
            </Button>

            {/* O BOTÃO DE SUBMIT ESTÁ RELACIONADO AO FORM ABAIXO */}
            <Button variant='primary' type='submit' form='settings'>
              Save
            </Button>

            {/* <button
              className='font-semibold text-sm text-white rounded-lg px-4 py-2 shadow-sm bg-violet-600 hover:bg-violet-700'
              type='submit'
              form='settings'
            >
              Save
            </button> */}
          </div>
        </div>

        {/* W-FULL -> POR PADRÃO O FORM NÃO OCUPA 100% DO ESPAÇO */}
        <form
          className='w-full flex flex-col mt-6 gap-5 divide-y divide-zinc-200 dark:divide-zinc-700'
          action=''
          id='settings'
        >
          <div className='flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]'>
            <label
              htmlFor='firstName'
              className='font-medium text-sm text-zinc-700 dark:text-zinc-300'
            >
              Name
            </label>

            <div className='flex flex-col gap-6 lg:grid lg:grid-cols-2'>
              <InputRoot>
                <InputControl id='firstName' defaultValue='John' />
              </InputRoot>

              <div className='flex flex-col gap-3 lg:block'>
                <label
                  htmlFor='lastName'
                  className='font-medium text-sm text-zinc-700 lg:sr-only dark:text-zinc-300'
                >
                  Last name
                </label>

                <InputRoot>
                  <InputControl id='lastName' defaultValue='Doe' />
                </InputRoot>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]'>
            <label
              htmlFor='email'
              className='font-medium text-sm text-zinc-700 dark:text-zinc-300'
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

          <div className='flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]'>
            <label
              htmlFor=''
              className='font-medium text-sm text-zinc-700 dark:text-zinc-300'
            >
              Your photo
              <span className='font-normal text-sm text-zinc-500 block mt-0.5'>
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className='flex flex-col gap-5 lg:flex-row lg:items-start'>
              <FileInput.ImagePreview />

              <FileInput.Trigger />

              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className='flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]'>
            <label
              htmlFor='role'
              className='font-medium text-sm text-zinc-700 dark:text-zinc-300'
            >
              Role
            </label>

            <InputRoot>
              <InputControl id='role' defaultValue='CTO' />
            </InputRoot>
          </div>

          <div className='flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]'>
            <label
              htmlFor='country'
              className='font-medium text-sm text-zinc-700 dark:text-zinc-300'
            >
              Country
            </label>

            <Select placeholder='Select a country...'>
              <SelectItem value='canada' text='Canadá' />
              <SelectItem value='noruega' text='Noruega' />
            </Select>
          </div>

          <div className='flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]'>
            <label
              htmlFor='timezone'
              className='font-medium text-sm text-zinc-700 dark:text-zinc-300'
            >
              Timezone
            </label>

            <Select placeholder='Select a timezone...'>
              <SelectItem
                value='utc8'
                text='Pacific Standard Time (UTC-08:00)'
              />
              <SelectItem value='utc3' text='America São Paulo (UTC-03:00)' />
            </Select>
          </div>

          <div className='flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]'>
            <label
              htmlFor='bio'
              className='font-medium text-sm text-zinc-700 dark:text-zinc-300'
            >
              Bio
              <span className='font-normal text-sm text-zinc-500 block mt-0.5'>
                Write a short introduction
              </span>
            </label>

            <div className='space-y-3'>
              <div className='flex flex-col gap-3 lg:grid lg:grid-cols-2'>
                <Select placeholder='' defaultValue='normal'>
                  <SelectItem value='normal' text='Normal Text' />
                  <SelectItem value='md' text='Markdown' />
                </Select>

                <div className='flex items-center gap-1'>
                  <Button type='button' variant='ghost'>
                    <Bold className='w-4 h-4 text-zinc-500' strokeWidth={3} />
                  </Button>

                  <Button type='button' variant='ghost'>
                    <Italic className='w-4 h-4 text-zinc-500' strokeWidth={3} />
                  </Button>

                  <Button type='button' variant='ghost'>
                    <Link className='w-4 h-4 text-zinc-500' strokeWidth={3} />
                  </Button>

                  <Button type='button' variant='ghost'>
                    <List className='w-4 h-4 text-zinc-500' strokeWidth={3} />
                  </Button>

                  <Button type='button' variant='ghost'>
                    <ListOrdered
                      className='w-4 h-4 text-zinc-500'
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <TextArea
                id='bio'
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          <div className='flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]'>
            <label
              htmlFor='projects'
              className='font-medium text-sm text-zinc-700 dark:text-zinc-300'
            >
              Portfolio projects
              <span className='font-normal text-sm text-zinc-500 block mt-0.5'>
                Share a few snippets of your work
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />

              <FileInput.FileList />

              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className='flex items-center justify-end gap-2'>
            <Button variant='outline' type='button'>
              Cancel
            </Button>

            <Button variant='primary' type='submit'>
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
