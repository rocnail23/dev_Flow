import { authMiddleware } from '@clerk/nextjs';

/**
 * Check which pages are public and which need to hide behind authentication.
 */
export default authMiddleware({
  publicRoutes: ['/',"/api/webhooks(.*)"]
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
};
