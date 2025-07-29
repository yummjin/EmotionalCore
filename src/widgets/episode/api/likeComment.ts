import { userPost, REQUEST } from '@/shared/api';
import { useMutation } from '@tanstack/react-query';

export const likeComment = async ({
  seriesId,
  number,
}: {
  seriesId: string;
  number: string;
}) => {
  const response = await userPost({
    request: `${REQUEST.COMMENTS}/${seriesId}/${number}/like`,
  });
  return response.data;
};

export const useLikeComment = () => {
  return useMutation({
    mutationFn: likeComment,
  });
};
