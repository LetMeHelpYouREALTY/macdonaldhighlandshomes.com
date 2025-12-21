import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect /Services (capital S) to /services (lowercase) for case-insensitivity
  if (pathname.startsWith('/Services')) {
    const newPath = pathname.replace('/Services', '/services');
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  // Redirect /About (capital A) to /about-dr-jan-duffy
  if (pathname === '/About' || pathname.startsWith('/About/')) {
    const newPath = pathname.replace('/About', '/about-dr-jan-duffy');
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  // Redirect /Property/Property_type/ (trailing slash or empty) to /Property
  if (pathname === '/Property/Property_type' || pathname === '/Property/Property_type/') {
    return NextResponse.redirect(new URL('/Property', request.url));
  }

  // Handle common case variations
  const lowerPath = pathname.toLowerCase();
  
  // Only redirect if the lowercase version would be different and is a known route
  if (lowerPath !== pathname) {
    const knownRoutes = [
      '/services', '/listings', '/contact', '/testimonials', 
      '/about-dr-jan-duffy', '/macdonald-highlands-community'
    ];
    
    // Check if lowercase version matches a known route
    if (knownRoutes.some(route => lowerPath === route || lowerPath.startsWith(route + '/'))) {
      return NextResponse.redirect(new URL(lowerPath, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

