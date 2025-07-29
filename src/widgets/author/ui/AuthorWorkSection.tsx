import React from 'react';

export default function AuthorWorkSection() {
  return (
    <section className="flex w-full flex-col gap-4">
      <h2 className="text-h4 md:text-h3 text-center font-medium md:text-left">
        연재중인 작품 n개
      </h2>
      <div className="grid grid-cols-2 gap-4 md:flex md:flex-col md:divide-y md:divide-gray-300">
        {/* {works.map(work => (
          <WorkItem key={work.id} {...work} />
        ))} */}
      </div>
    </section>
  );
}
