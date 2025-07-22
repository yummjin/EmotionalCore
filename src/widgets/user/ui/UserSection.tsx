'use client';

import type { User } from '@/shared/types';
import { useSubmitUserUpdate } from '@/widgets/user/api';
import { Input } from '@/shared/ui';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useState, useEffect, useRef } from 'react';
import { cn, removeCookie } from '@/shared/utils';
import { useFetchUserInfo } from '@/shared/hooks';

export default function UserSection({ user }: { user: User }) {
  const { username, email, description, links, tags, profileImageUrl } = user;
  const { mutate: submitUserUpdate, isPending } = useSubmitUserUpdate();
  const { refetch: refetchUser } = useFetchUserInfo();
  const [tagInput, setTagInput] = useState('');
  const [tagList, setTagList] = useState<string[]>(tags || []);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, watch, setValue } = useForm<User>({
    defaultValues: {
      username: username || '',
      email: email || '',
      profileImageUrl: profileImageUrl || '',
      description: description || '',
      links: links || '',
      tags: tags || [],
    },
    mode: 'onChange',
  });

  const watchedValues = watch();

  useEffect(() => {
    setValue('tags', tagList);
  }, [tagList, setValue]);

  useEffect(() => {
    setTagList(tags || []);
  }, [tags]);

  const isAllFieldsFilled = () => {
    const { username, email, description, links, tags } = watchedValues;
    return (
      username && email && description && links && tags && tags.length >= 3
    );
  };

  const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTagInput(value);

    if (value.includes(' ')) {
      const newTag = value.trim().replace(/#/g, '').replace(/\s+/g, '');
      if (newTag && !tagList.includes(newTag) && tagList.length < 8) {
        setTagList([...tagList, newTag]);
        setTagInput('#');
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTagList(tagList.filter(tag => tag !== tagToRemove));
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = event => {
        const result = event.target?.result as string;
        setSelectedImage(result);
        setValue('profileImageUrl', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: User) => {
    submitUserUpdate(data, {
      onSuccess: () => {
        removeCookie('userInfo');
        refetchUser();
        window.location.reload();
      },
    });
  };

  return (
    <>
      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-2">
          <p>닉네임</p>
          <div className="flex items-center gap-[20px]">
            <div className="relative size-[90px]">
              <div className="bg-fill relative size-[90px] flex-shrink-0 overflow-hidden rounded-full">
                <Image
                  src={
                    selectedImage ||
                    profileImageUrl ||
                    '/images/image-profile.jpg'
                  }
                  alt="profile"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <button
                type="button"
                onClick={handleImageClick}
                className="absolute right-0 bottom-0 cursor-pointer rounded-full border border-gray-400 bg-white p-2"
              >
                <Image
                  src="/icons/icon-camera.svg"
                  alt="edit"
                  width={15}
                  height={17}
                />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <Input
                {...register('username', { required: true, maxLength: 10 })}
              />
              <p className="text-b2 flex justify-between font-light text-gray-700">
                10자 이내로 입력해 주세요.
                <span
                  className={cn(
                    watchedValues.username?.length &&
                      watchedValues.username?.length > 10 &&
                      'text-red-500',
                  )}
                >
                  {watchedValues.username?.length || 0}/10
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>이메일</p>
          <Input {...register('email', { required: true })} />
        </div>
        <div className="flex flex-col gap-2">
          <p>자기소개</p>
          <Input.TextArea
            {...register('description', { required: true, maxLength: 190 })}
            className="h-[170px]"
            placeholder="자기소개를 입력해주세요."
          />
          <p className="text-b2 flex justify-between font-light text-gray-700">
            190자 이내로 입력해 주세요.
            <span
              className={cn(
                watchedValues.description?.length &&
                  watchedValues.description?.length >= 190 &&
                  'text-red-500',
              )}
            >
              {watchedValues.description?.length || 0}/190
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p>링크</p>
          <Input
            {...register('links', { required: true })}
            placeholder="링크를 입력해주세요."
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>해시태그</p>
          <div className="flex flex-col gap-2">
            <Input
              value={tagInput}
              onChange={handleTagInputChange}
              placeholder="#태그를 입력하고 띄어쓰기를 누르세요 (최소 3개, 최대 8개)"
            />
            {tagList.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tagList.map((tag, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 rounded-[10px] border border-gray-400 bg-gray-50 p-4"
                  >
                    <span className="text-d1">{tag}</span>
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="cursor-pointer text-gray-500 outline-none hover:text-red-500"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
            <p className="text-b2 font-light text-gray-700">
              현재 {tagList.length}/8개 태그 (최소 3개 필요)
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={handleSubmit(onSubmit)}
        disabled={isPending || !isAllFieldsFilled()}
        className="bg-m-400 text-h4 flex h-[64px] w-full cursor-pointer items-center justify-center rounded-[10px] text-white outline-none disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-400"
      >
        완료
      </button>
    </>
  );
}
