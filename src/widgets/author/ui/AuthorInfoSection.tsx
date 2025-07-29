import type { User } from '@/shared/types';
import { ImageItem, TagItem } from '@/shared/ui';
import React from 'react';

export default function AuthorInfoSection({ data }: { data: User }) {
  const { profileImageUrl, username, description, links, tags } = data;
  return (
    <section className="flex w-full flex-col gap-4 md:flex-row md:gap-8">
      <div className="flex justify-center md:justify-start">
        <div className="relative h-[120px] w-[120px] flex-shrink-0 md:h-[300px] md:w-[300px]">
          <ImageItem
            src={profileImageUrl}
            alt={username}
            fill
            className="rounded-full object-cover md:rounded-[10px]"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 md:gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-h3 md:text-h2 text-center font-bold text-blue-600 md:text-left">
            {username}
          </h1>
          {/* <div className="md:text-h4 flex justify-center gap-4 text-sm md:justify-start md:gap-6">
            <p>
              <span className="text-gray-700">작품</span>{' '}
              <span className="text-gray-500">{works}</span>
            </p>
            <p>
              <span className="text-gray-700">조회</span>{' '}
              <span className="text-gray-500">
                {authorData.stats.views.toLocaleString()}
              </span>
            </p>
            <p>
              <span className="text-gray-700">좋아요</span>{' '}
              <span className="text-gray-500">
                {authorData.stats.likes.toLocaleString()}
              </span>
            </p>
            <p>
              <span className="text-gray-700">북마크</span>{' '}
              <span className="text-gray-500">
                {authorData.stats.bookmarks.toLocaleString()}
              </span>
            </p>
          </div> */}
        </div>

        <div className="flex flex-col gap-2">
          <p className="md:text-h4 text-center text-sm leading-relaxed md:text-left">
            {description}
          </p>
          {links && (
            <a
              href={links}
              target="_blank"
              rel="noopener noreferrer"
              className="md:text-h4 text-center text-sm text-gray-500 hover:underline md:text-left"
            >
              {links}
            </a>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="md:text-h4 text-center text-sm font-medium md:text-left">
            해시태그
          </h3>
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {tags.map(tag => (
              <TagItem key={tag} tag={tag} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
