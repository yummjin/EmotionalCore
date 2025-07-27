import React from 'react';
import { parseContent } from '../utils';
import Image from 'next/image';

interface EpisodeContentProps {
  contents: string;
}

export default function EpisodeContent({ contents }: EpisodeContentProps) {
  const parsed = parseContent(contents);

  return (
    <div className="h-full w-full">
      {parsed.map((item, index) => {
        if (item.type === 'text') {
          return (
            <p key={index} className="">
              {item.content}
            </p>
          );
        } else if (item.type === 'image') {
          return (
            <div className="relative h-[400px] w-full" key={index}>
              <Image
                src={item.url}
                alt={`Embedded ${index}`}
                className="object-cover object-center"
                fill
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
