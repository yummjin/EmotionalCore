import {
  BestSection,
  CategorySection,
  RecommendSection,
  SwiperSection,
  WebtoonSection,
} from '@/widgets/home/ui';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20">
      <BestSection />
      <RecommendSection type="novel" />
      <RecommendSection type="poem" />
      <WebtoonSection />
      <SwiperSection label="이달의 인기 작품" />
      <SwiperSection label="이달의 우수 작가" />
      <CategorySection />
    </div>
  );
}
