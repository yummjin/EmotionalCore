export default function CategoryItem({ category }: { category: string }) {
  return (
    <button className="text-b2 cursor-pointer rounded-[10px] border-[1px] border-gray-400 px-5 py-5.5 font-medium outline-none">
      {category}
    </button>
  );
}
