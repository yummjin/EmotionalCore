import { fetchNewAuthor } from '../api';
import NewAuthorItem from './NewAuthorItem';

export default async function NewAuthorSection() {
  const newAuthors = await fetchNewAuthor();

  return (
    <section className="md:max-w-medium lg:max-w-large flex w-full flex-col gap-[20px] lg:gap-[30px]">
      <div className="flex justify-between">
        <span className="text-h4 md:text-h1 font-medium">신규 작가</span>
        <button className="text-b2 cursor-pointer text-gray-500 outline-none">
          더보기
        </button>
      </div>
      {newAuthors && (
        <div className="scrollbar-hide flex flex-nowrap gap-4 overflow-x-auto">
          {newAuthors.slice(0, 6).map(author => (
            <NewAuthorItem key={author.id} {...author} />
          ))}
        </div>
      )}
    </section>
  );
}
