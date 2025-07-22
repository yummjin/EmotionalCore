import { cn } from '@/shared/utils';

interface SelectorHeaderProps<T> {
  buttons: string[];
  selectedType: T;
  setSelectedType: (type: T) => void;
}

export default function SelectorHeader<T>({
  buttons,
  selectedType,
  setSelectedType,
}: SelectorHeaderProps<T>) {
  return (
    <header className="flex w-[100%] justify-between gap-10 md:w-[60%] md:justify-start lg:w-[40%]">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={cn(
            'text-b1 md:text-h1 flex-shrink-0 cursor-pointer py-1 font-medium text-nowrap outline-none',
            selectedType === button && 'border-m-500 border-b-4',
          )}
          onClick={() => setSelectedType(button as T)}
        >
          {button}
        </button>
      ))}
    </header>
  );
}
