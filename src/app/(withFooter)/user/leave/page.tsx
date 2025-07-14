'use client';

import { useSubmitUserLeave } from '@/widgets/user/api';
import { useState } from 'react';

const data = [
  {
    title: '회원 탈퇴 안내사항',
    description: `안녕하세요, 감성코어 운영팀입니다. 
      회원님께서 회원 탈퇴를 진행하시기 전, 아래 내용을 반드시 확인해주시기 바랍니다.`,
  },
  {
    title: '탈퇴 후 정보처리 방침',
    description: `회원 탈퇴 즉시 계정 정보 및 개인정보는 복구 불가능하도록 삭제됩니다. 
    단, 관련 법령에 따라 일정 기간 동안 보관해야 하는 정보는 안전하게 별도 저장되며, 
    보관 기간 종료 후 완전 삭제됩니다.`,
  },
  {
    title: '기존 저작물의 보관',
    description: `감성코어의 특성상, 회원님이 작성하신 소설, 시, 웹툰 등 창작물은 다른 이용자들과의 협업성과 저작권 보호를 위해 삭제되지 않습니다. 탈퇴 후에도 회원님의 창작물은 여전히 감성코어 플랫폼 내에 남아 있으며, 이를 원치 않으실 경우 탈퇴 전 직접 삭제하시길 권장드립니다.`,
  },
  {
    title: '계정 복구 불가',
    description: `탈퇴가 완료된 후에는 동일한 계정으로 복구가 불가능합니다. 
    이후 서비스를 다시 이용하고자 하실 경우 새 계정을 생성해야 합니다.
    회원 탈퇴를 진행하시려면 위 사항을 모두 숙지하고 동의해주셔야 합니다. 
    감성코어와 함께해주셔서 진심으로 감사드립니다. 언제든 다시 만나뵐 수 있기를 바랍니다.`,
  },
  {
    title: '기타 유의사항',
    description: `탈퇴 후에도 서비스 이용 시 발생했던 문제(예: 신고, 민원)에 대한 책임은 회원님의 계정 기준으로 처리될 수 있습니다. 다시 방문해 주셨을 때 더 나은 서비스로 보답하겠습니다. 
    감사합니다.
`,
  },
];

export default function LeavePage() {
  const [checked, setChecked] = useState(false);
  const { mutate: submitUserLeave, isPending } = useSubmitUserLeave();

  return (
    <>
      <div className="-mt-[20px] flex flex-col gap-[20px]">
        {data.map(item => (
          <div key={item.title} className="flex flex-col gap-2">
            <p className="text-h4 font-medium">{item.title}</p>
            <div className="text-b1 font-light text-gray-500">
              {item.description.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </div>
          </div>
        ))}
        <p className="text-m-600 -mt-[30px] mb-10">감성코어 운영팀 드림</p>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            className="mb-1"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <p className="text-b1 font-light text-gray-500">
            위 내용을 모두 확인하였으며, 회원 탈퇴를 진행합니다.
          </p>
        </div>
      </div>
      <button
        disabled={!checked || isPending}
        onClick={() => submitUserLeave()}
        className="text-h4 flex h-[64px] w-full cursor-pointer items-center justify-center rounded-[10px] bg-red-500 text-white outline-none disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-400"
      >
        탈퇴하기
      </button>
    </>
  );
}
