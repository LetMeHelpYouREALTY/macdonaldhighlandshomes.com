// Site-wide configuration — keep in sync with Google Business Profile
// Business: Henderson MacDonald Highlands Real Estate | Homes by Dr. Jan Duffy

export const siteConfig = {
  // Exact GBP business name
  name: "Henderson MacDonald Highlands Real Estate | Homes by Dr. Jan Duffy",
  shortName: "MacDonald Highlands",
  tagline: "Homes by Dr. Jan Duffy",
  /** Navbar / footer brand mark */
  logo: {
    title: "MacDonald Highlands",
    subtitle: "Homes by Dr. Jan Duffy",
  },
  // Exact GBP description
  description:
    "MacDonald Highlands is a guard-gated golf community in Henderson (89012), built around DragonRidge Country Club in the McCullough Range foothills. Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, helps buyers and sellers here compare custom estates, view lots, and resales by lot size, Strip and valley views, square footage, and HOA dues. Buyers get private showings and guidance on custom builds. Sellers get pricing built on recent MacDonald Highlands closed sales and marketing aimed at luxury and relocating buyers. Book a private consultation.",
  location: "Henderson, NV 89012",
  website: "https://www.macdonaldhighlandshomes.com",
  websiteGbp: "https://macdonaldhighlandshomes.com/",
  foundingDate: "2013-09-19",
  categories: {
    primary: "Real estate agent",
    additional: ["Real estate agency", "Real estate consultant", "Property management company"],
  },
  // Deduped GBP service offerings (primary agent + agency + consultant + property management)
  gbpServices: [
    {
      name: "Seller's agent services",
      href: "/services/selling-your-macdonald-highlands-home",
      description:
        "Listing representation in MacDonald Highlands. Pricing built on recent MacDonald Highlands closed sales, professional photos, and marketing aimed at buyers already searching MacDonald Highlands. Dr. Jan Duffy handles every offer through closing.",
    },
    {
      name: "Buying agent services",
      href: "/services/buying-in-macdonald-highlands",
      description:
        "Buyer representation in MacDonald Highlands, Henderson (89012). Compare guard-gated custom homes and golf-course lots by view, lot size, square footage, and HOA dues, with private showings and pricing built on recent MacDonald Highlands sales.",
    },
    {
      name: "Luxury property buying & sales",
      href: "/services/selling-your-macdonald-highlands-home",
      description:
        "Luxury buying and selling in MacDonald Highlands. Dr. Jan Duffy compares higher-end MacDonald Highlands homes by lot, view, square footage, upgrades, and HOA dues, and prices listings from recent MacDonald Highlands closed sales.",
    },
    {
      name: "Comparative Market Analysis",
      href: "/services/luxury-home-valuation",
      description:
        "A home value report for MacDonald Highlands, built on recent MacDonald Highlands closed sales, active listings, days on market, and list-to-sale ratios, with a clear pricing recommendation.",
    },
    {
      name: "Relocation assistance",
      href: "/services/relocation-concierge",
      description:
        "Moving to MacDonald Highlands? Dr. Jan Duffy sets up video or in-person tours, explains HOA rules and dues, compares MacDonald Highlands listings by price and square footage, and coordinates closing on your timeline.",
    },
    {
      name: "Real estate investing",
      href: "/services/investment-advisory",
      description:
        "Investment property help in MacDonald Highlands: rental comparables, HOA rental rules, projected costs, and recent MacDonald Highlands sales to estimate returns before you buy.",
    },
    {
      name: "Property management",
      href: "/services/investment-advisory",
      description:
        "Support for MacDonald Highlands owners who rent: rental pricing from current MacDonald Highlands comparables, HOA rental rules, and leasing help.",
    },
    {
      name: "Property rentals",
      href: "/services/investment-advisory",
      description:
        "Leasing help in MacDonald Highlands: rental pricing from current MacDonald Highlands comparables, HOA rental rules, and lease review.",
    },
    {
      name: "Furnished property rentals & sales",
      href: "/services/selling-your-macdonald-highlands-home",
      description:
        "Buying or selling a furnished home in MacDonald Highlands? Dr. Jan Duffy prices furnished listings from recent MacDonald Highlands sales and explains HOA rules on rentals.",
    },
    {
      name: "Land leasing & sales",
      href: "/services/buying-in-macdonald-highlands",
      description:
        "Lot and land sales in and near MacDonald Highlands: zoning checks, utility access, HOA rules, and pricing from recent land sales.",
    },
    {
      name: "New construction services",
      href: "/services/buying-in-macdonald-highlands",
      description:
        "New-construction help in MacDonald Highlands: builder registration before your first model visit, incentive tracking, lot and upgrade guidance, and construction walkthroughs. Buyer representation is typically paid by the builder.",
    },
    {
      name: "Real estate sales management",
      href: "/services/selling-your-macdonald-highlands-home",
      description:
        "Sales management for MacDonald Highlands listings: pricing, showings, offer review, inspection and appraisal follow-up, and closing coordination.",
    },
    {
      name: "First-Time Home Buyer Assistance",
      href: "/services/buying-in-macdonald-highlands",
      description:
        "First-time buyers in MacDonald Highlands get a step-by-step plan: budget and lender introductions, MacDonald Highlands listings compared by price and HOA dues, offer strategy, inspection, and closing, explained in plain terms.",
    },
    {
      name: "Home staging",
      href: "/services/selling-your-macdonald-highlands-home",
      description:
        "Staging guidance for MacDonald Highlands sellers: what to repair, declutter, and highlight before listing photos, based on what recent MacDonald Highlands buyers paid for.",
    },
    {
      name: "Real estate marketing",
      href: "/services/selling-your-macdonald-highlands-home",
      description:
        "Listing marketing for MacDonald Highlands homes: professional photos, online listing syndication, targeted digital ads, and open houses aimed at buyers searching MacDonald Highlands.",
    },
    {
      name: "Real estate photography",
      href: "/services/selling-your-macdonald-highlands-home",
      description:
        "Professional listing photography for MacDonald Highlands homes, scheduled with your listing launch so the home shows well online from day one.",
    },
    {
      name: "Condo buying & sales assistance",
      href: "/services/buying-in-macdonald-highlands",
      description:
        "Condo and townhome buying and selling in MacDonald Highlands. Units compared by floor plan, square footage, HOA dues, and recent MacDonald Highlands sales.",
    },
  ],
  attributes: {
    veteranOwned: true,
    womenOwned: true,
    lgbtqFriendly: true,
    transgenderSafespace: true,
    wheelchairAccessibleEntrance: true,
    wheelchairAccessibleParking: true,
    wheelchairAccessibleRestroom: true,
    wheelchairAccessibleSeating: true,
    genderNeutralRestroom: true,
    freeParkingLot: true,
    freeParkingGarage: true,
    freeStreetParking: true,
    onsiteParking: true,
    onsiteServices: true,
    onlineAppointments: true,
    appointmentNotRequired: true,
  },
  agent: {
    name: "Dr. Jan Duffy",
    title: "Listing Specialist, REALTOR®",
    phone: "702-500-1955",
    email: "DrDuffy@MacDonaldHighlandsHomes.com",
    license: "S.0197614.LLC",
    brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
    credentials: "Ph.D. in Research",
    experience: "500+ team sales, $127M+ in Dr. Duffy Group career sales",
    specialties: [
      "MacDonald Highlands Listing Specialist",
      "Luxury Home Sales & Acquisitions",
      "Pre-Listing Strategy & Staging",
      "DragonRidge Country Club Properties",
      "Off-Market & Pocket Listings",
      "Relocation Concierge Services",
      "Investment Advisory",
    ],
  },
  community: {
    name: "MacDonald Highlands",
    size: "1,320 acres",
    type: "Guard-Gated Master-Planned Luxury Golf Community",
    golfCourse: "DragonRidge Championship Course (Jay Morrish)",
    lotSizes: "1/3 to 1+ acres",
    priceRange: "$1M-$15M+",
    proximity: "15-20 minutes from Las Vegas Strip",
    entries: "Two beautifully landscaped, 24-hour guard-gated entries",
  },
  contact: {
    phone: "702-500-1955",
    phoneFormatted: "(702) 500-1955",
    phoneE164: "+17025001955",
    smsHref: "sms:+17025001955",
    email: "DrDuffy@MacDonaldHighlandsHomes.com",
    emailSells: "DrDuffySells@MacDonaldHighlandsHomes.com",
    // Service area (GBP)
    address: {
      street: "MacDonald Highlands",
      city: "Henderson",
      state: "NV",
      zip: "89012",
      full: "MacDonald Highlands, Henderson, NV 89012, USA",
    },
    // Business location (GBP)
    office: {
      street: "3185 St Rose Pkwy, Suite 101",
      city: "Henderson",
      state: "NV",
      zip: "89052",
      full: "3185 St Rose Pkwy, Suite 101, Henderson, NV 89052",
    },
    // Display summary — Wed closes 8:30 PM per GBP
    hours: "Sun–Sat 8:00 AM–8:00 PM (Wed until 8:30 PM)",
    hoursDetailed: [
      { day: "Sunday", opens: "08:00", closes: "20:00", label: "8:00 AM–8:00 PM" },
      { day: "Monday", opens: "08:00", closes: "20:00", label: "8:00 AM–8:00 PM" },
      { day: "Tuesday", opens: "08:00", closes: "20:00", label: "8:00 AM–8:00 PM" },
      { day: "Wednesday", opens: "08:00", closes: "20:30", label: "8:00 AM–8:30 PM" },
      { day: "Thursday", opens: "08:00", closes: "20:00", label: "8:00 AM–8:00 PM" },
      { day: "Friday", opens: "08:00", closes: "20:00", label: "8:00 AM–8:00 PM" },
      { day: "Saturday", opens: "08:00", closes: "20:00", label: "8:00 AM–8:00 PM" },
    ],
  },
  // Exact GBP social profiles
  social: {
    instagram: "https://www.instagram.com/drjanduffy/",
    pinterest: "https://www.pinterest.com/DrJanDuffy/",
    twitter: "https://x.com/drjanduffy",
    linkedin:
      "https://www.linkedin.com/company/dr-jan-duffy-realtor-berkshire-hathaway-homeservices-henderson/",
    facebook: "https://www.facebook.com/DrJanDuffyRealtorHenderson/",
    youtube: "https://www.youtube.com/@DrDuffy",
    tiktok: "https://www.tiktok.com/@drjanduffy",
  },
  seo: {
    // CTR-first: brand name + realtor/listing-agent intent matching GSC top queries
    title: "Dr. Jan Duffy — MacDonald Highlands Realtor & Listing Agent",
    description:
      "Need a MacDonald Highlands realtor? Dr. Jan Duffy is the Listing Specialist for buyers and sellers of $1M–$15M+ guard-gated homes in Henderson, NV—plus valuations, new-construction guidance, and HOA-aligned leasing. Call (702) 500-1955.",
    keywords:
      "Dr. Jan Duffy, Duffy realtor, MacDonald Highlands realtor, MacDonald Highlands listing agent, MacDonald Highlands Listing Specialist, realtor for sellers MacDonald Highlands, realtor for buyers MacDonald Highlands, new construction realtor MacDonald Highlands, Henderson NV luxury homes for sale, DragonRidge Country Club real estate",
  },
  // Prefer licensed MacDonald Highlands community photography over AI lifestyle art.
  // Paths point at pre-resized WebP for mobile LCP / PageSpeed (full masters remain under /photos/community/).
  images: {
    listingSpecialistHero: "/photos/community/optimized/hero-view-lifestyle-1280.webp",
    aboutHero: "/photos/community/optimized/view-lifestyle-00024-full-1280.webp",
    whyListingSpecialist: "/photos/community/optimized/clubhouse-full-1280.webp",
    servicesOverview: "/photos/community/optimized/foothills-village-1280.webp",
    selling: "/photos/community/optimized/pool-full-1280.webp",
    buying: "/photos/community/optimized/guard-gate-full-1280.webp",
    valuation: "/photos/community/optimized/view-lifestyle-00024-full-1280.webp",
    relocation: "/photos/community/optimized/clubhouse-full-1280.webp",
    investment: "/photos/community/optimized/golf-lifestyle-full-1280.webp",
    offMarket: "/photos/community/optimized/guard-gate-full-1280.webp",
    /** Official circular brand portrait — favicon + sitewide agent identity */
    agentHeadshot: "/photos/agent/dr-jan-duffy-headshot.webp",
    agentHeadshotJpg: "/photos/agent/dr-jan-duffy-headshot.jpg",
    agentHeadshotAlt:
      "Dr. Jan Duffy, MacDonald Highlands Listing Specialist and REALTOR® in Henderson, Nevada",
    agentNav: "/photos/agent/dr-jan-duffy-nav.webp",
  },
  // GBP-cited rating (5.0 / 6 reviews). Keep in sync with live Google Business Profile — never invent.
  reviews: {
    ratingValue: 5,
    reviewCount: 6,
    bestRating: 5,
    worstRating: 1,
  },

  realscout: {
    agentId: "QWdlbnQtMjI1MDUw",
    widgetScript: "https://em.realscout.com/widgets/realscout-web-components.umd.js",
  },
  calendly: {
    profileUrl: "https://calendly.com/drjanduffy",
    showingUrl: "https://calendly.com/drjanduffy/showing",
    listingConsultationUrl: "https://calendly.com/drjanduffy/listing-consultation",
    buyerConsultationUrl: "https://calendly.com/drjanduffy/buyer-consultation-30-min",
    marketStrategyUrl: "https://calendly.com/drjanduffy/15min",
    zoomMeetingUrl: "https://calendly.com/drjanduffy/meet-on-zoom",
  },
};

/** All GBP social profile URLs for schema sameAs */
export function gbpSocialSameAs() {
  return Object.values(siteConfig.social);
}
