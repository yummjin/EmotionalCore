import {
  KeywordSection,
  NewAuthorSection,
  NewWorkSection,
} from '@/widgets/search/ui';

export default function page() {
  return (
    <div className="px-normal flex w-screen justify-center py-[76px]">
      <div className="md:max-w-medium lg:max-w-large flex w-full flex-col gap-[76px]">
        <div className="w-full">
          <input
            className="w-full rounded-[10px] border-[1px] border-gray-900 p-5 outline-none"
            type="text"
            placeholder="검색어를 입력해주세요."
          />
        </div>
        <KeywordSection />
        <NewWorkSection />
        <NewAuthorSection />
      </div>
    </div>
  );
}
