import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect /Services (capital S) to /services (lowercase) for case-insensitivity
  if (pathname.startsWith('/Services')) {
    const newPath = pathname.replace('/Services', '/services');
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  // Redirect /About (capital A) to /about-dr-jan-duffy if needed
  if (pathname === '/About') {
    return NextResponse.redirect(new URL('/about-dr-jan-duffy', request.url));
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
