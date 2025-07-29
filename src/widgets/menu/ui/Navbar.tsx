'use client';

import { useEffect, useState } from 'react';

import { PATH } from '@/shared/constants';
import { cn, fetchLoginStatus, getCookie } from '@/shared/utils';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { NAVBAR_ITEMS } from '../model';
import NavButton from './NavButton';
import { User } from '@/shared/types';

const LogoButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(PATH.HOME)}
      className="flex cursor-pointer items-center gap-3 outline-none"
    >
      <Image src="/icons/logo.svg" alt="logo" width={32} height={32} />
      <span className="text-h3 hidden font-medium md:block">감성코어</span>
    </button>
  );
};

const AddSection = ({
  isLoggedIn,
  profileImageUrl,
}: {
  isLoggedIn: boolean;
  profileImageUrl: string;
}) => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-8">
      <button
        className="flex cursor-pointer items-center gap-2"
        onClick={() => {
          if (isLoggedIn) {
            router.push(PATH.WORK_REGISTER);
          } else {
            router.push(PATH.LOGIN);
          }
        }}
      >
        <Image src="/icons/icon-add.svg" alt="logo" width={24} height={24} />
        <span className="text-m-600 text-b1 font-normal md:font-medium">
          작품 등록
        </span>
      </button>
      <button
        className="size-[32px] cursor-pointer rounded-full bg-gray-300 bg-cover bg-center outline-none"
        style={{
          backgroundImage: `url(${profileImageUrl || '/images/image-profile.jpg'})`,
        }}
        onClick={() => {
          if (isLoggedIn) {
            router.push(PATH.USER);
          } else {
            router.push(PATH.LOGIN);
          }
        }}
      />
    </div>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let profileImageUrl = '/images/image-profile.jpg';

  try {
    const userInfoCookie = getCookie('userInfo');
    if (userInfoCookie) {
      const { profileImageUrl: userProfileImage } = JSON.parse(
        decodeURIComponent(userInfoCookie),
      ) as User;
      profileImageUrl = userProfileImage;
    }
  } finally {
    profileImageUrl = '/images/image-profile.jpg';
  }

  const isLibraryActive =
    pathname === PATH.LIBRARY || pathname.startsWith(PATH.LIBRARY);

  useEffect(() => {
    setIsLoggedIn(!!fetchLoginStatus());
  }, []);

  return (
    <nav className="px-normal grid h-[116px] w-full grid-rows-2 items-center md:flex md:h-[68px] md:justify-center">
      <div className="md:max-w-medium lg:max-w-large hidden w-full items-center justify-between md:flex">
        <div className="flex items-center gap-13">
          <LogoButton />
          <div className="text-b1 flex items-center gap-[38px] font-medium">
            {NAVBAR_ITEMS.map(item => (
              <NavButton key={item.label} href={item.href} label={item.label} />
            ))}
            <Link
              href={isLoggedIn ? PATH.LIBRARY : PATH.LOGIN}
              className={cn(
                !isLibraryActive ? 'text-gray-500' : 'text-black',
                'cursor-pointer outline-none',
              )}
              suppressHydrationWarning
            >
              서재
            </Link>
          </div>
        </div>
        <AddSection isLoggedIn={isLoggedIn} profileImageUrl={profileImageUrl} />
      </div>
      <div className="flex w-full items-center justify-between gap-13 md:hidden">
        <LogoButton />
        <AddSection isLoggedIn={isLoggedIn} profileImageUrl={profileImageUrl} />
      </div>
      <div className="flex w-full items-center justify-between md:hidden">
        <div className="text-b1 flex w-full items-center justify-between font-medium">
          {NAVBAR_ITEMS.map(item => (
            <NavButton key={item.label} href={item.href} label={item.label} />
          ))}
          <Link
            href={isLoggedIn ? PATH.LIBRARY : PATH.LOGIN}
            className={cn(
              !isLibraryActive ? 'text-gray-500' : 'text-black',
              'cursor-pointer outline-none',
            )}
            suppressHydrationWarning
          >
            서재
          </Link>
        </div>
      </div>
    </nav>
  );
}
