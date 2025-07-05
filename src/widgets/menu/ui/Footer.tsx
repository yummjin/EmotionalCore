import Image from 'next/image';
import React from 'react';
import { LogoFooter } from '../../../../public/icons';

export default function Footer() {
  return (
    <div className="px-normal mt-8 flex h-[167px] items-center justify-center bg-blue-100 md:mt-0">
      <div className="flex h-fit gap-15">
        <Image src={LogoFooter} alt="감성코어" />
        <div className="flex h-[89px] flex-col justify-between">
          <div className="text-b2 md:text-b1 flex gap-2 font-medium md:gap-4">
            <p>이용약관</p>
            <p>개인정보처리방침</p>
          </div>
          <div className="text-d2 md:text-b2 flex flex-col text-gray-700">
            <p>
              감성코어에 게시된 모든 콘텐츠들은 저작권법에 의거 보호받고
              있습니다.
            </p>
            <p>고객지원 : help@core.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
