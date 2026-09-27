"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { COMMUNITY_MAP_CONFIG } from "@/config/amenitiesConfig";
import type { AmenityCategoryId } from "@/config/amenitiesConfig";

const AmenityMap = dynamic(() => import("./AmenityMap"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full rounded-lg border border-neutral-200 bg-neutral-100 animate-pulse"
      style={{ height: 420 }}
      aria-label="Loading amenity map"
    />
  ),
});

type AmenityMapSectionProps = {
  title?: string;
  description?: string;
  defaultCategory?: AmenityCategoryId;
  compact?: boolean;
  showViewAllLink?: boolean;
  className?: string;
};

export default function AmenityMapSection({
  title = `Life Near ${COMMUNITY_MAP_CONFIG.name}`,
  description = `Explore dining, golf, parks, healthcare, and everyday essentials around Henderson's guard-gated MacDonald Highlands community.`,
  defaultCategory = "golf",
  compact = false,
  showViewAllLink = true,
  className = "section-padding bg-neutral-50",
}: AmenityMapSectionProps) {
  return (
    <section className={className} aria-labelledby="amenity-map-section-title">
      <div className="container-luxury">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2
              id="amenity-map-section-title"
              className="text-3xl md:text-4xl font-serif font-bold mb-4 text-neutral-900"
            >
              {title}
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              {description}
            </p>
            {showViewAllLink && (
              <p className="mt-4">
                <Link
                  href="/amenities"
                  className="text-primary-600 font-semibold hover:underline"
                >
                  View full nearby amenities guide →
                </Link>
              </p>
            )}
          </div>
          <AmenityMap defaultCategory={defaultCategory} compact={compact} />
        </div>
      </div>
    </section>
  );
}
