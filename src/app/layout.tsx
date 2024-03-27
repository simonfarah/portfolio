import { type Metadata } from 'next';
import { type ReactNode } from 'react';
import { cx } from '#/lib/utils';
import { fontDefault, fontDisplay } from '#/styles/fonts';
import '#/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Simon Farah',
    template: '%s - Simon Farah',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cx(
          fontDefault.variable,
          fontDisplay.variable,
          'bg-background font-default text-foreground selection:bg-primary/90 selection:text-primary-foreground',
        )}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
