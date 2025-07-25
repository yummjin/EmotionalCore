import {
  KeywordSection,
  NewAuthorSection,
  NewWorkSection,
  SearchBar,
} from '@/widgets/search/ui';

export default function SearchPage() {
  return (
    <>
      <SearchBar />
      <KeywordSection />
      <NewWorkSection />
      <NewAuthorSection />
    </>
  );
}
