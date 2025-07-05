import { SelectorSection } from '@/widgets/board/ui';

export default function page() {
  return (
    <div className="px-normal flex w-screen justify-center py-[76px]">
      <div className="md:max-w-medium lg:max-w-large flex w-full flex-col">
        <SelectorSection />
      </div>
    </div>
  );
}
