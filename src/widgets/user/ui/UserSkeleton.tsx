import { Input } from '@/shared/ui';
import Image from 'next/image';
import React from 'react';

export default function UserSkeleton() {
  return (
    <>
      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-2">
          <p>닉네임</p>
          <div className="flex items-center gap-[20px]">
            <div className="relative size-[90px]">
              <div className="bg-fill relative size-[90px] flex-shrink-0 overflow-hidden rounded-full">
                <Image
                  src={'/images/image-profile.jpg'}
                  alt="profile"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <button
                type="button"
                className="absolute right-0 bottom-0 cursor-pointer rounded-full border border-gray-400 bg-white p-2"
              >
                <Image
                  src="/icons/icon-camera.svg"
                  alt="edit"
                  width={15}
                  height={17}
                />
              </button>
              <input type="file" accept="image/*" className="hidden" />
            </div>
            <Input readOnly />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>이메일</p>
          <Input readOnly />
        </div>
        <div className="flex flex-col gap-2">
          <p>자기소개</p>
          <Input readOnly placeholder="자기소개를 입력해주세요." />
        </div>
        <div className="flex flex-col gap-2">
          <p>링크</p>
          <Input readOnly placeholder="링크를 입력해주세요." />
        </div>
        <div className="flex flex-col gap-2">
          <p>해시태그</p>
          <Input readOnly placeholder="#필수 3개 입력 (최대 8개)" />
        </div>
      </div>
      <button
        disabled
        className="text-h4 flex h-[64px] w-full cursor-pointer items-center justify-center rounded-[10px] outline-none disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-400"
      >
        완료
      </button>
    </>
  );
}
