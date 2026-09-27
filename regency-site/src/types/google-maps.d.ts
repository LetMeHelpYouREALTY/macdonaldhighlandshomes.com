/* Minimal Google Maps typings for amenity map (full types via @types/google.maps optional) */
declare namespace google.maps {
  class Map {
    constructor(el: HTMLElement, opts?: unknown);
    setCenter(latLng: LatLng | LatLngLiteral): void;
    fitBounds(bounds: LatLngBounds): void;
  }
  class Marker {
    constructor(opts?: unknown);
    setMap(map: Map | null): void;
    addListener(event: string, handler: () => void): void;
  }
  class InfoWindow {
    constructor(opts?: unknown);
    setContent(content: string): void;
    open(map?: Map, anchor?: Marker): void;
    close(): void;
  }
  class LatLngBounds {
    extend(point: LatLng | LatLngLiteral): void;
  }
  interface LatLngLiteral {
    lat: number;
    lng: number;
  }
  class LatLng {
    constructor(lat: number, lng: number);
  }
  namespace places {
    class Place {
      static searchNearby(request: unknown): Promise<{ places: Place[] }>;
      location?: LatLng;
      displayName?: string;
      formattedAddress?: string;
      rating?: number;
      id?: string;
    }
  }
  function importLibrary(name: string): Promise<unknown>;
}

interface Window {
  google?: typeof google;
}
