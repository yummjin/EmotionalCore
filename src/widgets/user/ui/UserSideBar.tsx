'use client';

import type { User } from '@/shared/types';
import Image from 'next/image';
import { buttons } from '../model';
import { useRouter } from 'next/navigation';
import { PATH } from '@/shared/constants';

export default function UserSideBar({
  user,
  isLoading,
}: {
  user: User | null;
  isLoading: boolean;
}) {
  if (isLoading) {
    return <Loading />;
  }

  if (!user) {
    return <NoUser />;
  }

  return <SideBar user={user} />;
}

const Loading = () => (
  <div className="flex w-fit flex-col">
    <div className="relative mb-[16px] size-[72px] animate-pulse overflow-hidden rounded-full border bg-gray-200" />
    <div className="text-b2 mb-[57px] flex flex-col gap-[2px]">
      <div className="mb-1 h-4 animate-pulse rounded bg-gray-200" />
      <div className="h-4 animate-pulse rounded bg-gray-200" />
    </div>
    <div className="flex flex-col gap-[33px]">
      {buttons.map((_, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className="h-6 w-6 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
        </div>
      ))}
    </div>
  </div>
);

const NoUser = () => (
  <div className="flex w-fit flex-col">
    <div className="relative mb-[16px] size-[72px] overflow-hidden rounded-full border">
      <Image
        alt="profile"
        src="/images/image-profile.jpg"
        sizes="72px"
        fill
        className="object-cover object-center"
      />
    </div>
    <div className="text-b2 mb-[57px] flex flex-col gap-[2px]">
      <p className="font-medium">사용자 정보를 불러올 수 없습니다</p>
      <p>로그인이 필요합니다</p>
    </div>
    <div className="flex flex-col gap-[33px]">
      {buttons.map((_, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className="h-6 w-6 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
        </div>
      ))}
    </div>
  </div>
);

function SideBar({ user }: { user: User }) {
  const { username, email, profileImageUrl } = user;
  const router = useRouter();

  return (
    <div className="flex w-fit flex-col">
      <div className="relative mb-[16px] size-[72px] overflow-hidden rounded-full">
        <Image
          alt="profile"
          src={profileImageUrl || '/images/image-profile.jpg'}
          sizes="72"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="text-b2 mb-[57px] flex flex-col gap-[2px]">
        <p className="font-medium">{username}</p>
        <p>{email}</p>
      </div>
      <div className="flex flex-col gap-[33px]">
        {buttons.map(({ image, label, href, onClick }, index) => (
          <button
            key={index}
            className="flex cursor-pointer items-center gap-3 text-nowrap outline-none"
            onClick={() => {
              if (href) {
                router.push(href);
              }
              if (onClick) {
                onClick();
                router.push(PATH.HOME);
              }
            }}
          >
            <Image src={image} width={25} height={25} alt="profile" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
