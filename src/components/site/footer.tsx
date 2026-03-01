import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <p className="font-display text-lg tracking-tight">Ahmed Hassan Khawaja</p>
            <p className="text-sm text-muted-foreground">
              Second-year Software Engineering student at UNSW Sydney.
            </p>
          </div>

          <div className="grid gap-6 text-sm sm:grid-cols-2 md:col-span-2 md:gap-x-10 md:gap-y-2">
            <p className="font-medium text-foreground">Quick links</p>
            <p className="font-medium text-foreground sm:justify-self-start md:justify-self-start">
              Social
            </p>

            <Link className="text-muted-foreground hover:text-foreground" href="/">
              Home
            </Link>
            <a
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight className="h-4 w-4" />
            </a>

            <Link
              className="text-muted-foreground hover:text-foreground"
              href="/projects"
            >
              Projects
            </Link>
            <a
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight className="h-4 w-4" />
            </a>

            <Link
              className="text-muted-foreground hover:text-foreground"
              href="/#about"
            >
              About
            </Link>
            <span className="hidden sm:block" aria-hidden />

            <Link
              className="text-muted-foreground hover:text-foreground"
              href="/#contact"
            >
              Contact
            </Link>
            <span className="hidden sm:block" aria-hidden />
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Ahmed Hassan Khawaja. Built with Next.js
            and hosted on Vercel.
          </p>
          <a className="hover:text-foreground" href="#">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

