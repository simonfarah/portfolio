import { Link } from '#/components/ui/link';

const navItems = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'work',
    href: '/work',
  },
];

export function NavLinks() {
  return (
    <div className="flex items-center gap-4">
      {navItems.map((item) => (
        <Link key={item.name} href={item.href} className="text-base">
          {item.name}
        </Link>
      ))}
    </div>
  );
}
