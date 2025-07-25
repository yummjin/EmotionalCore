import Link from 'next/link';

export default function KeywordItem({ keyword }: { keyword: string }) {
  return (
    <Link
      href={`/search/result?query=${keyword}`}
      className="cursor-pointer rounded-[15px] border-[1px] border-gray-400 bg-gray-100 px-5 py-6 outline-none"
    >
      {keyword}
    </Link>
  );
}
