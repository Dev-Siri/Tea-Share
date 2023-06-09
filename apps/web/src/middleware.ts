import { NextResponse, userAgent, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { isBot } = userAgent(request);
  const token = request.cookies.get("auth_token")?.value;
  const onAuthPage = request.nextUrl.pathname.startsWith("/auth");

  if (isBot) return NextResponse.next();

  if (!onAuthPage && !token) return NextResponse.redirect(new URL("/auth", request.url));

  if (onAuthPage && token) return NextResponse.redirect(new URL("/", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/((?!api|static|.*\\..*|_next).*)"],
};
