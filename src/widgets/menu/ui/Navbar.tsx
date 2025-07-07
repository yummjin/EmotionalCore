'use client';

import Image from 'next/image';
import { AddIcon, Logo } from '../../../../public/icons';
import NavButton from './NavButton';
import { NAVBAR_ITEMS } from '../model';
import { fetchLoginStatus } from '@/shared/utils';
import { PATH } from '@/shared/constants';
import { useRouter } from 'next/navigation';

const LogoButton = () => {
  return (
    <button className="flex cursor-pointer items-center gap-3 outline-none">
      <Image src={Logo} alt="logo" />
      <span className="text-h3 hidden font-medium md:block">감성코어</span>
    </button>
  );
};

const AddSection = () => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-8">
      <button className="flex cursor-pointer items-center gap-2">
        <Image src={AddIcon} alt="logo" />
        <span className="text-m-600 text-b1 font-normal md:font-medium">
          작품 등록
        </span>
      </button>
      <button
        className="size-[32px] cursor-pointer rounded-full bg-gray-300 outline-none"
        onClick={() => {
          if (fetchLoginStatus()) router.push(PATH.HOME);
          else router.push(PATH.LOGIN);
        }}
      />
    </div>
  );
};

export default function Navbar() {
  return (
    <nav className="px-normal grid h-[116px] w-full grid-rows-2 items-center md:flex md:h-[68px] md:justify-center">
      <div className="md:max-w-medium lg:max-w-large hidden w-full items-center justify-between md:flex">
        <div className="flex items-center gap-13">
          <LogoButton />
          <div className="text-b1 flex items-center gap-[38px] font-medium">
            {NAVBAR_ITEMS.map(item => (
              <NavButton key={item.label} href={item.href} label={item.label} />
            ))}
          </div>
        </div>
        <AddSection />
      </div>
      <div className="flex w-full items-center justify-between gap-13 md:hidden">
        <LogoButton />
        <AddSection />
      </div>
      <div className="flex w-full items-center justify-between md:hidden">
        <div className="text-b1 flex w-full items-center justify-between font-medium">
          {NAVBAR_ITEMS.map(item => (
            <NavButton key={item.label} href={item.href} label={item.label} />
          ))}
        </div>
      </div>
    </nav>
  );
}
