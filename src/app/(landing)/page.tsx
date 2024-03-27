import { Icons } from '#/components/icons';
import { Link } from '#/components/ui/link';

export default function HomePage() {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center p-5">
      <nav>
        <ul className="flex items-center justify-center gap-4">
          <Link href="/work">Work</Link>

          <Link href="mailto:farahsimon22@gmail.com" target="_blank">
            <Icons.mail className="h-5 w-5" />
          </Link>

          <Link href="https://github.com/simonfarah" target="_blank">
            <Icons.github className="h-5 w-5" />
          </Link>
        </ul>
      </nav>

      <h1 className="my-16 whitespace-nowrap text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
        simon farah
      </h1>

      <p className="text-center text-muted-foreground">
        Software engineer with a passion for web development and open-source
        projects.
      </p>
    </section>
  );
}
