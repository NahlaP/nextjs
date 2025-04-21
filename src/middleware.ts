

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get('token')?.value || '';

  // If user tries to access /login or /signup and already logged in, redirect to home
  if ((path === '/login' || path === '/signup') && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // If user tries to access /profile without token, redirect to login
  if (path.startsWith('/profile') && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next(); // Allow the request to continue
}

export const config = {
  matcher: ['/profile', '/login', '/signup','/verifyemail'], // Only these paths trigger middleware
};
