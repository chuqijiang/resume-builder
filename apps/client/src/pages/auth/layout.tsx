import { t } from "@lingui/macro";
import { cn } from "@reactive-resume/utils";
import { useMemo } from "react";
import { Link, matchRoutes, Outlet, useLocation } from "react-router-dom";

import { LocaleSwitch } from "@/client/components/locale-switch";
import { Logo } from "@/client/components/logo";
import { ThemeSwitch } from "@/client/components/theme-switch";
import { useAuthProviders } from "@/client/services/auth/providers";

import { SocialAuth } from "./_components/social-auth";

const authRoutes = [{ path: "/auth/login" }, { path: "/auth/register" }];

export const AuthLayout = () => {
  const location = useLocation();
  const { providers } = useAuthProviders();
  const isAuthRoute = useMemo(() => matchRoutes(authRoutes, location) !== null, [location]);

  if (!providers) return null;

  const hideDivider = !providers.includes("email") || providers.length === 1;

  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      {/* Background Image */}
      <img
        src="/backgrounds/ChatGPT_Carousel1.jpg"
        alt="Open books on a table"
        className="absolute inset-0 h-full w-full object-cover z-0"
      />

      {/* Centered Form Box */}
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4 sm:mx-0">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="size-24">
            <Logo className="-ml-3" size={96} />
          </Link>
          <div className="space-x-2">
            <LocaleSwitch />
            <ThemeSwitch />
          </div>
        </div>

        <Outlet />

        {isAuthRoute && (
          <>
            <div className={cn("flex items-center gap-x-4 mt-4", hideDivider && "hidden")}>
              <hr className="flex-1" />
              <span className="text-xs font-medium">
                {t({
                  message: "or continue with",
                  context:
                    "The user can either login with email/password, or continue with GitHub or Google.",
                })}
              </span>
              <hr className="flex-1" />
            </div>
            <SocialAuth />
          </>
        )}
      </div>
    </div>
  );
};
