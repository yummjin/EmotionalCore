import { PATH } from '@/shared/constants';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith(PATH.USER)) {
    const userToken = request.cookies.get('userToken')?.value;

    if (!userToken) {
      return NextResponse.redirect(new URL(PATH.LOGIN, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/user/:path*',
};
