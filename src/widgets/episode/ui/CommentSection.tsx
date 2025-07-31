'use client';

import React, { useState } from 'react';
import { useFetchComments, useSubmitComment } from '../api';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

interface CommentSectionProps {
  seriesId: string;
  number: string;
}

export default function CommentSection({
  seriesId,
  number,
}: CommentSectionProps) {
  const {
    data: commentsData,
    isLoading,
    refetch,
  } = useFetchComments(seriesId, number);
  const { mutate: createComment, isPending } = useSubmitComment();
  const [commentText, setCommentText] = useState('');

  const handleSubmitComment = () => {
    if (!commentText.trim()) return;
    createComment(
      { seriesId, number, data: commentText },
      {
        onSuccess: () => refetch(),
      },
    );
    setCommentText('');
  };

  if (isLoading) {
    return (
      <div className="flex w-full flex-col gap-6 bg-white">
        <div className="text-h4 font-medium">댓글</div>
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-200" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-20 rounded bg-gray-200" />
                <div className="h-4 w-full rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6 bg-white">
      <div className="text-h4 font-medium">
        {commentsData?.length || 0}개의 댓글
      </div>

      <CommentInput
        value={commentText}
        onChange={setCommentText}
        onSubmit={handleSubmitComment}
        isSubmitting={isPending}
      />

      <CommentList comments={commentsData || []} />
    </div>
  );
}
