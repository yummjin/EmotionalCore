'use client';

import React, { ReactNode } from 'react';
import type { User } from '@/shared/types';
import { getCookie } from '@/shared/utils';
import { useEffect, useState } from 'react';
import { UserSideBar } from '@/widgets/user/ui';
import { usePathname } from 'next/navigation';

export default function UserLayout({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const isLeave = usePathname().includes('leave');
  const title = isLeave ? '탈퇴하기' : '내 정보 관리';

  useEffect(() => {
    const userInfo = getCookie('userInfo');
    if (userInfo) {
      try {
        const parsedUser = JSON.parse(userInfo) as User;
        setUser(parsedUser);
      } catch (error) {
        console.error('Failed to parse user info:', error);
        setUser(null);
      }
    } else {
      setUser(null);
    }
    setIsLoading(false);
  }, []);

  return (
    <div className="px-normal flex w-screen justify-center pt-[27px] pb-[100px]">
      <div className="md:max-w-medium lg:max-w-large flex w-full justify-between gap-[76px] lg:gap-[100px]">
        <UserSideBar user={user} isLoading={isLoading} />
        <div className="flex w-full flex-col gap-[60px] pr-14">
          <p className="text-h2 font-medium">{title}</p>
          {children}
        </div>
      </div>
    </div>
  );
}
