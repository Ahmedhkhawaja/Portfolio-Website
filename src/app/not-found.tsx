import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-7xl font-extrabold text-primary">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold">Page not found</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        This page does not exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex cursor-pointer items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity duration-200 hover:opacity-85"
      >
        Back home
      </Link>
    </div>
  );
}
