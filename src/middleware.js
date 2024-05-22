import { NextResponse } from "next/server";
// import { HOME_ROUTE, ROOT_ROUTE, SESSION_COOKIE_NAME } from './constants';
// import { HOME_ROUTE, ROOT_ROUTE, SESSION_COOKIE_NAME} from "@/utils/constants";
import { HOME_ROUTE, ROOT_ROUTE, SESSION_COOKIE_NAME } from "./utils/constants";

// const protectedRoutes = [HOME_ROUTE];
const publicRoutes = ["/login", "/signup"];

export default function middleware(req) {
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);
  const res = NextResponse.next();
  const session = req.cookies.get(SESSION_COOKIE_NAME)?.value;
  const parsedSession = session? JSON.parse(session) :{};
  //console.log("parse session", parsedSession.userID);

  if (!isPublicRoute && !parsedSession?.userID) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
  if (isPublicRoute && parsedSession?.userID) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
  return res;

}


export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}