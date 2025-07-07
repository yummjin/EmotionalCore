import { cn } from '@/shared/utils';
import { InputHTMLAttributes } from 'react';

interface LoginInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError: boolean;
}

export default function LoginInput({
  isError = false,
  ...rest
}: LoginInputProps) {
  return (
    <input
      className={cn(
        isError ? 'border-red-500' : 'border-gray-400',
        'rounded-[10px] border-[1px] p-4 outline-none',
      )}
      {...rest}
    />
  );
}
