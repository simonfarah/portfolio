import * as React from 'react';
import { type VariantProps } from 'cva';
import { cva, cx } from '#/lib/utils';

export const badgeVariants = cva({
  base: 'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium',
  variants: {
    variant: {
      primary: 'border-transparent bg-primary text-primary-foreground',
      secondary: 'border-transparent bg-secondary text-secondary-foreground',
      destructive: 'border-transparent bg-red-500 text-white',
      outline: 'text-foreground',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cx(badgeVariants({ variant, className }))} {...props} />
  );
}
