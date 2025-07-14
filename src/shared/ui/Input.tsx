import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { cn } from '../utils';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
};

export default function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className="w-full rounded-[10px] border border-gray-400 px-5 py-4 outline-none"
    />
  );
}

function TextArea({ className, ...props }: TextAreaProps) {
  return (
    <textarea
      {...props}
      className={cn(
        'w-full resize-none rounded-[10px] border border-gray-400 px-5 py-4 outline-none',
        className,
      )}
    />
  );
}

Input.TextArea = TextArea;
