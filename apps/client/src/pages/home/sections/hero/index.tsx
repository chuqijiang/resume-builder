import { t } from "@lingui/macro";
import { HeroCTA } from "./call-to-action";

export const HeroSection = () => (
  <section id="hero" className="relative h-screen flex">
    {/* Left half for text */}
    <div className="flex-1 bg-background flex flex-col justify-center px-6 lg:px-12">
      <div className="max-w-lg mx-auto space-y-4">

        <div className="mt-10 space-y-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {t`Build Your Resume with InternUp`}
          </h1>
        </div>
        <p className="prose prose-base prose-zinc mt-6 text-lg leading-8 dark:prose-invert">
          {t`InternUp's resume builder simplifies creating, updating, and sharing your resume. Join our mission to connect international graduates with U.S. opportunities and make an impact in the job market.`}
        </p>
        <div className="mt-10 flex items-center gap-x-8">
          <HeroCTA />
        </div>
      </div>
    </div>

    {/* Right half for the image */}
    <div className="flex-1 relative">
      <img
        src="/backgrounds/wriitng_with_AI.jpg"
        alt="Resume Builder"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  </section>
);
