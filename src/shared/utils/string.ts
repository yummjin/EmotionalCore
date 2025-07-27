import { type ClassValue, clsx } from 'clsx';
import dayjs from 'dayjs';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPath(base: string, path: string) {
  return `${base}/${path}`;
}

export function getDate(date: string, format: string) {
  return dayjs(date).format(format);
}
