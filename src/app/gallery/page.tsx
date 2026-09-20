import type { Metadata } from "next";
import Link from "next/link";
import GalleryTabs from "@/components/gallery/GalleryTabs";
import ContactCtaBanner from "@/components/shared/ContactCtaBanner";
import { GALLERY_CATEGORIES } from "@/components/gallery/galleryData";

export const metadata: Metadata = {
  title: "Project Gallery | 1st Building Contractors Ltd",
  description:
    "Browse our project gallery of extensions, loft conversions, structural works, groundworks and interior renovations across London and the Home Counties.",
};

const totalImages = GALLERY_CATEGORIES.reduce((count, category) => count + category.images.length, 0);

export default function GalleryPage() {
  return (
    <>
      <section className="relative w-full bg-[#14161B] text-white overflow-hidden py-14 sm:py-16 lg:py-20">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-wider text-gray-400 mb-4">
            <Link className="hover:text-white transition-colors" href="/">
              Home
            </Link>
            <span>/</span>
            <span className="text-brand-maroonLight font-bold">Project Gallery</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 text-brand-maroonLight px-3 py-1 rounded-full text-[11px] uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-brand-maroonLight" />
              {totalImages} Site Photos Across {GALLERY_CATEGORIES.length} Categories
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Our Project Gallery
            </h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
              Real progress photos from our live sites — extensions, loft and roof conversions, structural works,
              groundworks &amp; drainage, and interior renovations. Filter by category to see the standard of work
              we deliver on every project.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryTabs />
        </div>
      </section>

      <ContactCtaBanner />
    </>
  );
}
