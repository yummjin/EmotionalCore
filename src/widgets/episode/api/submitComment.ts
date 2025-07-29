import { userPost, REQUEST } from '@/shared/api';
import { useMutation } from '@tanstack/react-query';

interface SubmitCommentProps {
  seriesId: string;
  number: string;
  data: string;
}

const submitComment = async ({
  seriesId,
  number,
  data,
}: SubmitCommentProps) => {
  const response = await userPost({
    request: `${REQUEST.COMMENTS}${seriesId}/${number}`,
    data: { content: data },
  });
  return response.data;
};

export const useSubmitComment = () => {
  return useMutation({
    mutationFn: submitComment,
  });
};
