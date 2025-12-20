// Component-Ready Content for MacDonald Highlands Website
// Ready-to-use content for Next.js components

export const heroSection = {
  headline: "Luxury Living Elevated Above the Las Vegas Strip",
  subheading: "Discover MacDonald Highlands: Henderson's Premier Guard-Gated Community Where Panoramic Strip Views Meet Mountain Serenity",
  primaryCTA: "Explore Properties",
  primaryCTALink: "/Property",
  secondaryCTA: "Schedule a Tour",
  secondaryCTALink: "/Contact_us",
  badgeText: "Guard-Gated • Championship Golf • Strip Views"
};

export const featuresSection = {
  title: "Why MacDonald Highlands",
  subtitle: "Experience the pinnacle of luxury living in Henderson's most exclusive community",
  features: [
    {
      icon: "shield",
      title: "Guard-Gated Security",
      description: "24/7 security and controlled access for ultimate peace of mind"
    },
    {
      icon: "golf",
      title: "DragonRidge Golf",
      description: "Championship 18-hole course designed by Jay Morrish"
    },
    {
      icon: "home",
      title: "Expansive Lots",
      description: "1/3 to 1+ acre lots with custom estate homes"
    },
    {
      icon: "view",
      title: "Panoramic Views",
      description: "Breathtaking Strip and mountain views from elevated positions"
    },
    {
      icon: "location",
      title: "Prime Location",
      description: "15-20 minutes from the Strip, 20 minutes to airport"
    },
    {
      icon: "community",
      title: "Low-Density Living",
      description: "Privacy and exclusivity in a master-planned community"
    }
  ]
};

export const communityStats = {
  title: "MacDonald Highlands by the Numbers",
  stats: [
    {
      number: "1,200+",
      label: "Acres",
      description: "Master-planned community"
    },
    {
      number: "1/3 - 1+",
      label: "Acre Lots",
      description: "Expansive lot sizes"
    },
    {
      number: "$1M+",
      label: "Starting Price",
      description: "Luxury estate homes"
    },
    {
      number: "15-20",
      label: "Minutes",
      description: "To Las Vegas Strip"
    }
  ]
};

export const neighborhoodHighlights = {
  title: "Distinctive Neighborhoods",
  subtitle: "Each community within MacDonald Highlands offers unique character and luxury",
  neighborhoods: [
    {
      name: "SkyVu",
      description: "Elevated luxury with the most spectacular Strip views",
      priceRange: "$2M - $5M+",
      image: "/Image/hero_bg_1.jpg",
      link: "/Property/Property_type/SkyVu"
    },
    {
      name: "Vu",
      description: "Contemporary luxury with modern design and amenities",
      priceRange: "$1.5M - $3M+",
      image: "/Image/hero_bg_2.jpg",
      link: "/Property/Property_type/Vu"
    },
    {
      name: "Vue Pointe",
      description: "Mediterranean-inspired elegance by Christopher Homes",
      priceRange: "$1.8M - $4M+",
      image: "/Image/hero_bg_3.jpg",
      link: "/Property/Property_type/Vue Pointe"
    }
  ]
};

export const amenitiesSection = {
  title: "World-Class Amenities",
  subtitle: "Everything you need for an exceptional lifestyle",
  mainAmenity: {
    title: "DragonRidge Country Club",
    description: "The heart of MacDonald Highlands, featuring a championship golf course, fine dining, and exclusive member benefits.",
    features: [
      "18-hole championship golf course",
      "Designed by Jay Morrish",
      "Fine dining restaurant",
      "Pro shop and golf instruction",
      "Member tournaments and events"
    ]
  },
  otherAmenities: [
    {
      category: "Fitness & Wellness",
      items: ["Fully equipped fitness center", "Personal training", "Group fitness classes", "Spa services"]
    },
    {
      category: "Recreation",
      items: ["Community parks", "Dog parks", "Walking trails", "Tennis courts", "Swimming pools"]
    },
    {
      category: "Community",
      items: ["Holiday celebrations", "Social events", "Golf tournaments", "Family activities"]
    }
  ]
};

