import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
    "/home",
    "/sign-in(.*)",
    "/sign-up(.*)",
]);

const isPublicApiRoute = createRouteMatcher([
    "/api/videos(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
    const { userId, redirectToSignIn } = await auth();

    const pathname = req.nextUrl.pathname;
    const isApiRequest = pathname.startsWith("/api");

    // Always redirect "/" -> "/home"
    if (pathname === "/") {
        return NextResponse.redirect(new URL("/home", req.url));
    }

    // Logged-in user
    if (userId) {
        // Don't allow authenticated users on auth pages
        if (
            pathname.startsWith("/sign-in") ||
            pathname.startsWith("/sign-up")
        ) {
            return NextResponse.redirect(new URL("/home", req.url));
        }

        return NextResponse.next();
    }

    // Logged-out user

    // Allow public pages
    if (isPublicRoute(req)) {
        return NextResponse.next();
    }

    // Allow public APIs
    if (isPublicApiRoute(req)) {
        return NextResponse.next();
    }

    // Protect all APIs
    if (isApiRequest) {
        return redirectToSignIn();
    }

    // Protect all other pages
    return redirectToSignIn();
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};