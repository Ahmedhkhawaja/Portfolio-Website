import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
        Not found
      </p>
      <h1 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
        This page doesn’t exist
      </h1>
      <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
        The link may be broken, or the page may have moved.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Button asChild className="rounded-xl">
          <Link href="/">Go home</Link>
        </Button>
        <Button asChild variant="secondary" className="rounded-xl">
          <Link href="/projects">View projects</Link>
        </Button>
      </div>
    </div>
  );
}

