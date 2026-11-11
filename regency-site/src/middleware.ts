import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Prefer permanent redirects so Google does not flag temporary/chain redirect errors. */
function permanentRedirect(request: NextRequest, pathname: string) {
  const url = request.nextUrl.clone();
  url.pathname = pathname;
  url.search = request.nextUrl.search;
  return NextResponse.redirect(url, 308);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = (request.headers.get("host") || "").toLowerCase().split(":")[0];

  // Canonical host: apex → www (backlinks + GSC often hit apex; Vercel 307 alone is temporary)
  if (host === "macdonaldhighlandshomes.com") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = "www.macdonaldhighlandshomes.com";
    return NextResponse.redirect(url, 308);
  }

  // Redirect /Services (capital S) to /services (lowercase)
  if (pathname.startsWith("/Services")) {
    return permanentRedirect(request, pathname.replace("/Services", "/services"));
  }

  // Redirect /About (capital A) to /about-dr-jan-duffy
  if (pathname === "/About" || pathname.startsWith("/About/")) {
    return permanentRedirect(request, pathname.replace("/About", "/about-dr-jan-duffy"));
  }

  // ThemeWagon demo Property routes → live listings
  if (pathname === "/Property" || pathname.startsWith("/Property/")) {
    return permanentRedirect(request, "/listings");
  }
  if (pathname === "/Login" || pathname.startsWith("/Login/")) {
    return permanentRedirect(request, "/");
  }
  if (pathname === "/Dashboard" || pathname.startsWith("/Dashboard/")) {
    return permanentRedirect(request, "/");
  }
  if (pathname === "/test-images" || pathname === "/image-diagnostic") {
    return permanentRedirect(request, "/");
  }

  // Handle common case variations with permanent redirects
  const lowerPath = pathname.toLowerCase();
  if (lowerPath !== pathname) {
    const knownRoutes = [
      "/services",
      "/listings",
      "/contact",
      "/testimonials",
      "/about-dr-jan-duffy",
      "/macdonald-highlands-community",
      "/sold",
      "/insights",
    ];

    if (knownRoutes.some((route) => lowerPath === route || lowerPath.startsWith(`${route}/`))) {
      return permanentRedirect(request, lowerPath);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api, _next/static, _next/image
     * Keep favicon.ico in matcher so apex→www still applies to it.
     */
    "/((?!api|_next/static|_next/image).*)",
  ],
};
