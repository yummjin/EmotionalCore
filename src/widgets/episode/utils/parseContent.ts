import type { ParsedContent } from '../types';

export const parseContent = (content: string): ParsedContent[] => {
  const regex = /\[\*IMG&\]\((.*?)\)/g;
  const result: ParsedContent[] = [];

  let lastIndex = 0;
  let match;

  while ((match = regex.exec(content)) !== null) {
    const matchStart = match.index;
    const matchEnd = regex.lastIndex;

    if (matchStart > lastIndex) {
      result.push({
        type: 'text',
        content: content.slice(lastIndex, matchStart),
      });
    }

    result.push({
      type: 'image',
      url: match[1],
    });

    lastIndex = matchEnd;
  }

  if (lastIndex < content.length) {
    result.push({
      type: 'text',
      content: content.slice(lastIndex),
    });
  }

  return result;
};
