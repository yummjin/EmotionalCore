import React, {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  SelectHTMLAttributes,
} from 'react';
import { cn } from '@/shared/utils';
import {
  UseFormRegister,
  FieldError,
  FieldValues,
  Path,
} from 'react-hook-form';
import Image from 'next/image';

// 기본 Input 컴포넌트
type InputProps<T extends FieldValues = FieldValues> =
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    helperText?: string;
    maxLength?: number;
    currentLength?: number;
    register?: UseFormRegister<T>;
    name?: Path<T>;
    error?: FieldError;
  };

export function FormInput<T extends FieldValues = FieldValues>({
  label,
  helperText,
  maxLength,
  currentLength,
  className,
  register,
  name,
  error,
  ...props
}: InputProps<T>) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-b1 font-medium">{label}</label>}
      <input
        {...(register && name ? register(name) : {})}
        {...props}
        className={cn(
          'text-b2 w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none',
          error ? 'border-red-500' : 'border-gray-300',
          className,
        )}
      />
      {error && <span className="text-xs text-red-500">{error.message}</span>}
      {(helperText || maxLength) && !error && (
        <span className="text-xs text-gray-500">
          {helperText}
          {maxLength && currentLength !== undefined && (
            <span>
              {currentLength}/{maxLength}자 이내로 입력해 주세요.
            </span>
          )}
        </span>
      )}
    </div>
  );
}

// TextArea 컴포넌트
type TextAreaProps<T extends FieldValues = FieldValues> =
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    helperText?: string;
    maxLength?: number;
    currentLength?: number;
    register?: UseFormRegister<T>;
    name?: Path<T>;
    error?: FieldError;
  };

export function FormTextArea<T extends FieldValues = FieldValues>({
  label,
  helperText,
  maxLength,
  currentLength,
  className,
  register,
  name,
  error,
  ...props
}: TextAreaProps<T>) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-b1 font-medium">{label}</label>}
      <textarea
        {...(register && name ? register(name) : {})}
        {...props}
        className={cn(
          'text-b2 w-full resize-none rounded-lg border p-3 focus:border-blue-500 focus:outline-none',
          error ? 'border-red-500' : 'border-gray-300',
          className,
        )}
      />
      {error && <span className="text-xs text-red-500">{error.message}</span>}
      {(helperText || maxLength) && !error && (
        <span className="text-xs text-gray-500">
          {helperText}
          {maxLength && currentLength !== undefined && (
            <span>
              {currentLength}/{maxLength}자로 입력해 주세요.
            </span>
          )}
        </span>
      )}
    </div>
  );
}

// Select 컴포넌트
type SelectProps<T extends FieldValues = FieldValues> =
  SelectHTMLAttributes<HTMLSelectElement> & {
    label?: string;
    options: { value: string; label: string }[];
    placeholder?: string;
    register?: UseFormRegister<T>;
    name?: Path<T>;
    error?: FieldError;
  };

export function FormSelect<T extends FieldValues = FieldValues>({
  label,
  options,
  placeholder,
  className,
  register,
  name,
  error,
  ...props
}: SelectProps<T>) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-b1 font-medium">{label}</label>}
      <select
        {...(register && name ? register(name) : {})}
        {...props}
        className={cn(
          'text-b2 w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none',
          error ? 'border-red-500' : 'border-gray-300',
          className,
        )}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="text-xs text-red-500">{error.message}</span>}
    </div>
  );
}

// Hashtag Input 컴포넌트
type HashtagInputProps = {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
  hashtags: string[];
  onRemove: (index: number) => void;
  maxTags?: number;
  minTags?: number;
  error?: FieldError;
};

export function HashtagInput({
  value,
  onChange,
  onAdd,
  hashtags,
  onRemove,
  maxTags = 8,
  minTags = 3,
  error,
}: HashtagInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-b1 font-medium">해시태그</label>
      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && onAdd()}
          placeholder="해시태그 입력"
          className={cn(
            'text-b2 flex-1 rounded-lg border p-3 focus:border-blue-500 focus:outline-none',
            error ? 'border-red-500' : 'border-gray-300',
          )}
        />
        <button
          onClick={onAdd}
          disabled={hashtags.length >= maxTags}
          className="rounded-lg bg-blue-500 px-4 py-2 text-white disabled:bg-gray-300"
        >
          추가
        </button>
      </div>
      {error && <span className="text-xs text-red-500">{error.message}</span>}
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">
          필수 {minTags}개 입력해주세요. [최대 {maxTags}개]
        </span>
        <span className="text-xs text-gray-500">
          {hashtags.length}/{maxTags}
        </span>
      </div>
      {hashtags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {hashtags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs"
            >
              #{tag}
              <button
                onClick={() => onRemove(index)}
                className="ml-1 text-gray-500 hover:text-red-500"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// Image Upload 컴포넌트
type ImageUploadProps = {
  onUpload?: () => void;
  className?: string;
  error?: FieldError;
};

export function ImageUpload({ onUpload, className, error }: ImageUploadProps) {
  return (
    <div
      className={cn(
        'flex aspect-[4/3] w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed bg-gray-50 hover:border-gray-400',
        error ? 'border-red-500' : 'border-gray-300',
        className,
      )}
      onClick={onUpload}
    >
      <div className="flex flex-col items-center gap-2">
        <Image src="/icons/logo.svg" alt="logo" width={48} height={48} />
        <span className="text-gray-500">이미지를 업로드하세요</span>
      </div>
    </div>
  );
}
