import { NextResponse } from 'next/server';

const locales = ['en', 'hi', 'bn'];
const defaultLocale = 'en';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Check for locale cookie
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;
  const locale = locales.includes(localeCookie) ? localeCookie : defaultLocale;

  // Rewrite URL to include the locale behind the scenes
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.rewrite(request.nextUrl);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico).*)',
  ],
};