import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PREVIEW_IMAGES = [
  { src: "/images/two-storey-house-extension-exterior.webp", alt: "Two-storey house extension exterior", label: "Extensions" },
  { src: "/images/completed-rear-house-extension-garden.webp", alt: "Completed rear house extension overlooking the garden", label: "Extensions" },
  { src: "/images/completed-dormer-exterior-cladding.webp", alt: "Completed dormer with exterior cladding", label: "Loft & Roof" },
  { src: "/images/timber-roof-structure-construction.webp", alt: "Timber roof structure under construction", label: "Loft & Roof" },
  { src: "/images/steel-beam-delivery-for-extension.webp", alt: "Steel RSJ beam delivery for extension", label: "Structural" },
  { src: "/images/timber-floor-joist-installation.webp", alt: "Timber floor joist installation", label: "Structural" },
  { src: "/images/drainage-inspection-chamber-installation.webp", alt: "Drainage inspection chamber installation", label: "Groundworks" },
  { src: "/images/ground-soakaway-system-installation.webp", alt: "Ground soakaway system installation", label: "Groundworks" },
  { src: "/images/modern-grey-kitchen-installation.webp", alt: "Modern grey kitchen installation", label: "Interior" },
  { src: "/images/freshly-plastered-room-interior.webp", alt: "Freshly plastered room interior", label: "Interior" },
];

export default function GalleryPreview() {
  return (
    <section className="py-14 sm:py-16 bg-white" data-purpose="gallery-preview" id="gallery-preview">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-brand-maroon text-xs uppercase tracking-[0.22em] font-semibold block mb-1">
              PROJECT GALLERY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
              A Closer Look at Our Sites
            </h2>
          </div>
          <div>
            <Link
              className="inline-flex items-center gap-2 bg-brand-maroon hover:bg-brand-maroonDark text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded transition-all"
              href="/gallery"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-2.5 h-2.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {PREVIEW_IMAGES.map((image) => (
            <Link
              key={image.src}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 shadow-sm block"
              href="/gallery"
            >
              <Image
                alt={image.alt}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                src={image.src}
              />
              <span className="absolute bottom-0 left-0 right-0 px-2.5 py-1.5 text-[11px] font-semibold text-white bg-gradient-to-t from-black/70 to-transparent">
                {image.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
