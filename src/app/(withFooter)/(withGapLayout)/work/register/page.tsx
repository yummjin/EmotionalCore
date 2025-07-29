'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PATH } from '@/shared/constants';
import { useRouter } from 'next/navigation';
import {
  FormInput,
  FormTextArea,
  FormSelect,
  HashtagInput,
  ImageUpload,
  RichTextEditor,
} from '@/shared/ui';

interface WorkRegisterForm {
  workTitle: string;
  workIntroduction: string;
  category: string;
  content: string;
}

export default function WorkRegisterPage() {
  const router = useRouter();
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [hashtagInput, setHashtagInput] = useState('');
  const [editorContent, setEditorContent] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<WorkRegisterForm>({
    mode: 'onChange',
    defaultValues: {
      workTitle: '',
      workIntroduction: '',
      category: '',
      content: '',
    },
  });

  const watchedValues = watch();

  const handleHashtagAdd = () => {
    if (hashtagInput.trim() && hashtags.length < 8) {
      setHashtags([...hashtags, hashtagInput.trim()]);
      setHashtagInput('');
    }
  };

  const handleHashtagRemove = (index: number) => {
    setHashtags(hashtags.filter((_, i) => i !== index));
  };

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
    setValue('content', content);
  };

  const onSubmit = (data: WorkRegisterForm) => {
    console.log({
      ...data,
      content: editorContent,
      hashtags,
    });
    router.push(PATH.HOME);
  };

  const categoryOptions = [
    { value: 'novel', label: '소설' },
    { value: 'poetry', label: '시' },
    { value: 'essay', label: '에세이' },
    { value: 'drama', label: '드라마' },
  ];

  const isFormValid =
    isValid && hashtags.length >= 3 && editorContent.trim().length > 0;

  return (
    <div className="px-normal flex w-full justify-center py-8">
      <div className="md:max-w-medium lg:max-w-large w-full">
        <h1 className="text-h2 mb-8 font-medium">작품 등록</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <ImageUpload />

              <FormTextArea
                label="작품 소개"
                placeholder="입력하세요"
                maxLength={180}
                currentLength={watchedValues.workIntroduction?.length || 0}
                className="col-span-2 h-24 w-full resize-none"
                register={register}
                error={errors.workIntroduction}
                {...register('workIntroduction', {
                  required: '작품 소개를 입력해주세요.',
                  maxLength: {
                    value: 180,
                    message: '180자 이내로 입력해주세요.',
                  },
                })}
              />
            </div>

            <div className="flex flex-col gap-6">
              <FormInput
                label="작품명"
                type="text"
                placeholder="입력하세요"
                maxLength={45}
                currentLength={watchedValues.workTitle?.length || 0}
                register={register}
                error={errors.workTitle}
                {...register('workTitle', {
                  required: '작품명을 입력해주세요.',
                  maxLength: {
                    value: 45,
                    message: '45자 이내로 입력해주세요.',
                  },
                })}
              />

              <FormSelect
                label="분야"
                options={categoryOptions}
                placeholder="분류를 선택하세요."
                register={register}
                error={errors.category}
                {...register('category', {
                  required: '분야를 선택해주세요.',
                })}
              />

              <div className="flex flex-col gap-2">
                <label className="text-b1 font-medium">시리즈 설정</label>
                <button
                  type="button"
                  className="text-b2 flex w-fit items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-50"
                >
                  <span className="text-lg">+</span>
                  시리즈 추가하기
                </button>
              </div>

              <HashtagInput
                value={hashtagInput}
                onChange={setHashtagInput}
                onAdd={handleHashtagAdd}
                hashtags={hashtags}
                onRemove={handleHashtagRemove}
                maxTags={8}
                minTags={3}
                error={
                  hashtags.length < 3
                    ? {
                        type: 'manual',
                        message: '해시태그를 3개 이상 입력해주세요.',
                      }
                    : undefined
                }
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-b1 font-medium">내용을 작성하세요.</label>
              <RichTextEditor
                content={editorContent}
                onChange={handleEditorChange}
                placeholder="작품 내용을 작성하세요..."
                className="h-100 rounded-lg border border-gray-300 p-4"
              />
              {errors.content && (
                <span className="text-xs text-red-500">
                  {errors.content.message}
                </span>
              )}
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-gray-50 p-4">
            <h3 className="text-b1 mb-2 font-medium">
              이미지 업로드 가이드라인
            </h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>
                • 가로사이즈는 690픽셀이하이며, 세로사이즈는 제한이 없습니다.
              </li>
              <li>
                • 총 용량제한은 20mb이하이며, 파일1개의 용량제한은 2mb입니다.
              </li>
              <li>• 파일 형태는 gif, jpg로 제한됩니다.</li>
            </ul>
          </div>

          <div className="mt-8 flex justify-end gap-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="text-b2 rounded-lg border border-gray-300 px-6 py-2 hover:bg-gray-50"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={!isFormValid}
              className="text-b2 rounded-lg bg-blue-500 px-6 py-2 text-white disabled:bg-gray-300"
            >
              등록하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
