import { Icons } from '#/components/icons';
import { Badge } from '#/components/ui/badge';
import { Link } from '#/components/ui/link';
import { works } from '#/velite';

export default function WorkPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl">my work</h1>

      <p>
        On a mission to build website that people love, and along the way,
        contribute to open-source projects. Here's a list of my projects so far.
      </p>

      <hr className="my-6 border-muted" />

      <div className="flex flex-col gap-14">
        {works.map((work) => (
          <div key={work.title} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h2 className="text-xl">{work.title}</h2>

              <Link href={work.link} target="_blank" className="ml-4">
                <Icons.link className="h-4 w-4" />
              </Link>
            </div>

            <div>
              <p className="mb-1 text-sm">role:</p>

              <div className="flex flex-wrap gap-2">
                {work.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
