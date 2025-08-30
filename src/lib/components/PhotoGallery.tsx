"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryImages } from "../constants";
import Spinner from "./Spinner";

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 6;

const PhotoGallery = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  const handleLoaded = (index: number) => {
    setLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const loadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + LOAD_MORE_COUNT, galleryImages.length)
    );
  };

  const visibleImages = galleryImages.slice(0, visibleCount);

  return (
    <>
      <div className="flex flex-wrap -m-2">
        {visibleImages.map((image, i) => (
          <div key={i} className="p-2 w-full sm:w-1/2 md:w-1/3 flex-shrink-0">
            <div className="relative w-full" style={{ paddingTop: "100%" }}>
              {/* Skeleton overlay shown until the image loads */}
              {!loaded[i] && (
                <div className="absolute inset-0 flex items-center justify-center bg-transparent rounded-md animate-pulse">
                  <Spinner />
                </div>
              )}

              <Image
                src={image}
                alt={`Project ${i + 1}`}
                fill
                className={`object-cover rounded-md shadow-sm ${
                  loaded[i] ? "" : "opacity-0"
                }`}
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                onLoad={() => handleLoaded(i)}
              />
            </div>
          </div>
        ))}
      </div>

      {visibleCount < galleryImages.length && (
        <p
          onClick={loadMore}
          className="underline font-body text-[.875rem] cursor-pointer text-center mt-8"
          role="button"
          tabIndex={0}
          onKeyDown={(e: React.KeyboardEvent<HTMLParagraphElement>) => {
            if (e.key === "Enter" || e.key === " ") loadMore();
          }}
        >
          Load More
        </p>
      )}
    </>
  );
};

export default PhotoGallery;
