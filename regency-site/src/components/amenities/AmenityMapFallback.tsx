import {
  AMENITY_CATEGORIES,
  COMMUNITY_MAP_CONFIG,
  CURATED_NEARBY_PLACES,
  type AmenityCategoryId,
} from "@/config/amenitiesConfig";

type AmenityMapFallbackProps = {
  activeCategory: AmenityCategoryId;
  showCategoryList?: boolean;
};

export default function AmenityMapFallback({
  activeCategory,
  showCategoryList = true,
}: AmenityMapFallbackProps) {
  const { lat, lng } = COMMUNITY_MAP_CONFIG.center;
  const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`;

  const categoryMatches = CURATED_NEARBY_PLACES.filter(
    (p) => p.category === activeCategory
  );
  const displayPlaces =
    categoryMatches.length > 0
      ? categoryMatches
      : CURATED_NEARBY_PLACES.slice(0, 6);

  const categoryLabel =
    AMENITY_CATEGORIES.find((c) => c.id === activeCategory)?.label ??
    "Nearby";

  return (
    <div className="space-y-6">
      <div
        className="w-full rounded-lg overflow-hidden border border-neutral-200 shadow-sm bg-neutral-100"
        style={{ height: 420 }}
        aria-label={`Map showing ${COMMUNITY_MAP_CONFIG.name} in ${COMMUNITY_MAP_CONFIG.city}`}
      >
        <iframe
          title={`Map of ${COMMUNITY_MAP_CONFIG.name}, ${COMMUNITY_MAP_CONFIG.city}, Nevada`}
          src={embedSrc}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      {showCategoryList && (
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-3">
            Featured places — {categoryLabel}
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3" role="list">
            {displayPlaces.map((place) => (
              <li
                key={`${place.name}-${place.address}`}
                className="rounded-lg border border-neutral-200 p-4 bg-white"
              >
                <p className="font-medium text-neutral-900">{place.name}</p>
                <p className="text-sm text-neutral-600 mt-1">{place.address}</p>
                {place.note && (
                  <p className="text-sm text-neutral-500 mt-1">{place.note}</p>
                )}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${place.name}, ${place.address}`
                  )}`}
                  className="text-primary-600 text-sm font-semibold mt-2 inline-block hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Directions
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
