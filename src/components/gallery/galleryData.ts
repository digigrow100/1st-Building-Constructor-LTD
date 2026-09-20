export type GalleryImage = {
  src: string;
  alt: string;
};

export type GalleryCategory = {
  id: string;
  label: string;
  images: GalleryImage[];
};

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    id: "extensions",
    label: "Extensions",
    images: [
      { src: "/images/blockwork-side-extension.webp", alt: "Blockwork side return extension under construction" },
      { src: "/images/brick-house-extension-construction.webp", alt: "Brick house extension under construction" },
      {
        src: "/images/completed-driveway-and-house-extension.webp",
        alt: "Completed house extension with new driveway",
      },
      {
        src: "/images/completed-rear-house-extension-garden.webp",
        alt: "Completed rear house extension overlooking the garden",
      },
      {
        src: "/images/concrete-block-extension-construction.webp",
        alt: "Concrete block extension walls under construction",
      },
      { src: "/images/extension-floor-deck-construction.webp", alt: "Extension floor deck under construction" },
      {
        src: "/images/house-extension-artificial-grass-garden.webp",
        alt: "House extension with new artificial grass garden",
      },
      { src: "/images/rear-house-extension-construction.webp", alt: "Rear house extension mid-construction" },
      { src: "/images/rear-house-extension-exterior.webp", alt: "Rear house extension exterior finish" },
      { src: "/images/steel-frame-house-extension.webp", alt: "Steel frame house extension structure" },
      { src: "/images/two-storey-house-extension-exterior.webp", alt: "Two-storey house extension exterior" },
      { src: "/images/timber-roof-extension-interior.webp", alt: "Timber roof extension interior view" },
      {
        src: "/images/plasterboarded-house-extension-interior.webp",
        alt: "Plasterboarded house extension interior",
      },
      { src: "/images/freshly-plastered-extension-room.webp", alt: "Freshly plastered extension room" },
    ],
  },
  {
    id: "loft-roof",
    label: "Loft & Roof",
    images: [
      { src: "/images/completed-dormer-exterior-cladding.webp", alt: "Completed dormer with exterior cladding" },
      { src: "/images/dormer-exterior-cladding-installation.webp", alt: "Dormer exterior cladding installation" },
      { src: "/images/dormer-roof-membrane-installation.webp", alt: "Dormer roof membrane installation" },
      { src: "/images/dormer-roof-timber-frame.webp", alt: "Dormer roof timber frame construction" },
      {
        src: "/images/pitched-roof-timber-rafter-installation.webp",
        alt: "Pitched roof timber rafter installation",
      },
      { src: "/images/timber-roof-structure-construction.webp", alt: "Timber roof structure under construction" },
    ],
  },
  {
    id: "structural",
    label: "Structural",
    images: [
      { src: "/images/steel-beam-delivery-for-extension.webp", alt: "Steel RSJ beam delivery for extension" },
      { src: "/images/timber-floor-joist-installation.webp", alt: "Timber floor joist installation" },
      { src: "/images/osb-subfloor-installation.webp", alt: "OSB subfloor installation" },
    ],
  },
  {
    id: "groundworks-drainage",
    label: "Groundworks & Drainage",
    images: [
      { src: "/images/brick-drainage-inspection-chamber.webp", alt: "Brick drainage inspection chamber" },
      { src: "/images/brick-manhole-chamber-installation.webp", alt: "Brick manhole chamber installation" },
      { src: "/images/compacted-driveway-sub-base.webp", alt: "Compacted driveway sub-base preparation" },
      {
        src: "/images/concrete-drainage-chamber-construction.webp",
        alt: "Concrete drainage chamber construction",
      },
      { src: "/images/drainage-chamber-ground-installation.webp", alt: "Drainage chamber ground installation" },
      {
        src: "/images/drainage-inspection-chamber-installation.webp",
        alt: "Drainage inspection chamber installation",
      },
      { src: "/images/drainage-inspection-chamber-interior.webp", alt: "Drainage inspection chamber interior" },
      { src: "/images/drainage-pipe-connection-trench.webp", alt: "Drainage pipe connection in trench" },
      { src: "/images/drainage-pipe-materials-on-site.webp", alt: "Drainage pipe materials on site" },
      { src: "/images/drainage-pipe-trench.webp", alt: "Drainage pipe trench excavation" },
      { src: "/images/ground-compaction-road-roller.webp", alt: "Ground compaction with road roller" },
      { src: "/images/ground-soakaway-system-installation.webp", alt: "Ground soakaway system installation" },
      { src: "/images/multiple-utility-ducts-in-trench.webp", alt: "Multiple utility ducts laid in trench" },
      { src: "/images/soakaway-access-chamber-installation.webp", alt: "Soakaway access chamber installation" },
      { src: "/images/soakaway-crate-installation.webp", alt: "Soakaway crate installation" },
      { src: "/images/twinwall-drainage-pipes-installation.webp", alt: "Twinwall drainage pipes installation" },
      { src: "/images/underground-drainage-connection.webp", alt: "Underground drainage connection" },
      { src: "/images/underground-drainage-pipe-installation.webp", alt: "Underground drainage pipe installation" },
      { src: "/images/underground-service-ducting-layout.webp", alt: "Underground service ducting layout" },
      { src: "/images/underground-service-pipes-in-trench.webp", alt: "Underground service pipes in trench" },
      {
        src: "/images/underground-utility-conduit-installation.webp",
        alt: "Underground utility conduit installation",
      },
      { src: "/images/utility-ducting-groundwork.webp", alt: "Utility ducting groundwork" },
      { src: "/images/utility-pipe-pressure-testing.webp", alt: "Utility pipe pressure testing" },
    ],
  },
  {
    id: "interior-renovation",
    label: "Interior & Renovation",
    images: [
      { src: "/images/freshly-plastered-room-interior.webp", alt: "Freshly plastered room interior" },
      { src: "/images/grey-handleless-kitchen-renovation.webp", alt: "Grey handleless kitchen renovation" },
      { src: "/images/insulated-wall-interior-renovation.webp", alt: "Insulated wall interior renovation" },
      { src: "/images/interior-plastering-work-in-progress.webp", alt: "Interior plastering work in progress" },
      {
        src: "/images/kitchen-island-and-cabinets-installation.webp",
        alt: "Kitchen island and cabinets installation",
      },
      { src: "/images/modern-grey-kitchen-installation.webp", alt: "Modern grey kitchen installation" },
      { src: "/images/plasterboard-room-renovation.webp", alt: "Plasterboard room renovation" },
      { src: "/images/plasterboard-wall-installation.webp", alt: "Plasterboard wall installation" },
      { src: "/images/floor-insulation-board-installation.webp", alt: "Floor insulation board installation" },
      { src: "/images/insulated-floor-preparation.webp", alt: "Insulated floor preparation" },
      { src: "/images/external-wall-insulation-installation.webp", alt: "External wall insulation installation" },
      { src: "/images/underfloor-heating-pipe-installation.webp", alt: "Underfloor heating pipe installation" },
    ],
  },
];
