import { cn } from '@/shared/utils';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface LoginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function LoginButton({
  children,
  className,
  ...rest
}: LoginButtonProps) {
  return (
    <button
      className={cn(
        'w-full cursor-pointer rounded-[10px] p-4 outline-none hover:brightness-90',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
