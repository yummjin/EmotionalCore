'use client';

import type { User } from '@/shared/types';
import { getCookie } from '@/shared/utils';
import { UserSection, UserSkeleton } from '@/widgets/user/ui';
import { useEffect, useState } from 'react';

export default function UserPage() {
  const [user, setUser] = useState<User | null>(null);

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
  }, []);

  if (!user) {
    return <UserSkeleton />;
  }

  return <UserSection user={user} />;
}
