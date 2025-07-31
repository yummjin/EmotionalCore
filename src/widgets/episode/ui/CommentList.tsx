'use client';

import React from 'react';
import { Comment } from '@/shared/types';
import CommentItem from './CommentItem';

interface CommentListProps {
  comments: Comment[];
}

export default function CommentList({ comments }: CommentListProps) {
  if (comments.length === 0) {
    return (
      <div className="flex w-full justify-center py-8 text-gray-500">
        아직 댓글이 없습니다. 첫 번째 댓글을 남겨보세요!
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col divide-y divide-gray-200">
      {comments.map(comment => (
        <CommentItem key={comment.commentId} comment={comment} />
      ))}
    </div>
  );
}
