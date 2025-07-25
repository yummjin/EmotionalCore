import type { ReactNode } from 'react';

export default function GapLayout({ children }: { children: ReactNode }) {
  return (
    <div className="px-normal flex w-screen justify-center py-10 md:py-[76px]">
      <div className="md:max-w-medium lg:max-w-large flex w-full flex-col gap-10 md:gap-[76px]">
        {children}
      </div>
    </div>
  );
}
