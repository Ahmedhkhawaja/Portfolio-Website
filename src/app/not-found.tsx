import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-4 text-center">
      <p className="font-pixel text-7xl font-bold text-primary">404</p>
      <h1 className="mt-4 font-pixel text-3xl font-bold">Game over</h1>
      <p className="mt-2 text-sm text-muted-foreground">This page does not exist or has moved.</p>
      <Link
        href="/"
        className="px px-btn mt-8 inline-flex items-center bg-primary px-6 py-3 font-pixel font-semibold text-primary-foreground [--px-c:var(--primary)]"
      >
        ▶ Continue
      </Link>
    </div>
  );
}
