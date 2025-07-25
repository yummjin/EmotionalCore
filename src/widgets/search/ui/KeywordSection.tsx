import { fetchKeywords } from '../api';
import KeywordItem from './KeywordItem';

export default async function KeywordSection() {
  const keywords = await fetchKeywords();

  return (
    <section className="md:max-w-medium lg:max-w-large flex w-full flex-col gap-[20px] lg:gap-[30px]">
      <p className="text-h4 md:text-h1 font-medium">인기 검색어</p>
      {keywords && (
        <div className="scrollbar-hide flex flex-wrap gap-4 overflow-x-auto">
          {keywords.map(keyword => (
            <KeywordItem key={keyword.searchId} keyword={keyword.searchWord} />
          ))}
        </div>
      )}
    </section>
  );
}
