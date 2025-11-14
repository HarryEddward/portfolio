import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function blockBotsMiddleware(req: NextRequest) {
  const userAgent = req.headers.get("user-agent") || "";
  if (/bot|crawl|spider/i.test(userAgent)) {
    return new NextResponse("Bots are not allowed", { status: 403 });
  }
  return NextResponse.next();
}
