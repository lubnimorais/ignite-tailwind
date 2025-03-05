'use client';

import {
  createContext,
  useContext,
  useId,
  useState,
  type ComponentProps,
} from 'react';

interface IRootProps extends ComponentProps<'div'> {}

interface IFileInputContextType {
  id: string;
  files: File[];
  onFilesSelected: (files: File[], multiple: boolean) => void;
}

const FileInputContext = createContext({} as IFileInputContextType);

export function Root({ ...rest }: IRootProps) {
  const id = useId();
  const [files, setFiles] = useState<File[]>([]);

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((oldState) => [...oldState, ...files]);
    } else {
      setFiles(files);
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...rest} />
    </FileInputContext.Provider>
  );
}

export function useFileInput() {
  const context = useContext(FileInputContext);

  if (!context) {
    throw new Error('useFileInput must be use whiting an FileInputProvider');
  }

  return context;
}
