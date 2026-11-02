/**
 * MacDonald Highlands amenity map configuration.
 * Community center: Wikipedia coordinates for MacDonald Highlands, Henderson, NV
 * (36°00′38″N 115°02′44″W). DragonRidge / community address: 552 S Stephanie St, Henderson, NV 89012.
 */
export const COMMUNITY_MAP_CONFIG = {
  name: "MacDonald Highlands",
  city: "Henderson",
  state: "NV",
  postalCode: "89012",
  center: {
    lat: 36.010531,
    lng: -115.045603,
  },
  defaultZoom: 13,
  searchRadiusMeters: 8000,
  /** Official community / DragonRidge clubhouse address */
  address: "552 S Stephanie St, Henderson, NV 89012",
};

export type AmenityCategoryId =
  | "golf"
  | "restaurants"
  | "parks"
  | "grocery"
  | "healthcare"
  | "fitness"
  | "shopping"
  | "cafes"
  | "pharmacies"
  | "parking"
  | "schools";

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  /** Google Places (New) primary types for searchNearby */
  includedPrimaryTypes: string[];
  ariaLabel: string;
};

/** Luxury golf community: lead with golf, dining, recreation, essentials */
export const AMENITY_CATEGORIES: AmenityCategory[] = [
  {
    id: "golf",
    label: "Golf",
    includedPrimaryTypes: ["golf_course"],
    ariaLabel: "Show golf courses near MacDonald Highlands",
  },
  {
    id: "restaurants",
    label: "Restaurants",
    includedPrimaryTypes: ["restaurant"],
    ariaLabel: "Show restaurants near MacDonald Highlands",
  },
  {
    id: "parks",
    label: "Parks",
    includedPrimaryTypes: ["park"],
    ariaLabel: "Show parks near MacDonald Highlands",
  },
  {
    id: "grocery",
    label: "Grocery",
    includedPrimaryTypes: ["grocery_store", "supermarket"],
    ariaLabel: "Show grocery stores near MacDonald Highlands",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    includedPrimaryTypes: ["hospital", "doctor"],
    ariaLabel: "Show hospitals and doctors near MacDonald Highlands",
  },
  {
    id: "fitness",
    label: "Fitness",
    includedPrimaryTypes: ["gym", "fitness_center"],
    ariaLabel: "Show fitness centers near MacDonald Highlands",
  },
  {
    id: "shopping",
    label: "Shopping",
    includedPrimaryTypes: ["shopping_mall"],
    ariaLabel: "Show shopping near MacDonald Highlands",
  },
  {
    id: "cafes",
    label: "Cafes",
    includedPrimaryTypes: ["cafe", "coffee_shop"],
    ariaLabel: "Show cafes near MacDonald Highlands",
  },
  {
    id: "pharmacies",
    label: "Pharmacies",
    includedPrimaryTypes: ["pharmacy"],
    ariaLabel: "Show pharmacies near MacDonald Highlands",
  },
  {
    id: "parking",
    label: "Parking",
    includedPrimaryTypes: ["parking"],
    ariaLabel: "Show parking near MacDonald Highlands",
  },
  {
    id: "schools",
    label: "Schools",
    includedPrimaryTypes: ["school", "primary_school", "secondary_school"],
    ariaLabel: "Show schools near MacDonald Highlands",
  },
];

export type CuratedPlace = {
  name: string;
  address: string;
  schemaType:
    | "Restaurant"
    | "Park"
    | "GolfCourse"
    | "Hospital"
    | "Pharmacy"
    | "Store"
    | "School"
    | "ShoppingCenter";
  category: AmenityCategoryId;
  note?: string;
};

