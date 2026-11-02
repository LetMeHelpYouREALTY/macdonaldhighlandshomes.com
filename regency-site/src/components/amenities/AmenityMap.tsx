"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  AMENITY_CATEGORIES,
  COMMUNITY_MAP_CONFIG,
  type AmenityCategoryId,
} from "@/config/amenitiesConfig";
import AmenityMapFallback from "./AmenityMapFallback";

const MAP_MIN_HEIGHT = 420;

type MapPlace = {
  id: string;
  name: string;
  address: string;
  rating?: number;
  lat: number;
  lng: number;
};

type AmenityMapProps = {
  defaultCategory?: AmenityCategoryId;
  /** Smaller filter UI on embedded sections */
  compact?: boolean;
};

function loadGoogleMapsScript(apiKey: string): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("No window"));
  }
  if (window.google?.maps) {
    return Promise.resolve();
  }
  const existing = document.querySelector(
    'script[data-amenity-map="google-maps"]'
  );
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("Script failed")));
    });
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&loading=async`;
    script.async = true;
    script.defer = true;
    script.dataset.amenityMap = "google-maps";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Google Maps failed to load"));
    document.head.appendChild(script);
  });
}

export default function AmenityMap({
  defaultCategory = "golf",
  compact = false,
}: AmenityMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;

  const [activeCategory, setActiveCategory] =
    useState<AmenityCategoryId>(defaultCategory);
  const [isInView, setIsInView] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [useFallback, setUseFallback] = useState(!apiKey);
  const [loadingPlaces, setLoadingPlaces] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const mapDivRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const communityMarkerRef = useRef<google.maps.Marker | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px", threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
  }, []);

  const showCommunityMarker = useCallback((map: google.maps.Map) => {
    if (communityMarkerRef.current) {
      communityMarkerRef.current.setMap(null);
    }
    const { lat, lng, name, address } = {
      lat: COMMUNITY_MAP_CONFIG.center.lat,
      lng: COMMUNITY_MAP_CONFIG.center.lng,
      name: COMMUNITY_MAP_CONFIG.name,
      address: COMMUNITY_MAP_CONFIG.address,
    };
    const marker = new google.maps.Marker({
      map,
      position: { lat, lng },
      title: name,
      zIndex: 1000,
    });
    communityMarkerRef.current = marker;
    if (!infoWindowRef.current) {
      infoWindowRef.current = new google.maps.InfoWindow();
    }
    const iw = infoWindowRef.current;
    marker.addListener("click", () => {
      iw.setContent(
        `<div style="max-width:240px"><strong>${name}</strong><br/>${address}<br/><a href="https://www.google.com/maps/search/?api=1&query=${lat},${lng}" target="_blank" rel="noopener">Directions</a></div>`
      );
      iw.open(map, marker);
    });
  }, []);

  const renderPlaces = useCallback(
    (map: google.maps.Map, places: MapPlace[]) => {
      clearMarkers();
      const bounds = new google.maps.LatLngBounds();
      bounds.extend(COMMUNITY_MAP_CONFIG.center);

      places.forEach((place) => {
        const marker = new google.maps.Marker({
          map,
          position: { lat: place.lat, lng: place.lng },
          title: place.name,
        });
        marker.addListener("click", () => {
          if (!infoWindowRef.current) {
            infoWindowRef.current = new google.maps.InfoWindow();
          }
          const ratingText =
            place.rating != null ? `<br/>Rating: ${place.rating}` : "";
          infoWindowRef.current.setContent(
            `<div style="max-width:260px"><strong>${place.name}</strong>${ratingText}<br/>${place.address}<br/><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${place.name}, ${place.address}`
            )}" target="_blank" rel="noopener">Directions</a></div>`
          );
          infoWindowRef.current.open(map, marker);
        });
        markersRef.current.push(marker);
        bounds.extend({ lat: place.lat, lng: place.lng });
      });

      showCommunityMarker(map);
      if (places.length > 0) {
        map.fitBounds(bounds);
      } else {
        map.setCenter(COMMUNITY_MAP_CONFIG.center);
      }
    },
    [clearMarkers, showCommunityMarker]
  );

  const fetchPlaces = useCallback(
    async (map: google.maps.Map, categoryId: AmenityCategoryId) => {
      const category = AMENITY_CATEGORIES.find((c) => c.id === categoryId);
      if (!category) return;

      setLoadingPlaces(true);
      try {
        const placesLib = (await google.maps.importLibrary(
          "places"
        )) as { Place: typeof google.maps.places.Place };
        const { Place } = placesLib;
        const { places } = await Place.searchNearby({
          fields: [
            "displayName",
            "location",
            "formattedAddress",
            "rating",
            "id",
          ],
          locationRestriction: {
            center: COMMUNITY_MAP_CONFIG.center,
            radius: COMMUNITY_MAP_CONFIG.searchRadiusMeters,
          },
          includedPrimaryTypes: category.includedPrimaryTypes,
          maxResultCount: 15,
        });

        const mapped: MapPlace[] = (places ?? [])
          .map((p, index) => {
            const loc = p.location;
            if (!loc) return null;
            const lat =
              typeof loc.lat === "function" ? loc.lat() : (loc as { lat: number }).lat;
            const lng =
              typeof loc.lng === "function" ? loc.lng() : (loc as { lng: number }).lng;
            return {
              id: p.id ?? `place-${index}`,
              name: p.displayName ?? "Place",
              address: p.formattedAddress ?? "",
              rating: p.rating,
              lat,
              lng,
            };
          })
          .filter((p): p is MapPlace => p !== null);

        renderPlaces(map, mapped);
      } catch {
        setUseFallback(true);
      } finally {
        setLoadingPlaces(false);
      }
    },
    [renderPlaces]
  );

  useEffect(() => {
    if (!isInView || !apiKey || useFallback) return;

    let cancelled = false;

    (async () => {
      try {
        await loadGoogleMapsScript(apiKey);
        if (cancelled || !mapDivRef.current) return;

        if (!mapRef.current) {
          mapRef.current = new google.maps.Map(mapDivRef.current, {
            center: COMMUNITY_MAP_CONFIG.center,
            zoom: COMMUNITY_MAP_CONFIG.defaultZoom,
            mapId: mapId || undefined,
            disableDefaultUI: false,
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: true,
          });
          setMapReady(true);
        }

        const map = mapRef.current;
        if (map) {
          await fetchPlaces(map, activeCategory);
        }
      } catch {
        if (!cancelled) setUseFallback(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [isInView, apiKey, useFallback, mapId, activeCategory, fetchPlaces]);

  const handleCategoryChange = (id: AmenityCategoryId) => {
    setActiveCategory(id);
    if (useFallback || !mapRef.current || !mapReady) return;
    fetchPlaces(mapRef.current, id);
  };

  return (
    <div ref={containerRef} className="w-full">
      <div
        role="tablist"
        aria-label="Amenity categories near MacDonald Highlands"
        className={`flex flex-wrap gap-2 mb-4 ${compact ? "text-sm" : ""}`}
      >
        {AMENITY_CATEGORIES.map((cat) => {
          const selected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-label={cat.ariaLabel}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-3 py-2 rounded-full border font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 ${
                selected
                  ? "bg-primary-900 text-white border-primary-900"
                  : "bg-white text-neutral-700 border-neutral-300 hover:border-primary-400"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {loadingPlaces && !useFallback && (
        <p className="text-sm text-neutral-600 mb-2" aria-live="polite">
          Loading places…
        </p>
      )}

      {useFallback ? (
        <AmenityMapFallback activeCategory={activeCategory} />
      ) : !isInView ? (
        <div
          className="w-full rounded-lg border border-neutral-200 bg-neutral-100 flex items-center justify-center text-neutral-600"
          style={{ minHeight: MAP_MIN_HEIGHT, height: MAP_MIN_HEIGHT }}
          aria-label="Map placeholder; loads when scrolled into view"
        >
          Map loads as you scroll…
        </div>
      ) : (
        <div
          ref={mapDivRef}
          className="w-full rounded-lg overflow-hidden border border-neutral-200 shadow-sm bg-neutral-100"
          style={{ minHeight: MAP_MIN_HEIGHT, height: MAP_MIN_HEIGHT }}
          aria-label="Interactive map of nearby amenities"
          role="application"
        />
      )}
    </div>
  );
}
