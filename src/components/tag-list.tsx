import { Badge } from "@/components/ui/badge";

export function TagList({
  tags,
  wrap = true,
}: {
  tags: string[];
  wrap?: boolean;
}) {
  return (
    <ul
      className={wrap ? "flex flex-wrap gap-2" : "flex flex-nowrap gap-2 overflow-hidden"}
      aria-label="Tech stack"
    >
      {tags.map((t) => (
        <li key={t}>
          <Badge
            variant="secondary"
            className="rounded-full whitespace-nowrap"
          >
            {t}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

