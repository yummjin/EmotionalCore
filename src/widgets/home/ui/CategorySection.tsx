import { CATEGORY } from '../model';

export default function CategorySection() {
  return (
    <div className="px-normal mb-[130px] flex w-screen flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center">
        <p className="text-h1 font-medium">
          아직 관심 작품을 발견하지 못하셨나요?
        </p>
        <p className="text-h4 mt-2 font-medium text-gray-600">
          아래 카테고리들을 탐색해보세요.
        </p>
      </div>
      <div className="flex w-full max-w-[1078px] flex-wrap justify-center gap-4">
        {CATEGORY.map(category => (
          <CategoryItem key={category} category={category} />
        ))}
      </div>
    </div>
  );
}

const CategoryItem = ({ category }: { category: string }) => {
  return (
    <button className="text-b2 cursor-pointer rounded-[10px] border-[1px] border-gray-400 px-5 py-5.5 font-medium outline-none">
      {category}
    </button>
  );
};
