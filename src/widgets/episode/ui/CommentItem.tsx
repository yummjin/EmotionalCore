'use client';

import React from 'react';
import Image from 'next/image';
import { Comment } from '@/shared/types';
// import { useLikeComment } from '../api';

interface CommentItemProps {
  comment: Comment;
}

export default function CommentItem({ comment }: CommentItemProps) {
  //   const { mutate: likeComment, isPending } = useLikeComment();

  const handleLike = () => {
    // likeComment({ commentId: comment.id });
  };

  const formatTimeAgo = (createdAt: string) => {
    const now = new Date();
    const commentDate = new Date(createdAt);
    const diffInHours = Math.floor(
      (now.getTime() - commentDate.getTime()) / (1000 * 60 * 60),
    );
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInWeeks = Math.floor(diffInDays / 7);

    if (diffInHours < 1) return '방금 전';
    if (diffInHours < 24) return `${diffInHours}시간 전`;
    if (diffInDays < 7) return `${diffInDays}일 전`;
    if (diffInWeeks < 4) return `${diffInWeeks}주 전`;
    return `${Math.floor(diffInWeeks / 4)}개월 전`;
  };

  const { member, commentContents, commentDate, commentLike } = comment;

  return (
    <div className="flex w-full gap-3 py-4">
      <div className="flex-shrink-0">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-200">
          <Image
            src={member.profileImageUrl || '/images/image-profile.jpg'}
            alt="프로필"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-gray-700">
            {member.username}
          </div>
          <div className="text-xs text-gray-500">
            {formatTimeAgo(commentDate)}
          </div>
        </div>

        <div className="text-sm text-gray-800">{commentContents}</div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleLike}
            // disabled={isPending}
            className={`flex items-center gap-1 text-xs ${
              commentLike > 0 ? 'text-red-500' : 'text-gray-500'
            } hover:text-red-500`}
          >
            <svg
              className={`h-4 w-4 ${commentLike > 0 ? 'fill-red-500' : 'fill-none'}`}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            {commentLike}
          </button>
        </div>
      </div>
    </div>
  );
}
