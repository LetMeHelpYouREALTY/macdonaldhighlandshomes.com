"use client";

import dynamic from "next/dynamic";

// Lazy load RealScout widget to improve initial page load (below the fold)
// This must be a client component to use ssr: false
const RealScoutWidget = dynamic(
  () => import("@/components/listings/RealScoutWidget"),
  {
    ssr: false, // RealScout widget is client-side only
    loading: () => (
      <div className="bg-neutral-50 rounded-lg p-8 animate-pulse">
        <div className="h-8 bg-neutral-200 rounded w-1/3 mb-4"></div>
        <div className="h-64 bg-neutral-200 rounded"></div>
      </div>
    ),
  }
);

export default function RealScoutWidgetWrapper() {
  return <RealScoutWidget />;
}
