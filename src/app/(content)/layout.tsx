import { type ReactNode } from 'react';
import { NavLinks } from '../_components/nav-links';

export default function ContentLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex max-w-2xl flex-row px-5 pb-40 pt-14">
      <div className="flex min-w-0 flex-auto flex-col">
        <header className="mb-16">
          <nav>
            <NavLinks />
          </nav>
        </header>

        {children}
      </div>
    </div>
  );
}
