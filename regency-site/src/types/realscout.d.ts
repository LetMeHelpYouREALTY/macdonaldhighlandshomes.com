// TypeScript declarations for RealScout web components
// React 19 uses React.JSX namespace instead of global JSX
import React from 'react';

type RealScoutListingsAttributes = {
  'agent-encoded-id': string;
  'sort-order'?: string;
  'listing-status'?: string;
  'property-types'?: string;
  'price-min'?: string;
  'price-max'?: string;
  children?: React.ReactNode;
};

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': RealScoutListingsAttributes;
    }
  }
}

// Also declare in global JSX for compatibility
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': RealScoutListingsAttributes;
    }
  }
}

export {};


