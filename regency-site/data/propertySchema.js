// Complete Property Object Schema for MacDonald Highlands
// Ready for database integration and Next.js components

export const propertySchema = {
  // Example property object structure
  example: {
    id: "MH-001",
    address: {
      street: "1234 Mountain View Drive",
      city: "Henderson",
      state: "NV",
      zip: "89012",
      full: "1234 Mountain View Drive, Henderson, NV 89012"
    },
    community: "MacDonald Highlands",
    subCommunity: "SkyVu", // Options: "Vu", "SkyVu", "Vue Pointe", "Custom Estate", "Golf Course"
    price: 4850000,
    priceFormatted: "$4,850,000",
    bedrooms: 5,
    bathrooms: 5,
    halfBaths: 1,
    squareFeet: 6800,
    lotSize: "0.85 acres",
    lotSizeAcres: 0.85,
    yearBuilt: 2021,
    architect: "Custom Design",
    builder: "Christopher Homes",
    style: ["Contemporary", "Modern Estate"],
    propertyType: "Single Family",
    status: "For Sale", // Options: "For Sale", "Pending", "Sold", "Coming Soon"
    
    // Features
    features: [
      "Pool",
      "Spa",
      "Strip Views",
      "Golf Course Views",
      "Mountain Views",
      "Wine Cellar",
      "Home Theater",
      "Smart Home",
      "Guest House",
      "Outdoor Kitchen"
    ],
    
    // Images
    images: {
      primary: "/properties/mh-001/hero.jpg",
      gallery: [
        "/properties/mh-001/image1.jpg",
        "/properties/mh-001/image2.jpg",
        "/properties/mh-001/image3.jpg"
      ],
      floorPlan: "/properties/mh-001/floorplan.pdf",
      virtualTour: "https://example.com/virtual-tour"
    },
    
    // Descriptions
    description: {
      full: "Experience the pinnacle of luxury living in this stunning contemporary estate...",
      short: "Panoramic Strip views, contemporary design, 6,800 sq ft",
      highlights: [
        "Panoramic Strip and mountain views",
        "0.85-acre lot in SkyVu",
        "Contemporary architecture with modern finishes",
        "Private pool and spa",
        "Wine cellar and home theater"
      ]
    },
    
    // Views
    viewsOffered: ["Strip", "Golf Course", "Mountains", "Valley"],
    
    // Financial
    pricePerSqft: 713,
    hoaFee: 450,
    hoaFeeFrequency: "monthly",
    taxes: 18500,
    taxesAnnual: true,
    
    // Additional details
    garage: 3,
    stories: 2,
    cooling: "Central Air",
    heating: "Forced Air",
    roof: "Tile",
    exterior: "Stucco",
    
    // SEO & Marketing
    meta: {
      title: "SkyVu Panoramic Estate | MacDonald Highlands | $4,850,000",
      description: "Stunning contemporary estate with panoramic Strip views in MacDonald Highlands. 5 bed, 5 bath, 6,800 sq ft on 0.85 acres in SkyVu.",
      keywords: ["MacDonald Highlands", "SkyVu", "Strip views", "luxury home", "Henderson"]
    },
    
    // MLS
    mlsNumber: "12345678",
    listingDate: "2024-01-15",
    lastUpdated: "2024-12-20"
  },
  
  // Schema definition for validation
  schema: {
    required: ["id", "address", "community", "price", "bedrooms", "bathrooms", "squareFeet"],
    optional: [
      "subCommunity",
      "lotSize",
      "yearBuilt",
      "architect",
      "builder",
      "style",
      "features",
      "images",
      "description",
      "viewsOffered",
      "hoaFee",
      "meta"
    ]
  },
  
  // Property filters for search
  filters: {
    priceRanges: [
      { label: "Under $2M", min: 0, max: 2000000 },
      { label: "$2M - $3M", min: 2000000, max: 3000000 },
      { label: "$3M - $4M", min: 3000000, max: 4000000 },
      { label: "$4M - $5M", min: 4000000, max: 5000000 },
      { label: "$5M+", min: 5000000, max: null }
    ],
    bedrooms: [3, 4, 5, 6, 7],
    bathrooms: [3, 4, 5, 6, 7, 8],
    squareFeetRanges: [
      { label: "Under 4,000", min: 0, max: 4000 },
      { label: "4,000 - 5,000", min: 4000, max: 5000 },
      { label: "5,000 - 6,000", min: 5000, max: 6000 },
      { label: "6,000 - 7,000", min: 6000, max: 7000 },
      { label: "7,000+", min: 7000, max: null }
    ],
    lotSizes: [
      { label: "1/3 - 1/2 acre", min: 0.33, max: 0.5 },
      { label: "1/2 - 3/4 acre", min: 0.5, max: 0.75 },
      { label: "3/4 - 1 acre", min: 0.75, max: 1.0 },
      { label: "1+ acres", min: 1.0, max: null }
    ],
    views: ["Strip", "Golf Course", "Mountains", "Valley"],
    features: [
      "Pool",
      "Spa",
      "Strip Views",
      "Golf Course Views",
      "Mountain Views",
      "Wine Cellar",
      "Home Theater",
      "Smart Home",
      "Guest House",
      "Outdoor Kitchen",
      "Elevator",
      "Wine Room",
      "Gym",
      "Casita"
    ],
    subCommunities: ["Vu", "SkyVu", "Vue Pointe", "Custom Estate", "Golf Course"],
    styles: ["Contemporary", "Mediterranean", "Modern", "Traditional", "Custom"]
  }
};

// Helper functions for property data
export const propertyHelpers = {
  formatPrice: (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  },
  
  calculatePricePerSqft: (price, squareFeet) => {
    return Math.round(price / squareFeet);
  },
  
  getPriceRange: (price) => {
    if (price < 2000000) return "Under $2M";
    if (price < 3000000) return "$2M - $3M";
    if (price < 4000000) return "$3M - $4M";
    if (price < 5000000) return "$4M - $5M";
    return "$5M+";
  },
  
  hasView: (property, viewType) => {
    return property.viewsOffered?.includes(viewType) || false;
  },
  
  hasFeature: (property, feature) => {
    return property.features?.includes(feature) || false;
  }
};

