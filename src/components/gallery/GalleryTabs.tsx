"use client";

import Image from "next/image";
import { useState } from "react";
import { GALLERY_CATEGORIES } from "@/components/gallery/galleryData";

export default function GalleryTabs() {
  const [activeId, setActiveId] = useState(GALLERY_CATEGORIES[0].id);
  const activeCategory = GALLERY_CATEGORIES.find((category) => category.id === activeId) ?? GALLERY_CATEGORIES[0];

  return (
    <div>
      <div
        className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-none"
        role="tablist"
        aria-label="Gallery categories"
      >
        {GALLERY_CATEGORIES.map((category) => {
          const isActive = category.id === activeId;
          return (
            <button
              key={category.id}
              className={`shrink-0 whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-semibold border transition-colors ${
                isActive
                  ? "bg-brand-maroon border-brand-maroon text-white"
                  : "bg-white border-gray-200 text-gray-700 hover:border-brand-maroon hover:text-brand-maroon"
              }`}
              onClick={() => setActiveId(category.id)}
              role="tab"
              aria-selected={isActive}
              type="button"
            >
              {category.label}
              <span className={`ml-1.5 text-xs ${isActive ? "text-white/80" : "text-gray-400"}`}>
                ({category.images.length})
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8" role="tabpanel">
        {activeCategory.images.map((image) => (
          <div
            key={image.src}
            className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 shadow-sm group"
          >
            <Image
              alt={image.alt}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              src={image.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