export const testimonialsSection = {
  title: "Life in MacDonald Highlands",
  subtitle: "Hear from our residents",
  testimonials: [
    {
      quote: "Living in MacDonald Highlands gives us the privacy and security we wanted, plus those incredible Strip views every evening. It's the perfect balance of luxury and tranquility.",
      author: "Resident",
      location: "SkyVu",
      image: "/Image/person1.jpeg"
    },
    {
      quote: "The guard-gated community and the DragonRidge golf course were the deciding factors for us. We couldn't be happier with our decision.",
      author: "Resident",
      location: "Vu",
      image: "/Image/person_2-min.jpg"
    },
    {
      quote: "The lot sizes here are exceptional. We have room for our family to grow, plus the views are absolutely breathtaking.",
      author: "Resident",
      location: "Vue Pointe",
      image: "/Image/person_4-min.jpg"
    }
  ]
};

export const ctaSection = {
  title: "Ready to Experience MacDonald Highlands?",
  subtitle: "Schedule a private tour and discover your perfect luxury estate",
  primaryCTA: "Schedule a Tour",
  primaryCTALink: "/Contact_us",
  secondaryCTA: "View Properties",
  secondaryCTALink: "/Property"
};

export const aboutPageContent = {
  hero: {
    title: "About MacDonald Highlands",
    subtitle: "Henderson's Premier Guard-Gated Luxury Community"
  },
  sections: [
    {
      title: "Our Story",
      content: "MacDonald Highlands was developed with a clear vision: to create Henderson's most exclusive, secure, and beautifully designed luxury community. Nestled in the foothills of the McCullough Mountains, this 1,200+ acre master-planned community offers an unparalleled lifestyle defined by privacy, security, and natural beauty."
    },
    {
      title: "The Vision",
      content: "Every aspect of MacDonald Highlands reflects a commitment to excellence. From guard-gated security to low-density development, from the preservation of natural landscapes to architectural diversity, the community embodies a philosophy of sophisticated, sustainable luxury living."
    },
    {
      title: "Why MacDonald Highlands",
      content: "In a region known for luxury living, MacDonald Highlands stands apart through its unique combination of location, amenities, and community design. With larger lot sizes, guard-gated security, championship golf, and panoramic Strip views, it offers an unmatched luxury living experience."
    }
  ]
};

export const contactPageContent = {
  hero: {
    title: "Contact Us",
    subtitle: "Let us help you discover your dream home in MacDonald Highlands"
  },
  form: {
    title: "Get in Touch",
    subtitle: "Fill out the form below and our team will contact you within 24 hours",
    fields: {
      name: { label: "Full Name", placeholder: "Enter your name", required: true },
      email: { label: "Email Address", placeholder: "your.email@example.com", required: true },
      phone: { label: "Phone Number", placeholder: "(702) 555-0123", required: false },
      propertyInterest: { label: "Property of Interest", placeholder: "Select a property", required: false },
      budget: { label: "Price Range", placeholder: "Select your budget", required: false },
      message: { label: "Message", placeholder: "Tell us how we can help...", required: false }
    },
    submitText: "Send Message",
    successMessage: "Thank you! We'll contact you within 24 hours.",
    errorMessage: "There was an error sending your message. Please try again."
  },
  contactInfo: {
    title: "Contact Information",
    phone: "(702) 555-0123",
    email: "info@macdonaldhighlands.com",
    address: "MacDonald Highlands, Henderson, NV 89012",
    hours: "Monday - Sunday: 9:00 AM - 6:00 PM"
  },
  process: {
    title: "Your Journey to MacDonald Highlands",
    steps: [
      {
        number: "01",
        title: "Initial Consultation",
        description: "We'll discuss your lifestyle preferences, budget, and what you're looking for in a luxury home."
      },
      {
        number: "02",
        title: "Property Selection",
        description: "We'll show you properties that match your criteria, including available homes and buildable lots."
      },
      {
        number: "03",
        title: "Private Tour",
        description: "Experience MacDonald Highlands firsthand with a guided tour of the community and properties."
      },
      {
        number: "04",
        title: "Offer & Closing",
        description: "Our team will guide you through the entire purchase process, ensuring a smooth transaction."
      }
    ]
  }
};

