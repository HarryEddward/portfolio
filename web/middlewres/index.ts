import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export type MiddlewareFn = (req: NextRequest) => Promise<NextResponse> | NextResponse;

export function chainMiddlewares(...middlewares: MiddlewareFn[]) {
  return async (req: NextRequest) => {
    for (const mw of middlewares) {
      const res = await mw(req);
      // si el middleware devuelve una respuesta no neutra (redirect, 403, etc.), se corta la cadena
      if (res && res !== NextResponse.next()) {
        return res;
      }
    }
    return NextResponse.next();
  };
}
