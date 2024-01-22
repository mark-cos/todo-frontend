import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-[100svh] w-full flex-col items-center justify-center gap-4">
      <p className="text-2xl font-bold">404 Not Found</p>

      <p>Could not find requested resource</p>
      <Link href="/main" className="text-primary">
        Return Home
      </Link>
    </div>
  );
}
