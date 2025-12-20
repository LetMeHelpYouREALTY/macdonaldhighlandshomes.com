// TypeScript declarations for RealScout web components
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': {
        'agent-encoded-id': string;
        'sort-order'?: string;
        'listing-status'?: string;
        'property-types'?: string;
        'price-min'?: string;
        'price-max'?: string;
        children?: React.ReactNode;
      };
    }
  }
}

export {};
