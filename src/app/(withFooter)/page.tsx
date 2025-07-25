import {
  fetchBestAuthor,
  fetchBestWork,
  fetchPopularWork,
  fetchRecommend,
} from '@/widgets/home/api';
import {
  BestSection,
  CategorySection,
  RecommendSection,
  SwiperSection,
  WebtoonSection,
} from '@/widgets/home/ui';

export default async function HomePage() {
  const bestWork = await fetchBestWork();
  const novel = await fetchRecommend('novel');
  const poem = await fetchRecommend('poem');
  const bestAuthor = await fetchBestAuthor();
  const popularWork = await fetchPopularWork();

  return (
    <div className="flex flex-col gap-8 md:gap-20">
      <BestSection data={bestWork} />
      <RecommendSection type="novel" data={novel} />
      <RecommendSection type="poem" data={poem} />
      <WebtoonSection />
      <SwiperSection label="이달의 인기 작품" data={popularWork} />
      <SwiperSection label="이달의 우수 작가" data={bestAuthor} />
      <CategorySection />
    </div>
  );
}
