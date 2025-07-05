import React from 'react';
import Image from 'next/image';
import { Logo } from '../../../../public/icons';
import { PATH } from '@/shared/constants';
import NavButton from './NavButton';

const LogoButton = () => (
  <button className="flex cursor-pointer items-center gap-3 outline-none">
    <Image src={Logo} alt="logo" />
    <span className="text-h3 font-medium">감성코어</span>
  </button>
);

export default function Navbar() {
  return (
    <nav className="flex h-[68px] w-full items-center justify-center">
      <div className="flex items-center gap-13">
        <LogoButton />
        <div className="text-b1 flex items-center gap-[38px] font-medium">
          <NavButton href={PATH.HOME} label="홈" />
          <NavButton href="" label="시" />
          <NavButton href="" label="소설" />
          <NavButton href="" label="커뮤니티" />
        </div>
      </div>
    </nav>
  );
}
