'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
}

export default function ImageItem({
  src,
  alt,
  width,
  height,
  className,
  fill,
}: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src || '/images/image-cover.png');
  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={className}
      onError={() => {
        setImgSrc('/images/image-cover.png');
      }}
    />
  );
}
