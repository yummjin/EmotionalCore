'use client';

import React from 'react';
import Image from 'next/image';
import { getCookie } from '@/shared/utils';
import { User } from '@/shared/types';

interface CommentInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export default function CommentInput({
  value,
  onChange,
  onSubmit,
  isSubmitting,
}: CommentInputProps) {
  const { profileImageUrl, username } = JSON.parse(
    decodeURIComponent(getCookie('userInfo') || ''),
  ) as User;

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="flex w-full gap-3">
      <div className="flex-shrink-0">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={profileImageUrl || '/images/image-profile.jpg'}
            alt="프로필"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <div className="text-sm font-medium text-gray-700">{username}</div>
        <div className="flex gap-2">
          <input
            type="text"
            value={value}
            onChange={e => onChange(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="작가에게 힘이 되는 한마디 남기기"
            className="focus:border-m-500 flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none"
            disabled={isSubmitting}
          />
          <button
            onClick={onSubmit}
            disabled={isSubmitting || !value.trim()}
            className="rounded-lg bg-gray-300 px-4 py-2 text-sm font-medium text-black hover:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            댓글 남기기
          </button>
        </div>
      </div>
    </div>
  );
}
