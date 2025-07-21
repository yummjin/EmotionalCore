import { NextRequest, NextResponse } from 'next/server';
import { PATH } from '@/shared/constants/path';

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  console.log(pathname, search);

  const needAuth =
    pathname.startsWith(PATH.USER) || pathname.startsWith(PATH.LIBRARY);

  if (needAuth) {
    const userToken = request.cookies.get('userToken')?.value;
    const userInfo = request.cookies.get('userInfo')?.value;

    if (!userToken || !userInfo) {
      const loginUrl = new URL(PATH.LOGIN, request.url);
      loginUrl.searchParams.set('returnUrl', pathname + search);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|public).*)'],
};
