import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest, _: NextResponse) {
  const { pathname } = req.nextUrl;
  const host = req.headers.get('host');

  if (pathname == '/') {
    return NextResponse.redirect(`http://${host}/spa`);
  }

  return NextResponse.next();
}
