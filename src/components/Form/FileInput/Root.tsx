import type { ComponentProps } from 'react';

interface IRootProps extends ComponentProps<'div'> {}

export function Root({ ...rest }: IRootProps) {
  return <div {...rest} />;
}
