'use client';

import { cn } from '@/shared/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const isActive = usePathname() === href;

  return (
    <Link
      href={href}
      className={cn(!isActive ? 'text-gray-500' : 'text-black')}
    >
      {label}
    </Link>
  );
}
