import { NextResponse, userAgent, type NextMiddleware } from "next/server";

export const middleware: NextMiddleware = async request => {
  const { isBot } = userAgent(request);
  const token = request.cookies.get("auth_token")?.value;
  const onAuthPage = request.nextUrl.pathname.startsWith("/auth");

  if (isBot) return NextResponse.next();

  if (!onAuthPage && !token) return NextResponse.redirect(new URL("/auth", request.url));

  if (onAuthPage && token) return NextResponse.redirect(new URL("/", request.url));

  return NextResponse.next();
};

export const config = {
  matchers: ["/", "/((?!api|static|.*\\..*|_next).*)"],
};
