import { Icons } from '#/components/icons';
import { Badge } from '#/components/ui/badge';
import { Link } from '#/components/ui/link';
import { works } from '#/velite';

export default function WorkPage() {
  works.sort((a, b) => a.priority - b.priority);

  return (
    <section>
      <h1 className="mb-8 text-2xl">my work</h1>

      <p>
        On a mission to build websites that people love. Working with a goal to
        deliver fast, resilient solutions optimized for scale — performance and
        scalabilty are priorities on my radar. Doing open-source work in my free
        time.
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

            <div className="flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