/** Verified places for fallback list, page copy, and ItemList schema */
export const CURATED_NEARBY_PLACES: CuratedPlace[] = [
  {
    name: "DragonRidge Country Club",
    address: "552 S Stephanie St, Henderson, NV 89012",
    schemaType: "GolfCourse",
    category: "golf",
    note: "Championship course within MacDonald Highlands",
  },
  {
    name: "Cornerstone Park",
    address: "1590 W Horizon Ridge Pkwy, Henderson, NV 89012",
    schemaType: "Park",
    category: "parks",
  },
  {
    name: "St. Rose Dominican Hospital, Siena Campus",
    address: "3001 St Rose Pkwy, Henderson, NV 89052",
    schemaType: "Hospital",
    category: "healthcare",
  },
  {
    name: "Henderson Hospital",
    address: "1050 W Galleria Dr, Henderson, NV 89011",
    schemaType: "Hospital",
    category: "healthcare",
  },
  {
    name: "The Galleria at Sunset",
    address: "1300 W Sunset Rd, Henderson, NV 89014",
    schemaType: "ShoppingCenter",
    category: "shopping",
  },
  {
    name: "Whole Foods Market",
    address: "7250 S Rainbow Blvd, Las Vegas, NV 89139",
    schemaType: "Store",
    category: "grocery",
    note: "Full-service natural grocery (Green Valley / Rainbow corridor)",
  },
  {
    name: "Smith's Food and Drug",
    address: "475 W Horizon Ridge Pkwy, Henderson, NV 89012",
    schemaType: "Store",
    category: "grocery",
  },
  {
    name: "Green Valley Ranch Resort",
    address: "2300 Paseo Verde Pkwy, Henderson, NV 89052",
    schemaType: "Restaurant",
    category: "restaurants",
    note: "Dining and entertainment near the community",
  },
  {
    name: "DragonRidge Tennis & Athletic Center",
    address: "1400 Foothills Village Dr, Henderson, NV 89012",
    schemaType: "Store",
    category: "fitness",
  },
  {
    name: "Green Valley High School",
    address: "460 Arroyo Grande Blvd, Henderson, NV 89014",
    schemaType: "School",
    category: "schools",
  },
];

export const AMENITIES_FAQ = [
  {
    question: "What grocery stores are near MacDonald Highlands?",
    answer:
      "Smith's Food and Drug on W Horizon Ridge Parkway is one of the closest full grocery options to MacDonald Highlands. Whole Foods Market on S Rainbow Blvd and additional supermarkets along the St Rose Parkway and Green Valley corridors are also convenient from the community.",
  },
  {
    question: "How far is MacDonald Highlands from the Las Vegas Strip?",
    answer:
      "MacDonald Highlands is approximately 15–20 minutes by car from the Las Vegas Strip, depending on traffic and your gate exit, via I-215 and surface streets.",
  },
  {
    question: "Are there hospitals near MacDonald Highlands?",
    answer:
      "Yes. St. Rose Dominican Hospital, Siena Campus on St Rose Parkway and Henderson Hospital on W Galleria Drive serve the greater Henderson and Green Valley area near MacDonald Highlands.",
  },
  {
    question: "Where do residents golf in MacDonald Highlands?",
    answer:
      "DragonRidge Country Club is inside the guard gates of MacDonald Highlands at 552 S Stephanie Street. Membership and guest policies are managed by the club.",
  },
  {
    question: "What shopping is close to MacDonald Highlands?",
    answer:
      "The Galleria at Sunset on W Sunset Road and the District at Green Valley Ranch offer major retail, dining, and services a short drive from MacDonald Highlands.",
  },
  {
    question: "How far is Harry Reid International Airport from MacDonald Highlands?",
    answer:
      "Harry Reid International Airport is roughly 20–25 minutes from MacDonald Highlands by car in typical traffic, often via I-215 and the airport connectors.",
  },
  {
    question: "Are there parks and trails near MacDonald Highlands?",
    answer:
      "Cornerstone Park on Horizon Ridge Parkway offers sports fields, paths, and open space nearby. Lake Mead National Recreation Area and trail systems in the McCullough Range foothills are also within a reasonable drive.",
  },
  {
    question: "Who can help me buy or sell in MacDonald Highlands?",
    answer:
      "Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, specializes in MacDonald Highlands luxury real estate and can guide guard-gated access, DragonRidge considerations, and off-market opportunities.",
  },
];
